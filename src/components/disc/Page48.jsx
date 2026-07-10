export const title = "Emotional Quotient Assessment Results";
import React from 'react';
import { EQ_COMPONENTS } from './discConfig';

const Page48 = () => {
  return (<div className="space-y-4">
      <p className="text-gray-700 leading-relaxed text-sm">
        The Emotional Quotient (EQ) is a measure of your ability to sense,
        understand, and effectively apply the power and acumen of your emotions and
        the emotions of others in order to facilitate high levels of collaboration and
        productivity. Your overall score on the Emotional Quotient Assessment
        indicates your level of overall emotional intelligence. The higher the number,
        the more emotionally intelligent you are. If your goal is to raise your EQ, the
        components on which you have scored the lowest should be the focus of your
        development. </p>

      <div
        className="bg-white p-6 border border-gray-100 rounded-xl shadow-sm print:shadow-none print:border-none print:p-0 my-6 space-y-6">
        <div className="space-y-6">
          {EQ_COMPONENTS.map((eq, idx) => (<div key={eq.name} className="space-y-2">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-md font-bold text-gray-800 flex items-center gap-2">
                    <span
                      className="inline-flex justify-center items-center w-6 h-6 rounded-full bg-teal-50 text-teal-600 text-xs font-extrabold">
                      {idx + 1}
                    </span>
                    {eq.name}
                  </h3>
                  <p className="text-xs text-gray-500 max-w-2xl mt-0.5">{eq.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-lg font-extrabold text-teal-600">{eq.score.toFixed(1)}</span>
                  <span className="text-[10px] text-gray-400 block">Mean: {eq.mean.toFixed(1)}*</span>
                </div>
              </div>

              {/* EQ Progress Bar */}
              <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                {/* Shaded average standard range */}
                <div
                  className="absolute top-0 bottom-0 bg-yellow-100 opacity-50"
                  style={{
                    left: `${Math.max(0, (eq.mean - 1.2) * 10)}%`,
                    right: `${Math.max(0, 100 - (eq.mean + 1.2) * 10)}%`
                  }}
                />

                {/* Score Bar */}
                <div
                  className={`absolute top-0 bottom-0 rounded-full ${eq.score >= 6.0 ? 'bg-teal-500' : eq.score >= 4.0 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                  style={{ width: `${eq.score * 10}%` }}
                />

                {/* National Mean Mark */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-red-500 flex items-center justify-center z-10"
                  style={{ left: `${eq.mean * 10}%` }}
                >
                  <div className="w-2 h-2 rounded-full bg-red-600"/>
                </div>
              </div>
            </div>))}
        </div>

        <div className="border-t border-gray-100 pt-4 flex justify-between text-[10px] text-gray-400">
          <div>National benchmark comparisons indicate areas of strengths and development focuses.</div>
          <div>* 68% of the population falls within the shaded area.</div>
        </div>
      </div>
    </div>);
};

export default Page48;
