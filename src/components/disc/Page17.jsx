export const title = "Time Wasters Continued";
import React from 'react';
import TimeWastersList from './TimeWastersList';

const wasters = [
  {
    title: "Postpone The Unpleasant",
    desc: "Postponing the unpleasant is similar to procrastinating but is usually a continual reprioritizing of daily tasks. It is often a way to delay something that is not enjoyable.",
    causes: [
      "Like low-conflict environments and relationships",
      "Want to feel the success of accomplishment so the simple tasks are done first"
    ],
    solutions: [
      "Change your routine and, for one week, do the unpleasant tasks first",
      "See the accomplishment of unpleasant tasks as an equal or even greater achievement of success",
      "Reward yourself for every unpleasant task that you complete without postponing",
      "Confront those people who are causing you discomfort and discuss the problems"
    ]
  },
  {
    title: "Habits",
    desc: "A habit is a specific thought, behavior or way of doing something that was acquired by repetition or by reinforcement from self and/or others.",
    causes: [
      "Have established routines that are comfortable",
      "Routine creates a feeling of security",
      "Resist change for change's sake",
      "Have been praised repeatedly for a specific behavior"
    ],
    solutions: [
      "Evaluate habits and decide which contribute to your accomplishments and which deter you from success",
      "Try new ways of performing a certain task",
      "Ask others for recommendations on different approaches",
      "Consciously practice changing your routine"
    ]
  }
];

const Page17 = () => {
  return (
    <div className="space-y-4">
      <TimeWastersList wasters={wasters} />
    </div>
  );
};

export default Page17;
