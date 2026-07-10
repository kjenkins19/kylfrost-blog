export const title = "Behavioral Hierarchy";
import React from 'react';
import { BEHAVIOR_TRAITS } from './discConfig';

const Page21 = () => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed text-sm">
        Your observable behavior and related emotions contribute to your success on the job. When matched to the job, they play a large role in enhancing your performance. The list below ranks your behavioral traits from the strongest to the weakest.
      </p>

      <div className="bg-white p-6 border border-gray-100 rounded-xl shadow-sm print:shadow-none print:border-none print:p-0 my-6 space-y-6">
        <div className="space-y-6">
          {BEHAVIOR_TRAITS.map((t, idx) => (
            <div key={t.id} className="space-y-2">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-md font-bold text-gray-800 flex items-center gap-2">
                    <span className="inline-flex justify-center items-center w-6 h-6 rounded-full bg-blue-50 text-blue-600 text-xs font-extrabold">
                      {idx + 1}
                    </span>
                    {t.name}
                  </h3>
                  <p className="text-xs text-gray-500 max-w-2xl mt-0.5">{t.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-lg font-extrabold text-blue-600">{t.score.toFixed(1)}</span>
                  <span className="text-[10px] text-gray-400 block">Mean: {t.mean.toFixed(1)}*</span>
                </div>
              </div>

              {/* Horizontal progress bar */}
              <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                {/* Shaded 68% standard deviation range around population mean */}
                <div
                  className="absolute top-0 bottom-0 bg-yellow-100 opacity-50"
                  style={{
                    left: `${Math.max(0, (t.mean - 1.2) * 10)}%`,
                    right: `${Math.max(0, 100 - (t.mean + 1.2) * 10)}%`
                  }}
                />

                {/* Kyle's Score Bar */}
                <div
                  className={`absolute top-0 bottom-0 rounded-full ${t.score >= 7.0 ? 'bg-blue-500' : t.score >= 5.0 ? 'bg-cyan-500' : 'bg-gray-400'}`}
                  style={{ width: `${t.score * 10}%` }}
                />

                {/* Population Mean Mark */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-red-500 flex items-center justify-center z-10"
                  style={{ left: `${t.mean * 10}%` }}
                  title={`Population Mean: ${t.mean}`}
                >
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-4 flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] text-gray-400 gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 bg-yellow-100 border border-yellow-200" />
              <span>Shaded area: 68% of national population</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span>Red dot: National average</span>
            </div>
          </div>
          <div>* 68% of the population falls within the shaded area.</div>
        </div>
      </div>
    </div>
  );
};

export default Page21;
