import React from 'react';

const Page8 = () => {
  const donts = ["Offer assurance and guarantees you can't fulfill.", "Make statements you cannot prove.", "Touch his body when talking to him.", "Be redundant.", "Stick coldly or harshly to business; on the other hand, don't lose sight of goals by being too personal.", "Be disorganized.", "Leave things open to interpretation.", "Manipulate or push him into agreeing because he probably won't fight back.", "Debate about facts and figures.", "Patronize or demean him by using subtlety or incentive.", "Pretend to be an expert, if you are not."];

  return (<div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm my-6 space-y-4">
    <p className="text-gray-500 text-xs font-semibold leading-relaxed border-b border-gray-100 pb-3">
      This section of the
      report is a list of things NOT to do while communicating with Kyle.
      Review each statement with Kyle and identify those methods of communication that
      result in frustration or reduced performance. By sharing this information, both parties
      can negotiate a communication system that is mutually agreeable.</p>
    <h3 className="text-xl font-bold text-black mb-4">Ways NOT to Communicate</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {donts.map((d, idx) => (<div key={idx}
                                   className="flex items-start gap-3 p-3.5 border border-rose-50 bg-rose-50/10 rounded-xl hover:bg-rose-50/20 transition">
        <div
          className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mt-0.5">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </div>
        <span className="text-xs text-gray-750 leading-relaxed text-gray-700">{d}</span>
      </div>))}
    </div>
  </div>);
};

export default Page8;
