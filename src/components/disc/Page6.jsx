import React from 'react';

const Page6 = () => {
  const points = [
    "Good listener.",
    "Objective and realistic.",
    "Good at reconciling factions--is calming and adds stability.",
    "Patient and empathetic.",
    "Builds good relationships.",
    "Presents the facts without emotion.",
    "Consistent and steady."
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm my-6 space-y-4">
      <p className="text-gray-500 text-xs font-semibold leading-relaxed border-b border-gray-100 pb-3">
        This section identifies the specific talents and behavior Kyle brings to the job. By looking at these statements, one can identify his role in the organization. The organization can then develop a system to capitalize on his particular value and make him an integral part of the team.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {points.map((p, idx) => (
          <div key={idx} className="flex items-center gap-3 p-3.5 border border-blue-50/50 bg-blue-50/10 rounded-xl hover:bg-blue-50/20 transition">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs font-bold text-gray-700 leading-relaxed">{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page6;
