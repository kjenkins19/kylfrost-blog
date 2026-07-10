export const title = "Style Insights® Graphs";
import React from 'react';
import { DISC_COLORS } from './discConfig';

const Page23 = () => {
  const graphs = [
    {
      title: "Adapted Style (Graph I)",
      data: [
        { label: "D", value: 24, color: "D" },
        { label: "I", value: 24, color: "I" },
        { label: "S", value: 84, color: "S" },
        { label: "C", value: 77, color: "C" },
      ]
    },
    {
      title: "Natural Style (Graph II)",
      data: [
        { label: "D", value: 26, color: "D" },
        { label: "I", value: 24, color: "I" },
        { label: "S", value: 89, color: "S" },
        { label: "C", value: 74, color: "C" },
      ]
    }
  ];

  return (
    <div className="space-y-8 bg-white p-6 border border-gray-100 rounded-xl shadow-sm print:shadow-none print:border-none print:p-0 my-6">
      <div className="text-center">
        <p className="text-sm text-gray-500 mt-1">Comparing Adapted vs. Natural behavioral styles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
        {graphs.map((g, idx) => (
          <div key={idx} className="border border-gray-100 p-6 rounded-xl bg-gray-50 flex flex-col items-center">
            <h3 className="text-lg font-bold text-gray-700 mb-6">{g.title}</h3>
            
            <div className="relative h-64 w-full max-w-xs flex justify-between items-end border-b-2 border-gray-400 pb-1 px-4">
              {/* Midline at 50 */}
              <div className="absolute left-0 right-0 border-t border-dashed border-gray-300 pointer-events-none" style={{ bottom: "50%" }}>
                <span className="absolute -top-3 left-1 text-[10px] text-gray-400 font-bold">50% Midline</span>
              </div>

              {g.data.map((bar) => (
                <div key={bar.label} className="flex flex-col items-center w-12 group">
                  {/* Tooltip score */}
                  <span className="text-xs font-bold text-gray-600 mb-1">{bar.value}%</span>
                  
                  {/* Visual Bar */}
                  <div className="w-full relative rounded-t-sm overflow-hidden transition-all duration-500" style={{ height: `${bar.value * 2}px` }}>
                    <div className={`absolute inset-0 ${DISC_COLORS[bar.color].bg} hover:opacity-90`} />
                  </div>

                  {/* Label */}
                  <span className={`text-md font-extrabold mt-2 ${DISC_COLORS[bar.color].text}`}>{bar.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex gap-4 text-xs font-bold text-gray-500">
              {g.data.map(bar => (
                <span key={bar.label}>{bar.label}: {bar.value}%</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page23;
