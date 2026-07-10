export const title = "Descriptors";
import React from 'react';

const DESCRIPTORS_DATA = [
  {
    dimension: "Dominance",
    headerBg: "bg-[#DC2626]",
    headerText: "text-white",
    hexColor: "#DC2626",
    lightBg: "bg-red-100/80",
    textClass: "text-red-800",
    score: 26,
    highWords: [
      { text: "Driving", highlight: false },
      { text: "Ambitious", highlight: false },
      { text: "Pioneering", highlight: false },
      { text: "Strong-Willed", highlight: false },
      { text: "Determined", highlight: false },
      { text: "Competitive", highlight: false },
      { text: "Decisive", highlight: false },
      { text: "Venturesome", highlight: false }
    ],
    lowWords: [
      { text: "Calculating", highlight: true },
      { text: "Cooperative", highlight: true },
      { text: "Hesitant", highlight: true },
      { text: "Cautious", highlight: true },
      { text: "Agreeable", highlight: false },
      { text: "Modest", highlight: false },
      { text: "Peaceful", highlight: false },
      { text: "Unobtrusive", highlight: false }
    ]
  },
  {
    dimension: "Influencing",
    headerBg: "bg-[#FACC15]",
    headerText: "text-black",
    hexColor: "#FACC15",
    lightBg: "bg-yellow-200/90",
    textClass: "text-yellow-900",
    score: 24,
    highWords: [
      { text: "Inspiring", highlight: false },
      { text: "Magnetic", highlight: false },
      { text: "Enthusiastic", highlight: false },
      { text: "Persuasive", highlight: false },
      { text: "Convincing", highlight: false },
      { text: "Poised", highlight: false },
      { text: "Optimistic", highlight: false },
      { text: "Trusting", highlight: false }
    ],
    lowWords: [
      { text: "Reflective", highlight: true },
      { text: "Factual", highlight: true },
      { text: "Calculating", highlight: true },
      { text: "Skeptical", highlight: true },
      { text: "Logical", highlight: true },
      { text: "Suspicious", highlight: false },
      { text: "Matter-of-Fact", highlight: false },
      { text: "Incisive", highlight: false }
    ]
  },
  {
    dimension: "Steadiness",
    headerBg: "bg-[#16A34A]",
    headerText: "text-black",
    hexColor: "#16A34A",
    lightBg: "bg-green-200/80",
    textClass: "text-green-800",
    score: 89,
    highWords: [
      { text: "Relaxed", highlight: false },
      { text: "Passive", highlight: true },
      { text: "Patient", highlight: true },
      { text: "Possessive", highlight: true },
      { text: "Predictable", highlight: true },
      { text: "Consistent", highlight: true },
      { text: "Steady", highlight: true },
      { text: "Stable", highlight: true }
    ],
    lowWords: [
      { text: "Mobile", highlight: false },
      { text: "Active", highlight: false },
      { text: "Restless", highlight: false },
      { text: "Impatient", highlight: false },
      { text: "Pressure-Oriented", highlight: false },
      { text: "Eager", highlight: false },
      { text: "Flexible", highlight: false },
      { text: "Impulsive", highlight: false }
    ]
  },
  {
    dimension: "Compliance",
    headerBg: "bg-[#1D4ED8]",
    headerText: "text-white",
    hexColor: "#1D4ED8",
    lightBg: "bg-purple-200/90",
    textClass: "text-purple-900",
    score: 74,
    highWords: [
      { text: "Cautious", highlight: false },
      { text: "Careful", highlight: false },
      { text: "Exacting", highlight: false },
      { text: "Systematic", highlight: false },
      { text: "Accurate", highlight: true },
      { text: "Open-Minded", highlight: true },
      { text: "Balanced Judgment", highlight: true },
      { text: "Diplomatic", highlight: true }
    ],
    lowWords: [
      { text: "Firm", highlight: false },
      { text: "Independent", highlight: false },
      { text: "Self-Willed", highlight: false },
      { text: "Obstinate", highlight: false },
      { text: "Unsystematic", highlight: false },
      { text: "Uninhibited", highlight: false },
      { text: "Arbitrary", highlight: false },
      { text: "Unbending", highlight: false }
    ]
  }
];

const DescriptorArrow = ({ direction, color }) => {
  if (direction === 'up') {
    return (
      <div 
        className="absolute top-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] z-10"
        style={{ borderBottomColor: color }}
      />
    );
  } else {
    return (
      <div 
        className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] z-10"
        style={{ borderTopColor: color }}
      />
    );
  }
};

const Page12 = () => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed text-sm">
        Based on Kyle's responses, the report has marked those words that describe his personal behavior. They describe how he solves problems and meets challenges, influences people, responds to the pace of the environment and how he responds to rules and procedures set by others.
      </p>
      
      <div className="grid grid-cols-4 border border-gray-250 rounded-xl overflow-hidden bg-white my-6 shadow-sm divide-x divide-gray-200">
        {DESCRIPTORS_DATA.map((col) => {
          const isHigh = col.score >= 50;
          return (
            <div key={col.dimension} className="flex flex-col">
              {/* High Descriptors */}
              <div className="flex-1 py-3 flex flex-col justify-between">
                {col.highWords.map((word, idx) => (
                  <div 
                    key={idx} 
                    className={`w-full py-1 text-center text-xs sm:text-sm tracking-wide transition duration-150 ${
                      word.highlight 
                        ? `${col.lightBg} ${col.textClass} font-extrabold` 
                        : 'text-gray-400 font-medium'
                    }`}
                  >
                    {word.text}
                  </div>
                ))}
              </div>
              
              {/* Color accent split header with directional pointer arrow */}
              <div className={`${col.headerBg} ${col.headerText} relative py-3.5 text-center font-black uppercase text-[10px] sm:text-xs tracking-wider flex flex-col justify-center items-center select-none`}>
                <span>{col.dimension}</span>
                <span className="text-[9px] opacity-85 mt-0.5">Score: {col.score}</span>
                <DescriptorArrow direction={isHigh ? 'up' : 'down'} color={col.hexColor} />
              </div>

              {/* Low Descriptors */}
              <div className="flex-1 py-3 flex flex-col justify-between">
                {col.lowWords.map((word, idx) => (
                  <div 
                    key={idx} 
                    className={`w-full py-1 text-center text-xs sm:text-sm tracking-wide transition duration-150 ${
                      word.highlight 
                        ? `${col.lightBg} ${col.textClass} font-extrabold` 
                        : 'text-gray-400 font-medium'
                    }`}
                  >
                    {word.text}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page12;
