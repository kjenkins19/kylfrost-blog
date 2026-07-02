import React from 'react';
import TimeWastersList from './TimeWastersList';

const wasters = [
  {
    title: "Failure To Anticipate (Continued)",
    desc: "Failure to anticipate is the lack of focusing on possible outcomes or requirements.",
    causes: [
      "Trust the system to run well",
      "Focus on the here and now rather than the future",
      "Resist change"
    ],
    solutions: [
      "Set aside a specific amount of time each day to consider outcome possibilities",
      "Talk with others who may have prior experience with a specific task or person"
    ]
  }
];

const Page19 = () => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed text-sm">
        Review the causes and solutions to create an action plan for minimizing these time wasters.
      </p>
      <TimeWastersList wasters={wasters} />
    </div>
  );
};

export default Page19;
