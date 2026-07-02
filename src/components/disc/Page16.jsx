import React from 'react';
import TimeWastersList from './TimeWastersList';

const wasters = [
  {
    title: "Failure To Share Information",
    desc: "The failure to share information is the inability or unwillingness to discuss with others.",
    causes: [
      "Don't think others want to know the information",
      "Unclear of the way the information will be used/received",
      "Wait until asked before sharing information"
    ],
    solutions: [
      "Let others know that they need to ask for information",
      "Share with those whose opinions you trust"
    ]
  },
  {
    title: "Resisting Change",
    desc: "Resisting change is the process of consciously or subconsciously not participating in the change process. Measures of resistance may be active or passive, not doing things the new way, or making excuses for not having tasks accomplished.",
    causes: [
      "Need a high degree of security",
      "Like to maintain the status quo",
      "Routine/procedures have worked in the past",
      "One specific aspect of a proposed change violates sense of values",
      "A specific change is not seen as contributing to successful accomplishments"
    ],
    solutions: [
      "Acknowledge that change is a natural part of any job",
      "Develop the habit of writing down all of the pros and cons of a specific change",
      "Evaluate each objection to a change",
      "If there is one specific objection that is overriding the ability to change, share the specific concern with those involved and seek advice or input from others"
    ]
  }
];

const Page16 = () => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed text-sm">
        This section of your report is designed to identify time wasters that may impact your overall time use effectiveness. Possible causes and solutions will serve as a basis for creating an effective plan for maximizing your use of TIME and increasing your PERFORMANCE.
      </p>
      <TimeWastersList wasters={wasters} />
    </div>
  );
};

export default Page16;
