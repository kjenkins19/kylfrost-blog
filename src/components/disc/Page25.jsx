export const title = "The Success Insights Wheel";
import React from 'react';

const Page25 = () => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed text-sm">
        Notice on the wheel that your Natural style (circle) and your Adapted style (star) are plotted on the Wheel. If they are plotted in different boxes, then you are adapting your behavior. The further the two plotting points are from each other, the more you are adapting your behavior.
      </p>
      
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-2xl shadow-sm my-6">
        <h3 className="text-md font-bold text-gray-800 mb-2">Success Insights® Wheel</h3>
        <p className="text-xs text-gray-400 mb-6 text-center max-w-sm">
          Natural (Circle) and Adapted (Star) styles plotted on the wheel.
        </p>
        
        <div className="w-full max-w-md overflow-hidden rounded-xl border border-gray-150 p-2 bg-gray-50/50">
          <img 
            src="/disc.png" 
            alt="Success Insights® Wheel" 
            className="w-full h-auto object-contain mx-auto block rounded-lg shadow-sm" 
          />
        </div>
      </div>
    </div>
  );
};

export default Page25;
