import React from 'react';
import { discPages } from './discData.js';
import { SECTIONS } from '../components/disc/discConfig.js';

import Page1 from '../components/disc/Page1';
import Page2 from '../components/disc/Page2';
import Page3 from '../components/disc/Page3';
import Page4 from '../components/disc/Page4';
import Page5 from '../components/disc/Page5';
import Page6 from '../components/disc/Page6';
import Page7 from '../components/disc/Page7';
import Page8 from '../components/disc/Page8';
import Page9 from '../components/disc/Page9';
import Page10 from '../components/disc/Page10';
import Page11 from '../components/disc/Page11';
import Page12 from '../components/disc/Page12';
import Page13 from '../components/disc/Page13';
import Page14 from '../components/disc/Page14';
import Page15 from '../components/disc/Page15';
import Page16 from '../components/disc/Page16';
import Page17 from '../components/disc/Page17';
import Page18 from '../components/disc/Page18';
import Page19 from '../components/disc/Page19';
import Page20 from '../components/disc/Page20';
import Page21 from '../components/disc/Page21';
import Page22 from '../components/disc/Page22';
import Page23 from '../components/disc/Page23';
import Page24 from '../components/disc/Page24';
import Page25 from '../components/disc/Page25';
import Page26 from '../components/disc/Page26';
import Page27 from '../components/disc/Page27';
import Page28 from '../components/disc/Page28';
import Page29 from '../components/disc/Page29';
import Page30 from '../components/disc/Page30';
import Page31 from '../components/disc/Page31';
import Page32 from '../components/disc/Page32';
import Page33 from '../components/disc/Page33';
import Page34 from '../components/disc/Page34';
import Page35 from '../components/disc/Page35';
import Page36 from '../components/disc/Page36';
import Page37 from '../components/disc/Page37';
import Page38 from '../components/disc/Page38';
import Page39 from '../components/disc/Page39';
import Page40 from '../components/disc/Page40';
import Page41 from '../components/disc/Page41';
import Page42 from '../components/disc/Page42';
import Page43 from '../components/disc/Page43';
import Page44 from '../components/disc/Page44';
import Page45 from '../components/disc/Page45';
import Page46 from '../components/disc/Page46';
import Page47 from '../components/disc/Page47';
import Page48 from '../components/disc/Page48';
import Page49 from '../components/disc/Page49';
import Page50 from '../components/disc/Page50';
import Page51 from '../components/disc/Page51';
import Page52 from '../components/disc/Page52';
import Page53 from '../components/disc/Page53';
import Page54 from '../components/disc/Page54';
import Page55 from '../components/disc/Page55';
import Page56 from '../components/disc/Page56';
import Page57 from '../components/disc/Page57';
import Page58 from '../components/disc/Page58';

const PAGES_REGISTRY = {
  1: Page1,
  2: Page2,
  3: Page3,
  4: Page4,
  5: Page5,
  6: Page6,
  7: Page7,
  8: Page8,
  9: Page9,
  10: Page10,
  11: Page11,
  12: Page12,
  13: Page13,
  14: Page14,
  15: Page15,
  16: Page16,
  17: Page17,
  18: Page18,
  19: Page19,
  20: Page20,
  21: Page21,
  22: Page22,
  23: Page23,
  24: Page24,
  25: Page25,
  26: Page26,
  27: Page27,
  28: Page28,
  29: Page29,
  30: Page30,
  31: Page31,
  32: Page32,
  33: Page33,
  34: Page34,
  35: Page35,
  36: Page36,
  37: Page37,
  38: Page38,
  39: Page39,
  40: Page40,
  41: Page41,
  42: Page42,
  43: Page43,
  44: Page44,
  45: Page45,
  46: Page46,
  47: Page47,
  48: Page48,
  49: Page49,
  50: Page50,
  51: Page51,
  52: Page52,
  53: Page53,
  54: Page54,
  55: Page55,
  56: Page56,
  57: Page57,
  58: Page58,
};

const cleanTitle = (title, pageNum) => {
  if (pageNum === 14) return "Natural and Adapted Style (Continued)";
  return title;
};

const PageContent = ({ page }) => {
  const PageComponent = PAGES_REGISTRY[page.page];
  if (!PageComponent) {
    return <div className="text-red-500 font-bold">Page {page.page} not found in registry.</div>;
  }
  return <PageComponent />;
};

const DISCProfilePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kyle Jenkins - DISC & EQ Coaching Report</title>
        <meta name="description" content="Kyle Jenkins - Comprehensive TTI Success Insights TriMetrix EQ Coaching Report" />
        <meta name="author" content="Kyle Jenkins" />
        <link rel="stylesheet" href={`/styles.css?${new Date().getTime()}`} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="min-h-screen bg-gray-50 flex flex-col print:bg-white print:text-black">
          
          {/* Cover/Action Header */}
          <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50 shadow-sm print:hidden">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div>
                <h1 className="text-lg font-bold text-gray-900">Kyle Jenkins - DISC & EQ Profile</h1>
                <p className="text-xs text-gray-500">TTI Success Insights • TriMetrix® EQ Report (March 20, 2015)</p>
              </div>
              <div className="flex gap-4">
                <a 
                  href="/" 
                  className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                >
                  Back to Blog
                </a>
                <button 
                  onClick={() => window.print()}
                  className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition"
                >
                  Print / Save PDF
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
            
            {/* Sidebar Table of Contents - Hidden on print and mobile */}
            <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto bg-white p-6 border border-gray-200 rounded-xl shadow-sm print:hidden">
              <h2 className="text-sm font-extrabold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                Report Sections
              </h2>
              <div className="space-y-6">
                {SECTIONS.map((section) => {
                  return (
                    <div key={section.title} className="space-y-2">
                      <button 
                        data-section-title={section.title}
                        data-scroll-to={section.start}
                        className="text-left text-sm font-bold block w-full transition text-gray-700 hover:text-blue-600"
                      >
                        {section.title}
                      </button>
                      
                      {/* Compact page range selector */}
                      <div className="grid grid-cols-6 gap-1 pt-1">
                        {Array.from({ length: section.end - section.start + 1 }, (_, i) => {
                          const pageNum = section.start + i;
                          return (
                            <button
                              key={pageNum}
                              data-scroll-to={pageNum}
                              className="w-7 h-7 flex items-center justify-center text-[10px] font-bold rounded bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition"
                              title={`Page ${pageNum}`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </aside>

            {/* Document Content Pages Flow */}
            <div className="flex-1 space-y-12 max-w-4xl mx-auto w-full">
              {discPages.map((page) => (
                <article 
                  key={page.page} 
                  id={`page-${page.page}`}
                  className="scroll-mt-20 bg-white border border-gray-200 rounded-2xl p-8 sm:p-12 shadow-sm relative print:shadow-none print:border-none print:p-0 print:m-0 print:bg-transparent print:break-after-page min-h-[900px] flex flex-col justify-between"
                >
                  {/* Decorative Header (Screen only) */}
                  <div className="flex justify-between items-center text-[10px] text-gray-400 font-extrabold uppercase tracking-widest border-b border-gray-100 pb-4 mb-6 print:hidden">
                    <span>TTI Success Insights • TriMetrix® EQ</span>
                    <span className="bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full">Page {page.page} of 58</span>
                  </div>

                  {/* Main Page Title */}
                  {page.page > 1 && page.title && (
                    <h2 className="text-2xl font-extrabold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">
                      {cleanTitle(page.title, page.page)}
                    </h2>
                  )}

                  {/* Actual Page Body Content */}
                  <div className="flex-1">
                    <PageContent page={page} />
                  </div>

                  {/* Decorative Footer */}
                  <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-400 font-medium border-t border-gray-100 pt-6 mt-12 print:border-t-2 print:border-gray-200">
                    <span className="text-center sm:text-left">
                      Clear Cut Strategies, LLC & The Abelson Group • Succeed@TheAbelsonGroup.com
                    </span>
                    <span className="mt-2 sm:mt-0 font-bold bg-gray-50 print:bg-transparent px-3 py-1 rounded print:p-0">
                      Page {page.page}
                    </span>
                  </div>
                </article>
              ))}
            </div>
            
          </main>
        </div>

        {/* Custom vanilla JS to handle smooth scrolling and active-section highlighting without React hydration */}
        <script dangerouslySetInnerHTML={{ __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const sections = ${JSON.stringify(SECTIONS)};
            const headerOffset = 90;
            
            // Smooth scrolling to pages
            const scrollTriggers = document.querySelectorAll('[data-scroll-to]');
            scrollTriggers.forEach(trigger => {
              trigger.addEventListener('click', function(e) {
                e.preventDefault();
                const pageNum = this.getAttribute('data-scroll-to');
                const el = document.getElementById('page-' + pageNum);
                if (el) {
                  const elementPosition = el.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                  // Update URL hash without scroll jump
                  history.pushState(null, null, '#page-' + pageNum);
                }
              });
            });

            // Track scrolling to update active Table of Contents section
            function updateActiveSection() {
              const scrollPosition = window.scrollY + headerOffset + 10;
              for (const section of sections) {
                const firstPageEl = document.getElementById('page-' + section.start);
                const lastPageEl = document.getElementById('page-' + section.end);
                if (firstPageEl && lastPageEl) {
                  const top = firstPageEl.offsetTop;
                  const bottom = lastPageEl.offsetTop + lastPageEl.offsetHeight;
                  if (scrollPosition >= top && scrollPosition <= bottom) {
                    // Update active styles
                    document.querySelectorAll('[data-section-title]').forEach(btn => {
                      btn.classList.remove('text-blue-600');
                      btn.classList.add('text-gray-700');
                    });
                    const activeBtn = document.querySelector('[data-section-title="' + section.title + '"]');
                    if (activeBtn) {
                      activeBtn.classList.remove('text-gray-700');
                      activeBtn.classList.add('text-blue-600');
                    }
                    break;
                  }
                }
              }
            }

            window.addEventListener('scroll', updateActiveSection);
            updateActiveSection();
          });
        ` }} />
        <script src={`/client.js?${new Date().getTime()}`}></script>
      </body>
    </html>
  );
};

export default DISCProfilePage;
