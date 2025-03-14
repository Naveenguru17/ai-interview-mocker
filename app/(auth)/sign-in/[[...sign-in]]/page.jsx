import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Left Side Design as Static Content */}
        <section className="relative flex flex-col items-center justify-center p-12 bg-gradient-to-br from-blue-400 to-blue-800 text-white lg:col-span-5 lg:h-full xl:col-span-6">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold">AI Interview Mocker</h1>
            <p className="mt-4 text-lg opacity-90">
              Practice, Improve, and Ace Your Interviews with AI Guidance.
            </p>

            <div className="mt-8 space-y-4">
              <p className="text-lg">✅ Personalized Feedback</p>
              <p className="text-lg">✅ Real-time Mock Interview Sessions</p>
              <p className="text-lg">✅ AI-driven Question Analysis</p>
            </div>
          </div>
        </section>

        {/* Right Side Sign-In Section */}
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Master Your Interviews with AI Interview Mocker 🦑
              </h1>
              <p className="mt-4 leading-relaxed text-gray-500">
                Prepare for any challenge with AI-driven mock interviews.
                Build confidence and ace your next interview effortlessly.
              </p>
            </div>

            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
