"use client"
import React, { useEffect, useState } from 'react'
import { UserAnswer } from '../../../../../utils/schema'
import { db } from '../../../../../utils/db';
import { eq } from 'drizzle-orm';
import {ChevronsUpDown} from 'lucide-react'
import { Button } from '../../../../../components/ui/button'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "../../../../../components/ui/collapsible";
import { useRouter } from 'next/navigation';


function Feedback({params}) {
    const [feedbackList,setfeedbackList]=useState([]);
    const router=useRouter();
    useEffect(()=>{
        GetFeedback();
    },[])
    const GetFeedback=async()=>{
        const result=await db.select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockIdRef,params.interviewId))
        .orderBy(UserAnswer.id);

        console.log(result);
        setfeedbackList(result);
    }
  return (
    <div className='p-10'>
      {feedbackList?.length==0?
      <h2 className='font-bold text-gray-400'>No interview Feedback</h2>:
      <>
      <h2 className='text-2xl font-bold text-green-500'>Congratulation!</h2>
      <h2 className='font-bold text-2xl'>Here is your interview feedback</h2>

      

      <h2 className='text-primary text-lg my-3'>Your overall interview rating:<strong>7/10</strong></h2>

      <h2 className='text-sm text-gray-500'>Find below interview question with correct answer,Your answer and feedback for improvement</h2>
      {feedbackList&&feedbackList.map((item,index)=>(
        <Collapsible key={index} className='mt-7'>
        <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-7 w-full'>
        {item.question}<ChevronsUpDown/>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className='flex flex-col gap-2'>
            <h2 className='text-red-500 border rounded-lg p-2'><strong>Rating:</strong>{item.rating}</h2>
            <h2 className='p-2 border rounded-lg bg-red-50 text-sm text text-red-900'><strong>Your Answer : </strong>{item.userAns}</h2>
            <h2 className='p-2 border rounded-lg bg-green-50 text-sm text text-green-900'><strong>Correct Answer : </strong>{item.correctAns}</h2>
            <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text text-blue-900'><strong>Feedback : </strong>{item.feedback}</h2>
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      ))}
      </>
    }
      <Button onClick={()=>router.push('/dashboard')}>Go Home</Button>
    </div>
  )
}

export default Feedback
