import React from 'react';
import { MOTIVATORS } from './discConfig';

const Page37 = () => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed text-sm">
        Your motivation to succeed in anything you do is determined by your underlying motivators. You will feel energized and successful at work when your job supports your personal motivators. They are listed below from the highest to the lowest.
      </p>

      <div className="bg-white p-6 border border-gray-100 rounded-xl shadow-sm print:shadow-none print:border-none print:p-0 my-6 space-y-6">
        <div className="border-b border-gray-100 pb-4">
          <h2 className="text-2xl font-bold text-gray-800">Motivators Hierarchy</h2>
          <p className="text-sm text-gray-500 mt-1">
            Your personal motivators ranked from highest to lowest. Supports professional fulfillment when matched to assignments.
          </p>
        </div>

        <div className="space-y-6">
          {MOTIVATORS.map((m, idx) => (
            <div key={m.name} className="space-y-2">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-md font-bold text-gray-800 flex items-center gap-2">
                    <span className="inline-flex justify-center items-center w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 text-xs font-extrabold">
                      {idx + 1}
                    </span>
                    {m.name}
                  </h3>
                  <p className="text-xs text-gray-500 max-w-2xl mt-0.5">{m.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-lg font-extrabold text-indigo-600">{m.score.toFixed(1)}</span>
                  <span className="text-[10px] text-gray-400 block">Mean: {m.mean.toFixed(1)}*</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                {/* Shaded population standard range */}
                <div 
                  className="absolute top-0 bottom-0 bg-yellow-100 opacity-50"
                  style={{ 
                    left: `${Math.max(0, (m.mean - 1.2) * 10)}%`, 
                    right: `${Math.max(0, 100 - (m.mean + 1.2) * 10)}%` 
                  }}
                />
                
                {/* Score Bar */}
                <div 
                  className={`absolute top-0 bottom-0 rounded-full ${m.score >= 5.5 ? 'bg-indigo-500' : m.score >= 4.0 ? 'bg-purple-500' : 'bg-gray-400'}`} 
                  style={{ width: `${m.score * 10}%` }}
                />

                {/* National Mean Mark */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-red-500 flex items-center justify-center z-10"
                  style={{ left: `${m.mean * 10}%` }}
                >
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-4 flex justify-between text-[10px] text-gray-400">
          <div>Shaded area represents 68% of the national average standard deviation.</div>
          <div>* 68% of the population falls within the shaded area.</div>
        </div>
      </div>
    </div>
  );
};

export default Page37;
