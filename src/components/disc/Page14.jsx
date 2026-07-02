import React from 'react';

const NATURAL_ADAPTED_DATA = [
  {
    title: "Pace - Consistency",
    color: "green",
    bgClass: "bg-green-600",
    borderClass: "border-green-200",
    natural: "Kyle is comfortable in an environment in which there are few projects going on concurrently. He is appreciative of the team concept and feels quite secure in an environment where the need to move from one activity to another quite quickly is kept to a minimum.",
    adapted: "Kyle sees his natural activity style to be just what the environment needs. What you see is what you get for activity level and consistency. Sometimes he would like the world to slow down."
  },
  {
    title: "Procedures - Constraints",
    color: "blue",
    bgClass: "bg-blue-600",
    borderClass: "border-blue-200",
    natural: "Kyle naturally is cautious and concerned for quality. He likes to be on a team that takes responsibility for the final product. He enjoys knowing the rules and can become upset when others fail to comply with the rules.",
    adapted: "Kyle shows little discomfort when comparing his basic (natural) style to his response to the environment (adapted) style. The difference is not significant and Kyle sees little or no need to change his response to the environment."
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

const Page14 = () => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed text-sm">
        Comparing basic (natural) style to response to the environment (adapted) style reveals the degree to which Kyle feels pressured to adapt.
      </p>
      <div className="mt-6">
        {NATURAL_ADAPTED_DATA.map((style, i) => (
          <ComparativeStyleCard key={i} styleData={style} />
        ))}
      </div>
    </div>
  );
};

export default Page14;
