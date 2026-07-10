export const title = "Natural and Adapted Style";
import React from 'react';

const NATURAL_ADAPTED_DATA = [
  {
    title: "Problems - Challenges",
    color: "red",
    bgClass: "bg-red-600",
    borderClass: "border-red-200",
    natural: "Kyle is cautious in his approach to problem solving and does not attempt to demand that his view, or opinion, be accepted at face value. Kyle likes to solve problems within the framework of a team environment. He will look for a compromise as opposed to a win-lose situation.",
    adapted: "Kyle sees no need to change his approach to solving problems or dealing with challenges in his present environment."
  },
  {
    title: "People - Contacts",
    color: "yellow",
    bgClass: "bg-yellow-500",
    borderClass: "border-yellow-200",
    natural: "Kyle is undemonstrative in his approach to influencing others and likes to let facts and figures stand for themselves. He feels persuasion needs to be objective and straightforward. His trust level is based on each interaction--the past is the past. He presents facts without embellishments.",
    adapted: "Kyle sees no need to change his approach to influencing others to his way of thinking. He sees his natural style to be what the environment is calling for."
  }
];

const ComparativeStyleCard = ({ styleData }) => {
  const verticalTextStyles = {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="flex border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow transition duration-200 mb-6 border-gray-200">
      {/* Rotated category sidebar */}
      <div className={`w-12 sm:w-14 flex-shrink-0 flex items-center justify-center ${styleData.bgClass} text-white font-black py-6`}>
        <span 
          style={verticalTextStyles}
          className="whitespace-nowrap tracking-wider text-xs sm:text-sm uppercase"
        >
          {styleData.title}
        </span>
      </div>
      
      {/* Side-by-side styles */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-150">
        <div className="p-6 hover:bg-gray-50/30 transition">
          <div className="flex items-center gap-2 mb-3">
            <span className={`w-2 h-2 rounded-full ${styleData.bgClass}`} />
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Natural Style</h4>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">{styleData.natural}</p>
        </div>
        
        <div className="p-6 bg-gray-50/10 hover:bg-gray-50/40 transition">
          <div className="flex items-center gap-2 mb-3">
            <span className={`w-2 h-2 rounded-full ${styleData.bgClass} opacity-60`} />
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Adapted Style</h4>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">{styleData.adapted}</p>
        </div>
      </div>
    </div>
  );
};

const Page13 = () => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed text-sm">
        Kyle's natural style of dealing with problems, people, pace of events and procedures may not always fit what the environment needs. This section will provide valuable information related to stress and the pressure to adapt to the environment.
      </p>
      <div className="mt-6">
        {NATURAL_ADAPTED_DATA.map((style, i) => (
          <ComparativeStyleCard key={i} styleData={style} />
        ))}
      </div>
    </div>
  );
};

export default Page13;
