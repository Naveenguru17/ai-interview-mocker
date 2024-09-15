"use client";

import Image from "next/image";
import { BackgroundBeams } from "../components/ui/background-beams";
import { TextGenerateEffectDemo } from "../components/ui/TextGenerateEffectDemo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { useRouter } from "next/navigation";
import InfiniteMovingCardsDemo from "../components/ui/InfiniteMovingCardsDemo";

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col items-center text-center bg-black text-white">
      <BackgroundBeams />
      <div className="pt-12 px-6 md:px-12 lg:px-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-10">
          Welcome to <span className="text-teal-400">AI Interview Mocker</span>
        </h1>
        <div className="mx-4 md:mx-8 lg:mx-20 mt-6 md:mt-10 text-sm md:text-base lg:text-lg">
          <TextGenerateEffectDemo />
        </div>
        
        <div className="flex justify-center mt-6 md:mt-10 lg:mt-12">
          <HoverBorderGradient onClick={() => router.push("/dashboard")}>
            Get started
          </HoverBorderGradient>
        </div>

        <div className="mt-6 md:mt-10 lg:mt-12">
          <InfiniteMovingCardsDemo />
        </div>
      </div>
    </div>
  );
}
