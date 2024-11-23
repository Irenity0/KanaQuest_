const AboutUs = () => {
    return (
        <div className="py-16 bg-base-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-6 md:flex-row items-center">
              {/* Image on the left */}
              <div className="w-full lg:w-2/3 md:w-1/2 pl-0">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About KanaQuest</h2>
                <p className="text-lg text-accent mb-6">
                  KanaQuest is your ultimate guide to mastering the Japanese language. We’ve designed a unique learning journey that helps you conquer the intricacies of Japanese writing systems, starting from Hiragana and Katakana to essential vocabulary.
                </p>
                <p className="text-lg text-accent">
                  Join us on a quest that makes learning fun and rewarding. Whether you're a beginner or an advanced learner, KanaQuest provides a challenging yet enjoyable experience tailored to your pace.
                </p>
              </div>
              {/* Text on the right */}
              <div className="w-full lg:w-1/3 md:w-1/2">
                <img
                  src="https://i.pinimg.com/736x/8e/8b/18/8e8b18157f6096c8767f2cd54081624c.jpg"
                  alt="About Us"
                  className="w-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
    );
};

export default AboutUs;