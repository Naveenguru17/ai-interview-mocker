"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `A platform to practice and enhance your interview skills with
          simulated AI-driven questions and feedback.Tailored to help you prepare for various tech interviews and improve
          your responses effectively.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
