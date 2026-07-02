import React from 'react';

const Page35 = () => {
  const data = [
    { name: "Theoretical", score: 5.5, mean: 6.0, label: "Mainstream" },
    { name: "Utilitarian", score: 4.2, mean: 5.3, label: "Mainstream" },
    { name: "Aesthetic", score: 5.8, mean: 4.3, label: "Mainstream" },
    { name: "Social", score: 5.5, mean: 5.7, label: "Mainstream" },
    { name: "Individualistic", score: 5.8, mean: 4.7, label: "Mainstream" },
    { name: "Traditional", score: 3.2, mean: 4.7, label: "Mainstream" }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
        <p>
          For years you have heard statements like, "Different strokes for different folks," "to each his own,"
          and "people do things for their own reasons, not yours." When you are surrounded by people
          who share similar motivators, you will fit in with the group and be energized. However, when
          surrounded by people whose motivators are significantly different from yours, you may be
          perceived as out of the mainstream. These differences can induce stress or conflict.{" "}
          <strong className="text-gray-900 font-extrabold">When confronted with this type of situation you can:</strong>
        </p>
      </div>

      <ul className="space-y-2.5 text-gray-700 text-sm pl-4">
        <li className="flex items-start gap-2.5">
          <span className="text-blue-500 font-extrabold mt-0.5">•</span>
          <span>Change the situation.</span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="text-blue-500 font-extrabold mt-0.5">•</span>
          <span>Change your perception of the situation.</span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="text-blue-500 font-extrabold mt-0.5">•</span>
          <span>Leave the situation.</span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="text-blue-500 font-extrabold mt-0.5">•</span>
          <span>Cope with the situation.</span>
        </li>
      </ul>

      <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
        <p>
          <strong className="text-gray-900 font-extrabold">This section reveals areas where your motivators may be outside the mainstream and could lead to conflict.</strong>{" "}
          The further away you are from the mainstream on the high side, the more people will notice your passion about that motivator. The further away from the mainstream on the low side, the more people will view you as indifferent and possibly negative about that motivator. The shaded area for each motivator represents 68 percent of the population or scores that fall within one standard deviation above or below the national mean.
        </p>
      </div>

      {/* Norms & Comparisons Table */}
      <div className="border border-blue-200 rounded-2xl overflow-hidden shadow-sm max-w-3xl mx-auto my-8 bg-white">
        <div className="bg-blue-50/60 px-6 py-4 border-b border-blue-200">
          <h4 className="text-base font-extrabold text-blue-900 tracking-wide">
            Norms &amp; Comparisons Table - Norm 2015
          </h4>
        </div>
        
        <div className="p-6 space-y-6">
          {data.map((row) => {
            const leftPct = (row.mean - 1.2) * 10;
            const widthPct = 2.4 * 10;
            const meanPct = row.mean * 10;
            const scorePct = row.score * 10;

            return (
              <div key={row.name} className="flex items-center gap-4 py-1">
                {/* Motivator Name */}
                <div className="w-32 text-sm font-semibold text-gray-800 flex-shrink-0">
                  {row.name}
                </div>
                
                {/* Graph Visualization */}
                <div className="flex-1 relative h-8 flex items-center bg-gray-50/50 border border-gray-100 rounded-lg">
                  <div className="absolute left-4 right-4 top-0 bottom-0 flex items-center">
                    {/* Background Track Line */}
                    <div className="absolute left-0 right-0 h-[2px] bg-gray-200" />
                    
                    {/* Shading Area */}
                    <div 
                      className="absolute h-3 bg-gradient-to-r from-blue-900 to-blue-700 rounded-sm shadow-sm"
                      style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
                    />
                    
                    {/* Mean line */}
                    <div 
                      className="absolute w-1 h-6 bg-slate-900 z-10"
                      style={{ left: `${meanPct}%`, transform: 'translateX(-50%)' }}
                    />
                    
                    {/* Score Star */}
                    <div 
                      className="absolute text-red-500 font-extrabold text-base select-none z-20"
                      style={{ left: `${scorePct}%`, transform: 'translate(-50%, -1px)' }}
                    >
                      ★
                    </div>
                  </div>
                </div>
                
                {/* Label Classification */}
                <div className="w-24 text-right text-xs font-bold text-gray-700 flex-shrink-0 uppercase tracking-wide">
                  {row.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend block */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-gray-500 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-4 h-2.5 bg-blue-900 rounded-sm" />
            <span>68 percent of the population</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-0.5 h-3 bg-slate-900" />
            <span>national mean</span>
          </div>
          <div className="flex items-center gap-2 text-red-500">
            <span>★</span>
            <span className="text-gray-500">your score</span>
          </div>
        </div>
      </div>

      {/* Explanatory definitions */}
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-600">
        <div>
          <strong className="text-gray-800 font-extrabold">Mainstream</strong> - one standard deviation of the national mean
        </div>
        <div>
          <strong className="text-gray-800 font-extrabold">Passionate</strong> - two standard deviations above the national mean
        </div>
        <div>
          <strong className="text-gray-800 font-extrabold">Indifferent</strong> - two standard deviations below the national mean
        </div>
        <div>
          <strong className="text-gray-800 font-extrabold">Extreme</strong> - three standard deviations from the national mean
        </div>
      </div>
    </div>
  );
};

export default Page35;
