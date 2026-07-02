import React from 'react';

const TimeWastersList = ({ wasters }) => {
  if (!wasters) return null;

  return (
    <div className="space-y-6 my-6">
      {wasters.map((w, idx) => (
        <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow transition duration-200">
          {/* Title bar */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 py-3.5 px-6 text-white flex justify-between items-center border-b border-slate-200">
            <h3 className="font-extrabold text-sm uppercase tracking-wider">{w.title}</h3>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700">
              Time Waster
            </span>
          </div>

          <div className="p-6 space-y-4">
            <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-slate-400 pl-4 italic">
              {w.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Causes */}
              {w.causes && w.causes.length > 0 && (
                <div className="bg-amber-50/30 border border-amber-100 p-4 rounded-xl space-y-3">
                  <h4 className="text-[10px] font-bold text-amber-700 uppercase tracking-widest flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Possible Causes
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-700">
                    {w.causes.map((c, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span className="leading-relaxed">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Solutions */}
              {w.solutions && w.solutions.length > 0 && (
                <div className="bg-emerald-50/30 border border-emerald-100 p-4 rounded-xl space-y-3">
                  <h4 className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Possible Solutions
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-700">
                    {w.solutions.map((s, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span className="leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeWastersList;
