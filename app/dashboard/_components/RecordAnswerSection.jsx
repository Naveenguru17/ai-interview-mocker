"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Webcam from 'react-webcam'
import { Button } from '../../../components/ui/button'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '../../../utils/GeminiAIModel'
import { db } from '../../../utils/db'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { UserAnswer } from '../../../utils/schema'

function RecordAnswerSection({mockInterviewQuestion,activeQuestionIndex,interviewData}) {


    const [userAnswer,setuserAnswer]=useState('');
    const {user}=useUser();
    const {
        error,
        interimResult,
        isRecording,
        results,
        setResults,
        startSpeechToText,
        stopSpeechToText,
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });

      useEffect(() => {
        console.log("Is Recording:", isRecording);
      }, [isRecording]);
      

      useEffect(() => {
        console.log("Results updated:", results);
        results.map((result) => (
          console.log(result),
          setuserAnswer((prevAns) => {
            const newAnswer = prevAns + result?.transcript;
            console.log("New userAnswer:", newAnswer);
            return newAnswer;
          })
         
        ));
        console.log(userAnswer)
      }, [results]);

      useEffect(()=>{
        if(!isRecording && userAnswer.length>10){
          UpdateUserAnswer();
        }
      },[userAnswer])
      
      const StartStopRecording=async ()=>{
        if(isRecording){
          stopSpeechToText();
          if(userAnswer?.length<10){
            toast('Error while saving your answer, please record again');
            return;
          }
          

        }
        else{
          setuserAnswer('');
          startSpeechToText();
        }
      }

      const UpdateUserAnswer=async()=>{
        console.log(userAnswer);
        const feedbackPrompt="Question:"+mockInterviewQuestion[activeQuestionIndex]?.question+
          ",User Answer"+userAnswer+"Depends on questiona and user answer for given interview question"
          +"please give us rating for answer and feedback as area of imporvement if any"+
          "in just 3 to 5 lines ro improve it in JSON format with rating field and feedback field"

          try {
            const result = await chatSession.sendMessage(feedbackPrompt);
            const mockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');
            console.log(mockJsonResp);
            const JsonFeedbackResp=JSON.parse(mockJsonResp);

            const resp=await db.insert(UserAnswer)
            .values({
              mockIdRef:interviewData?.mockId,
              question:mockInterviewQuestion[activeQuestionIndex]?.question,
              correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
              userAns:userAnswer,
              feedback:JsonFeedbackResp?.feedback,
              rating:JsonFeedbackResp?.rating,
              userEmail:user?.primaryEmailAddress?.emailAddress,
              createdAt:moment().format('DD-MM-yyyy')
            })
            if(resp){
              toast('User Answer Recorded');
              setuserAnswer('');
              setResults([]);
            }
            setResults([]);
            
          } catch (error) {
            console.error("Error processing the feedbackPrompt:", error);
          }
          
      }
      
      
  return (
    <div className='flex items-center justify-center flex-col'>
    <div className='flex flex-col mt-20 justify-center items-center bg-black'>
      <Image alt='image' src={'/webcam.png'} width={200} height={200} className='absolute'/>
      <Webcam
      mirrored={true}
      style={{
        height:300,
        width:'100%',
        zIndex:10,
      }}
      />
    </div>
    <Button variant="outline" className="my-10"
    onClick={StartStopRecording}>
    {isRecording?
    <h2 className='text-red-600 flex gap-2'>
        <Mic/>'Recording...'
    </h2>:'Record Answer'}
        </Button>

    
    </div>
  )
}

export default RecordAnswerSection
