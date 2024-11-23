const HowItWorksSection = () => {
    return (
      <div className="py-16 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">How It Works</h2>
          <p className="text-lg text-accent mb-12">
            KanaQuest makes learning Japanese simple and effective. Follow these steps to get started:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-6 bg-base border-2 border-secondary/60 rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-2">Step 1: <span className="underline">Choose Your Level</span></h3>
              <p className="text-accent">Start by selecting your current level, whether you’re a beginner or advanced learner.</p>
            </div>
  
            {/* Step 2 */}
            <div className="p-6 bg-base border-2 border-secondary/60 rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-2">Step 2: <span className="underline">Take Lessons</span></h3>
              <p className="text-accent">Engage with interactive lessons designed to enhance your understanding of Japanese vocabulary and grammar.</p>
            </div>
  
            {/* Step 3 */}
            <div className="p-6 bg-base border-2 border-secondary/60 rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-2">Step 3: <span className="underline">Track Your Progress</span></h3>
              <p className="text-accent">Monitor your learning progress, earn rewards, and unlock new levels as you advance!</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default HowItWorksSection  