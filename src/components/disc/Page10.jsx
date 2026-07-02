import React from 'react';

const PERCEPTIONS_DATA = [
  {
    title: "Self-Perception",
    subtitle: "Kyle usually sees himself as being:",
    accentClass: "bg-emerald-500",
    lightBg: "bg-emerald-50/10",
    items: [
      { left: "Considerate", right: "Thoughtful" },
      { left: "Good-Natured", right: "Dependable" },
      { left: "Team player", right: "Good listener" }
    ]
  },
  {
    title: "Others' Perception - Moderate",
    subtitle: "Under moderate pressure, stress or fatigue, others may see him as:",
    accentClass: "bg-amber-500",
    lightBg: "bg-amber-50/10",
    items: [
      { left: "Nondemonstrative", right: "Hesitant" },
      { left: "Unconcerned", right: "Inflexible" }
    ]
  },
  {
    title: "Others' Perception - Extreme",
    subtitle: "Under extreme pressure, stress or fatigue, others may see him as:",
    accentClass: "bg-rose-500",
    lightBg: "bg-rose-50/10",
    items: [
      { left: "Possessive", right: "Stubborn" },
      { left: "Detached", right: "Insensitive" }
    ]
  }
];

const Page10 = () => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed text-sm">
        A person's behavior and feelings may be quickly telegraphed to others. This section provides additional information on Kyle's self-perception and how, under certain conditions, others may perceive his behavior. Understanding this section will empower Kyle to project the image that will allow him to control the situation.
      </p>
      <div className="space-y-4">
        {PERCEPTIONS_DATA.map((card) => (
          <div 
            key={card.title}
            className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow transition duration-200 flex flex-col"
          >
            <div className={`${card.accentClass} py-3.5 px-5 text-white font-extrabold text-xs uppercase tracking-wider`}>
              {card.title}
            </div>
            
            <div className={`p-5 flex-1 flex flex-col justify-between ${card.lightBg}`}>
              <p className="text-gray-500 text-xs font-semibold leading-relaxed mb-4">
                {card.subtitle}
              </p>

              <div className="space-y-3">
                {card.items.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-gray-50/50 border border-gray-100 px-3 py-2 rounded-lg">
                      <span className={`w-1.5 h-1.5 rounded-full ${card.accentClass}`} />
                      <span>{row.left}</span>
                    </div>
                    {row.right ? (
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-gray-50/50 border border-gray-100 px-3 py-2 rounded-lg">
                        <span className={`w-1.5 h-1.5 rounded-full ${card.accentClass}`} />
                        <span>{row.right}</span>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page10;
