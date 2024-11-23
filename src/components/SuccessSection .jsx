import React from 'react';
import CountUp from 'react-countup';

const SuccessSection = () => {
  return (
    <div className="py-16 bg-base-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">Our Success So Far</h2>
        <p className="text-lg text-accent mb-12">
          We've helped thousands of learners enhance their Japanese language skills. 
          With an ever-growing collection of lessons, vocabulary, and tutorials, 
          our platform is designed to empower you in your language learning journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* User Count */}
          <div className="p-6 bg-base shadow-2xl rounded-lg">
            <h3 className="text-2xl text-accent mb-2">Users</h3>
            <p className="text-4xl font-bold text-secondary">
              <CountUp start={0} end={3000} duration={3} />
            </p>
          </div>

          {/* Lesson Count */}
          <div className="p-6 bg-base shadow-2xl rounded-lg">
            <h3 className="text-2xl text-accent mb-2">Lessons</h3>
            <p className="text-4xl font-bold text-secondary">
              <CountUp start={0} end={20} duration={3} />
            </p>
          </div>

          {/* Vocabulary Count */}
          <div className="p-6 bg-base shadow-2xl rounded-lg">
            <h3 className="text-2xl text-accent mb-2">Vocabulary</h3>
            <p className="text-4xl font-bold text-secondary">
              <CountUp start={0} end={500} duration={3} />
            </p>
          </div>

          {/* Tutorial Count */}
          <div className="p-6 bg-base shadow-2xl rounded-">
            <h3 className="text-2xl text-accent mb-2">Tutorials</h3>
            <p className="text-4xl font-bold text-secondary">
              <CountUp start={0} end={20} duration={3} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
