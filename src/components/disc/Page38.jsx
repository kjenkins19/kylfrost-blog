import React from 'react';

const Page38 = () => {
  const chartData = [
    { label: "THE.", name: "Theoretical", score: 45, mean: 48, rank: "3rd", color: "bg-rose-900", border: "border-rose-955" },
    { label: "UTI.", name: "Utilitarian", score: 37, mean: 44, rank: "5th", color: "bg-amber-500", border: "border-amber-600" },
    { label: "AES.", name: "Aesthetic", score: 47, mean: 38, rank: "2nd", color: "bg-indigo-700", border: "border-indigo-800" },
    { label: "SOC.", name: "Social", score: 45, mean: 37, rank: "4th", color: "bg-teal-700", border: "border-teal-800" },
    { label: "IND.", name: "Individualistic", score: 47, mean: 45, rank: "1st", color: "bg-slate-900", border: "border-slate-950" },
    { label: "TRA.", name: "Traditional", score: 31, mean: 40, rank: "6th", color: "bg-stone-500", border: "border-stone-600" }
  ];

  const yMin = 10;
  const yMax = 75;
  const yTicks = [70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15];

  return (
    <div className="bg-white p-6 border border-gray-100 rounded-2xl shadow-sm print:shadow-none print:border-none print:p-0 my-6">
      <div className="max-w-2xl mx-auto border border-gray-200 rounded-xl p-6 bg-slate-50/20">
        
        {/* Chart Area */}
        <div className="relative h-72 flex gap-4">
          
          {/* Y Axis Labels (Left) */}
          <div className="w-8 flex flex-col justify-between text-right text-[10px] text-gray-400 font-bold select-none pr-1">
            {yTicks.map(t => {
              const topPct = 100 - ((t - yMin) / (yMax - yMin) * 100);
              return (
                <div key={t} className="absolute left-0 right-0" style={{ top: `${topPct}%`, transform: 'translateY(-50%)' }}>
                  {t}
                </div>
              );
            })}
          </div>

          {/* Grid Area */}
          <div className="flex-1 relative border-l border-b border-gray-300">
            {/* Horizontal Gridlines */}
            {yTicks.map(t => {
              const bottomPct = (t - yMin) / (yMax - yMin) * 100;
              return (
                <div 
                  key={t} 
                  className="absolute left-0 right-0 border-t border-gray-200" 
                  style={{ bottom: `${bottomPct}%` }}
                />
              );
            })}

            {/* Bars */}
            <div className="absolute inset-0 flex justify-around items-end px-2 pt-4">
              {chartData.map(bar => {
                const barHeightPct = ((bar.score - yMin) / (yMax - yMin)) * 100;
                const meanLinePct = ((bar.mean - yMin) / (yMax - yMin)) * 100;

                return (
                  <div key={bar.label} className="relative w-12 flex flex-col justify-end h-full group">
                    {/* National Mean horizontal line overlay */}
                    <div 
                      className="absolute left-[-4px] right-[-4px] h-[3px] bg-blue-600/90 z-20 rounded-full shadow-sm"
                      style={{ bottom: `${meanLinePct}%` }}
                      title={`National Mean: ${bar.mean}`}
                    />
                    
                    {/* The bar itself */}
                    <div 
                      className={`w-full ${bar.color} rounded-t-sm shadow-md transition-all duration-500`}
                      style={{ height: `${barHeightPct}%` }}
                      title={`${bar.name} Score: ${bar.score}`}
                    >
                      {/* Highlight overlay */}
                      <div className="w-full h-full bg-white/5 hover:bg-transparent" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Y Axis Labels (Right) */}
          <div className="w-8 flex flex-col justify-between text-left text-[10px] text-gray-400 font-bold select-none pl-1">
            {yTicks.map(t => {
              const topPct = 100 - ((t - yMin) / (yMax - yMin) * 100);
              return (
                <div key={t} className="absolute left-0 right-0" style={{ top: `${topPct}%`, transform: 'translateY(-50%)' }}>
                  {t}
                </div>
              );
            })}
          </div>
        </div>

        {/* X Axis Labels under the chart */}
        <div className="max-w-2xl mx-auto flex mt-3 pl-8 pr-8 select-none">
          <div className="flex-grow flex justify-around">
            {chartData.map(bar => (
              <div key={bar.label} className="w-12 text-center text-xs font-bold text-gray-500 uppercase tracking-wide">
                {bar.label}
              </div>
            ))}
          </div>
        </div>

        {/* Score & Rank Table row layout */}
        <div className="max-w-2xl mx-auto flex flex-col mt-4 pl-8 pr-8 text-sm select-none border-t border-gray-100 pt-3">
          {/* Scores */}
          <div className="flex items-center">
            <div className="w-16 font-extrabold text-gray-900 uppercase text-xs tracking-wider">Score</div>
            <div className="flex-grow flex justify-around">
              {chartData.map(bar => (
                <div key={bar.label} className="w-12 text-center font-extrabold text-gray-950 text-base">
                  {bar.score}
                </div>
              ))}
            </div>
          </div>
          {/* Ranks */}
          <div className="flex items-center mt-2">
            <div className="w-16 font-extrabold text-blue-900 uppercase text-xs tracking-wider">Rank</div>
            <div className="flex-grow flex justify-around">
              {chartData.map(bar => (
                <div key={bar.label} className="w-12 text-center font-bold text-blue-600/90 text-sm">
                  {bar.rank}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-center items-center gap-2 text-xs text-gray-500 select-none">
          <span className="w-6 h-[3px] bg-blue-600 rounded-full" />
          <span>national mean</span>
        </div>
      </div>
    </div>
  );
};

export default Page38;
