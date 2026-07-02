import React from 'react';
import TimeWastersList from './TimeWastersList';

const wasters = [
  {
    title: "Not Exercising Authority",
    desc: "Not exercising authority is the inability to make decisions that might adversely impact some people and compromises the success of task accomplishment. It is also the resistance to making the tough calls.",
    causes: [
      "Want to be seen as supportive",
      "Believe people will do what is right",
      "Fear offending others",
      "Fear creating conflict between team members"
    ],
    solutions: [
      "Have clearly defined and written performance objectives",
      "Have clearly written rationale for specific decisions",
      "Assign decision reporting to the deputy/assistant",
      "Appoint a strong deputy or assistant",
      "Have a \"Good Guy/Bad Guy\" image agreement with deputy/assistant"
    ]
  },
  {
    title: "Failure To Anticipate",
    desc: "Failure to anticipate is the lack of focusing on possible outcomes or requirements.",
    causes: [
      "Expect only the best to happen",
      "Expect everyone else to do their best"
    ],
    solutions: []
  }
];

const Page18 = () => {
  return (
    <div className="space-y-4">
      <TimeWastersList wasters={wasters} />
    </div>
  );
};

export default Page18;
