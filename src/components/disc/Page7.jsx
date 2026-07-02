import React from 'react';

const Page7 = () => {
  const dos = [
    "Be prepared with the facts and figures.",
    "Use an unemotional approach.",
    "Show sincere interest in him as a person. Find areas of common involvement and be candid and open.",
    "Respect his quiet demeanor.",
    "Provide guarantees that his decision will minimize risks; give assurance that provides him with benefits.",
    "Look for hurt feelings or personal reasons if you disagree.",
    "Provide a friendly environment.",
    "Give him time to analyze the data before making a decision.",
    "Present your case softly, nonthreateningly with a sincere tone of voice.",
    "Provide details in writing.",
    "Use expert testimonials."
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm my-6 space-y-4">
      <p className="text-gray-500 text-xs font-semibold leading-relaxed border-b border-gray-100 pb-3">
        Most people are aware of and sensitive to the ways with which they prefer to be communicated. This page provides a list of things to <strong>DO</strong> when communicating with Kyle. Highlight the most important DOs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dos.map((d, idx) => (
          <div key={idx} className="flex items-start gap-3 p-3.5 border border-emerald-50 bg-emerald-50/10 rounded-xl hover:bg-emerald-50/20 transition">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs text-gray-700 leading-relaxed">{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page7;
