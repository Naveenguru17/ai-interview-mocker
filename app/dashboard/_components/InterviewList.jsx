"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { db } from '../../../utils/db';
import { MockInterview } from '../../../utils/schema';
import { desc, eq } from 'drizzle-orm';
import InterviewItemCard from "./InterviewItemCard"

function InterviewList() {
    const [interviewList,setinterviewList]=useState([]);

    const {user}=useUser();

    useEffect(() => {
        if (user) {
            console.log("User is available:", user); // Check if the user is retrieved
            GetInterviewList();
        } else {
            console.log("User not available yet");
        }
    }, [user]);

    const GetInterviewList=async()=>{
        const result=await db.select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy,user?.primaryEmailAddress))
        .orderBy(desc(MockInterview.id))

        setinterviewList(result)
        console.log(result)
    }
  return (
    <div>
      <h2 className='font-medium text-xl'>Previous Mock Interviews</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
        {interviewList&& interviewList.map((interview,index)=>(
            <InterviewItemCard
            interview={interview}
            key={index}
            />
        ))}
      </div>
    </div>
  )
}

export default InterviewList
