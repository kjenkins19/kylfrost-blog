import React from 'react';
import ResumeLayout from "../components/ResumeLayout.jsx";

/**
 * MeetupList Component
 *
 * Optimized for printing on paper for meetup events.
 * Uses a table-based layout to ensure headers and footers repeat on every printed page.
 *
 * TO UPDATE MEETUPS:
 * Add or modify objects in the `MEETUPS` array below.
 */

const MEETUPS = [{
  name: "Columbus Code & Coffee", qrPath: "/meetupList/columbus-code-and-coffee.png"
}, { name: "Columbus Elixir", qrPath: "/meetupList/columbus-cohpy.png" }, {
  name: "Cleveland React", qrPath: "/meetupList/columbus-cit.png"
}, { name: "Chicago JS", qrPath: "/meetupList/columbus-cocoa.png" }, {
  name: "Columbus JS", qrPath: "/meetupList/columbus-golang.png"
}, { name: "Cleveland Ruby", qrPath: "/meetupList/columbus-unity.png" }, {
  name: "Chicago Python", qrPath: "/meetupList/columbus-owasp.png"
}, { name: "Columbus DevOps", qrPath: "/meetupList/cleveland-power-platform.png" }, {
  name: "Cleveland Java", qrPath: "/meetupList/chicago-elastic.png"
},];

const MeetupCard = ({ name, qrPath, index }) => (<div className={index % 3 === 0 ? 'col-span-2' : ''}>
  <div
    className={`flex flex-col items-center justify-between border-2 border-gray-200 rounded-xl p-6 h-full break-inside-avoid print:border-gray-300 ${index % 2 === 0 ? 'col-span-2' : ''}`}>
    <div className="text-center">
      <h2 className="text-2xl font-bold text-black print:text-xl">{name}</h2>
    </div>

    <div className="mt-4 flex flex-col items-center">
      <div
        className="w-48 h-48 bg-gray-100 flex items-center justify-center border border-gray-200 rounded-lg overflow-hidden print:w-40 print:h-40">
        <img
          src={qrPath}
          alt={`QR Code for ${name}`}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='10' text-anchor='middle' alignment-baseline='middle' fill='%239ca3af'%3EImage Missing%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>
    </div>
  </div>
</div>);

const MeetupList = () => {
  return (<ResumeLayout title="Running Meetups" description="A list of meetups and their QR codes.">
    <div className="min-h-screen">
      <table className="w-full border-collapse">
        {/* Repeatable Header */}
        <thead className="print:table-header-group">
        <tr>
          <td className="w-full">
            <header className="text-center space-y-2 border-b-2 border-primary pb-6 print:pb-4 mb-4">
              <h1 className="text-4xl font-black text-black tracking-tight print:text-3xl">
                Community Meetups
              </h1>
              <p className="text-lg text-gray-600 print:text-sm italic">
                Connect with local developer communities and grow your network.
              </p>
            </header>
          </td>
        </tr>
        </thead>

        {/* Main Content */}
        <tbody>
        <tr>
          <td className="w-full pb-8">
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 print:grid-cols-2 print:gap-4">
              {MEETUPS.map((meetup, index) => (<MeetupCard
                key={index}
                name={meetup.name}
                qrPath={meetup.qrPath}
                index={index}
              />))}
            </main>
          </td>
        </tr>
        </tbody>

        {/* Repeatable Footer */}
        <tfoot className="print:table-footer-group">
        <tr>
          <td className="w-full pt-8 pb-4 print:pt-4 print:pb-0">
            <footer
              className="flex  bg-gray-50 p-8 rounded-2xl print:bg-white print:p-4 print:border-2 print:border-gray-100 mb-4 break-inside-avoid">
              <div
                className="flex w-full flex-row items-center justify-between print:flex print:flex-row print:justify-between">
                <div className="space-y-4 max-w-xl text-center md:text-left">
                  <h3 className="text-2xl font-bold text-black print:text-lg italic">
                    Need free space, pizza, and drinks for your meetup in Columbus, Cleveland, or Chicago?
                  </h3>
                  <p className="text-xl font-medium text-primary print:text-base">
                    Contact us!
                  </p>
                </div>

                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-32 h-32 bg-white p-2 border border-gray-200 rounded-lg shadow-sm print:w-24 print:h-24 print:shadow-none">
                    <img
                      src="/meetupList/contact-qr.png"
                      alt="Contact QR Code"
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='8' text-anchor='middle' alignment-baseline='middle' fill='%239ca3af'%3EContact QR%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <span className="mt-1 text-[8px] text-gray-400 uppercase font-mono">Contact Us</span>
                </div>
              </div>
            </footer>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>

    {/* Print Specific styles to ensure clean margins and paper usage */}
    <style dangerouslySetInnerHTML={{
      __html: `
        @media print {
          @page {
            margin: 0.5in;
            size: auto;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          thead { display: table-header-group; }
          tfoot { display: table-footer-group; }
          button { display: none; }
        }
      `
    }}/>
  </ResumeLayout>);
};

export default MeetupList;
