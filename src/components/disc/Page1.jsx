export const title = "TTI";
import React from 'react';

const Page1 = () => {
  return (
    <div className="flex flex-col justify-between min-h-[700px] py-12 px-6 bg-white border border-gray-100 rounded-lg shadow-sm print:shadow-none print:border-none print:p-0">
      <div className="space-y-8">
        <div className="h-4 bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 rounded-full" />
        <div className="space-y-4 text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            TriMetrix® EQ
          </h1>
          <p className="text-2xl font-semibold text-gray-600">
            Coaching Report • Management-Staff
          </p>
        </div>
      </div>

      <div className="my-16 space-y-4 text-center">
        <div className="inline-block px-8 py-4 bg-gray-50 border border-gray-100 rounded-xl">
          <p className="text-sm uppercase tracking-wider text-gray-400 font-bold">Prepared For</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">Kyle Jenkins</p>
          <p className="text-md text-gray-500 mt-2">Consultant 2 • Improving Enterprises</p>
          <p className="text-sm text-gray-400 mt-1">Date: 3-20-2015</p>
        </div>
      </div>

      <div className="space-y-6 text-center border-t border-gray-100 pt-8">
        <p className="text-sm text-gray-500 font-medium">
          A teamwork development partnership between
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm">
          <div className="font-bold text-gray-700">Clear Cut Strategies, LLC</div>
          <div className="h-4 w-px bg-gray-300 hidden md:block" />
          <div className="font-bold text-gray-700">The Abelson Group</div>
        </div>
        <div className="text-xs text-gray-400 space-y-1">
          <p>Tel. 937-597-4507 • Email: CarlaNeer@hotmail.com • Succeed@TheAbelsonGroup.com</p>
          <p>Copyright © 2006-2015. Target Training International, Ltd.</p>
        </div>
      </div>
    </div>
  );
};

export default Page1;
