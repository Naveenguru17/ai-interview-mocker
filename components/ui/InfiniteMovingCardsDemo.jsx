import React from 'react';
import {InfiniteMovingCards} from './InfiniteMovingCards';

const items = [
    {
      title: "Personalized Practice, Perfect Performance",
      description: "With InterviewAI, access unlimited AI-generated practice interviews tailored to your job aspirations. Receive instant feedback and scoring to refine your performance and stand out in every interview."
    },
    {
      title: "Insights for Improvement",
      description: "Receive comprehensive insights into your interview responses with detailed feedback and suggestions for improvement. Dive deep into your performance metrics and track your progress over time."
    },
    {
      title: "AI-Powered Follow-Up Questions",
      description: "Unlock the full potential of your interview practice with InterviewAI's intelligent follow-up questions. Delve deeper into your answers, uncovering valuable insights to refine your strategy and elevate your performance."
    },
    {
      title: "Score Your Success",
      description: "After each practice interview, receive a detailed performance summary with scores for individual questions and an overall interview score. Monitor your progress and identify areas for growth to ensure you're interview-ready."
    },
    {
      title: "Tailored Interview Experience",
      description: "Customize your interview journey with InterviewAI's diverse question library, catering to your unique career goals and aspirations. Tailor your practice sessions to specific job categories, ensuring relevance and effectiveness."
    },
    {
      title: "Embrace AI Innovation",
      description: "Experience the cutting-edge technology of InterviewAI, revolutionizing interview preparation and performance. Stay ahead of the competition and maximize your interview success with AI-powered insights and guidance."
    }
  ];

function InfiniteMovingCardsDemo() {
  return (
    <div className="mt-20">
      <InfiniteMovingCards
        items={items}
        direction="left"
        speed="slow"
        pauseOnHover={true}
      />
    </div>
  );
}

export default InfiniteMovingCardsDemo;
