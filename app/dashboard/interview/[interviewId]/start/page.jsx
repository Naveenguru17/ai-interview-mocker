"use client"
import React, { useEffect, useState } from 'react'
import { MockInterview } from "../../../../../utils/schema";
import { db } from "../../../../../utils/db";
import { eq } from "drizzle-orm";
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from '../../../_components/RecordAnswerSection';
import { Button } from '../../../../../components/ui/button';
import Link from 'next/link';

const Start=({params})=>{
    const [interviewData,setinterviewData]=useState();
    const [mockInterviewQuestion,setmockInterviewQuestion]=useState();
    const [activeQuestionIndex,setactiveQuestionIndex]=useState(0);
    useEffect(()=>{
        GetInterviewDetails();
    })
    const GetInterviewDetails = async () => {
        const result = await db
          .select()
          .from(MockInterview)
          .where(eq(MockInterview.mockId, params.interviewId));

          const jsonMockResp=JSON.parse(result[0].jsonMockResp);
          setmockInterviewQuestion(jsonMockResp);
    
        setinterviewData(result[0]);

         
      };
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <QuestionsSection mockInterviewQuestion={mockInterviewQuestion} activeQuestionIndex={activeQuestionIndex}/>
        <RecordAnswerSection mockInterviewQuestion={mockInterviewQuestion} activeQuestionIndex={activeQuestionIndex} interviewData={interviewData}/>
      </div>
      <div className='flex justify-end gap-6'>
        {activeQuestionIndex>0 && 
        <Button onClick={()=>setactiveQuestionIndex(activeQuestionIndex-1)}>Previous Question</Button>}
        {activeQuestionIndex!=mockInterviewQuestion?.length-1&&
        <Button onClick={()=>setactiveQuestionIndex(activeQuestionIndex+1)}>Next Question</Button>}
        {activeQuestionIndex==mockInterviewQuestion?.length-1&&
        <Link href={'/dashboard/interview/'+interviewData?.mockId+'/feedback'}><Button>End Question</Button></Link>}
      </div>
    </div>
  )
}

export default Start
