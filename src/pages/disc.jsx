import React, { useEffect, useState } from 'react';
import { discPages } from './discData.js';
import ResumeLayout from "../components/ResumeLayout.jsx";

// Sections definitions for Table of Contents
const SECTIONS = [
  { title: "Cover & Introduction", start: 1, end: 2 },
  { title: "Behaviors (DISC) Section", start: 3, end: 25 },
  { title: "Motivators Section", start: 26, end: 39 },
  { title: "Integrating Behaviors & Motivators", start: 40, end: 45 },
  { title: "Emotional Quotient Section", start: 46, end: 55 },
  { title: "Blending Behaviors, Motivators & EQ", start: 56, end: 58 },
];

// Data for Behavioral Hierarchy
const BEHAVIOR_TRAITS = [
  { id: 1, name: "Following Policy", desc: "Complying with the policy or if no policy, complying with the way it has been done.", score: 10.0, mean: 6.9 },
  { id: 2, name: "Follow Up and Follow Through", desc: "A need to be thorough.", score: 9.7, mean: 6.3 },
  { id: 3, name: "Consistency", desc: "The ability to do the job the same way.", score: 9.5, mean: 6.5 },
  { id: 4, name: "Organized Workplace", desc: "Systems and procedures followed for success.", score: 9.0, mean: 5.2 },
  { id: 5, name: "Analysis of Data", desc: "Information is maintained accurately for repeated examination as required.", score: 9.0, mean: 5.5 },
  { id: 6, name: "Customer Relations", desc: "A desire to convey your sincere interest in them.", score: 6.8, mean: 6.6 },
  { id: 7, name: "People Oriented", desc: "Spending a high percentage of time successfully working with a wide range of people from diverse backgrounds to achieve \"win-win\" outcomes.", score: 6.0, mean: 6.8 },
  { id: 8, name: "Frequent Interaction with Others", desc: "Dealing with multiple interruptions on a continual basis, always maintaining a friendly interface with others.", score: 3.0, mean: 6.2 },
  { id: 9, name: "Competitiveness", desc: "Tenacity, boldness, assertiveness and a \"will to win\" in all situations.", score: 3.0, mean: 4.7 },
  { id: 10, name: "Versatility", desc: "Bringing together a multitude of talents and a willingness to adapt the talents to changing assignments as required.", score: 2.5, mean: 5.3 },
  { id: 11, name: "Frequent Change", desc: "Moving easily from task to task or being asked to leave several tasks unfinished and easily move on to the new task with little or no notice.", score: 2.2, mean: 5.2 },
  { id: 12, name: "Urgency", desc: "Decisiveness, quick response and fast action.", score: 2.0, mean: 4.3 },
];

// Data for Motivators Hierarchy
const MOTIVATORS = [
  { name: "Individualistic/Political", desc: "Rewards those who value personal recognition, freedom, and control over their own destiny and others.", score: 5.8, mean: 4.7 },
  { name: "Aesthetic", desc: "Rewards those who value balance in their lives, creative self-expression, beauty and nature.", score: 5.8, mean: 4.3 },
  { name: "Theoretical", desc: "Rewards those who value knowledge for knowledge's sake, continuing education and intellectual growth.", score: 5.5, mean: 6.0 },
  { name: "Social", desc: "Rewards those who value opportunities to be of service to others and contribute to the progress and well being of society.", score: 5.5, mean: 5.7 },
  { name: "Utilitarian/Economic", desc: "Rewards those who value practical accomplishments, results and rewards for their investments of time, resources and energy.", score: 4.2, mean: 5.3 },
  { name: "Traditional/Regulatory", desc: "Rewards those who value traditions inherent in social structure, rules, regulations and principles.", score: 3.2, mean: 4.7 },
];

// Data for EQ components
const EQ_COMPONENTS = [
  { name: "Self-Awareness", desc: "The ability to recognize and understand your moods, emotions and drives, as well as their effect on others.", score: 3.0, mean: 7.4 },
  { name: "Self-Regulation", desc: "The ability to control or redirect disruptive impulses and moods and the propensity to suspend judgment and think before acting.", score: 5.5, mean: 7.2 },
  { name: "Motivation", desc: "A passion to work for reasons that go beyond money or status, and a propensity to pursue goals with energy and persistence.", score: 6.2, mean: 7.9 },
  { name: "Empathy", desc: "The ability to understand the emotional makeup of other people.", score: 4.7, mean: 7.5 },
  { name: "Social Skills", desc: "A proficiency in managing relationships and building networks.", score: 3.6, mean: 7.6 },
];

const EQ_SCORING = [
  { name: "Intrapersonal", desc: "The ability to understand yourself and form an accurate concept of yourself to operate effectively in life.", score: 5.0, mean: 7.5 },
  { name: "Interpersonal", desc: "The ability to understand other people, what motivates others, how they work and how to work cooperatively with them.", score: 4.2, mean: 7.6 },
  { name: "Total Emotional Quotient", desc: "Your total level of emotional intelligence, formed by combining your intrapersonal and interpersonal scores.", score: 4.7, mean: 7.5 },
];

// Graphic styles
const DISC_COLORS = {
  D: { bg: "bg-red-500", text: "text-red-600", border: "border-red-500", fill: "#EF4444" },
  I: { bg: "bg-yellow-500", text: "text-yellow-600", border: "border-yellow-500", fill: "#EAB308" },
  S: { bg: "bg-green-500", text: "text-green-600", border: "border-green-500", fill: "#22C55E" },
  C: { bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-500", fill: "#3B82F6" },
};

// Cover Page Renderer (Page 1)
const CoverPage = ({ content }) => {
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

// DISC Graph Component (Page 23)
const DISCGraphs = () => {
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
        <h2 className="text-2xl font-bold text-gray-800">Style Insights® Graphs</h2>
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

// Behavioral Hierarchy (Page 21 & 22)
const BehavioralHierarchy = () => {
  return (
    <div className="bg-white p-6 border border-gray-100 rounded-xl shadow-sm print:shadow-none print:border-none print:p-0 my-6 space-y-6">
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Behavioral Hierarchy</h2>
        <p className="text-sm text-gray-500 mt-1">
          Your observable behavior and related emotions rank-ordered from strongest to weakest.
        </p>
      </div>

      <div className="space-y-6">
        {BEHAVIOR_TRAITS.map((t, idx) => (
          <div key={t.id} className="space-y-2">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-md font-bold text-gray-800 flex items-center gap-2">
                  <span className="inline-flex justify-center items-center w-6 h-6 rounded-full bg-blue-50 text-blue-600 text-xs font-extrabold">
                    {idx + 1}
                  </span>
                  {t.name}
                </h3>
                <p className="text-xs text-gray-500 max-w-2xl mt-0.5">{t.desc}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-lg font-extrabold text-blue-600">{t.score.toFixed(1)}</span>
                <span className="text-[10px] text-gray-400 block">Mean: {t.mean.toFixed(1)}*</span>
              </div>
            </div>

            {/* Horizontal progress bar */}
            <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
              {/* Shaded 68% standard deviation range around population mean */}
              <div 
                className="absolute top-0 bottom-0 bg-yellow-100 opacity-50"
                style={{ 
                  left: `${Math.max(0, (t.mean - 1.2) * 10)}%`, 
                  right: `${Math.max(0, 100 - (t.mean + 1.2) * 10)}%` 
                }}
              />
              
              {/* Kyle's Score Bar */}
              <div 
                className={`absolute top-0 bottom-0 rounded-full ${t.score >= 7.0 ? 'bg-blue-500' : t.score >= 5.0 ? 'bg-cyan-500' : 'bg-gray-400'}`} 
                style={{ width: `${t.score * 10}%` }}
              />

              {/* Population Mean Mark */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-red-500 flex items-center justify-center z-10"
                style={{ left: `${t.mean * 10}%` }}
                title={`Population Mean: ${t.mean}`}
              >
                <div className="w-2 h-2 rounded-full bg-red-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-4 flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] text-gray-400 gap-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-4 h-2 bg-yellow-100 border border-yellow-200" />
            <span>Shaded area: 68% of national population</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
            <span>Red dot: National average</span>
          </div>
        </div>
        <div>* 68% of the population falls within the shaded area.</div>
      </div>
    </div>
  );
};

// Motivators Hierarchy (Page 37)
const MotivatorsHierarchy = () => {
  return (
    <div className="bg-white p-6 border border-gray-100 rounded-xl shadow-sm print:shadow-none print:border-none print:p-0 my-6 space-y-6">
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Motivators Hierarchy</h2>
        <p className="text-sm text-gray-500 mt-1">
          Your personal motivators ranked from highest to lowest. Supports professional fulfillment when matched to assignments.
        </p>
      </div>

      <div className="space-y-6">
        {MOTIVATORS.map((m, idx) => (
          <div key={m.name} className="space-y-2">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-md font-bold text-gray-800 flex items-center gap-2">
                  <span className="inline-flex justify-center items-center w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 text-xs font-extrabold">
                    {idx + 1}
                  </span>
                  {m.name}
                </h3>
                <p className="text-xs text-gray-500 max-w-2xl mt-0.5">{m.desc}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-lg font-extrabold text-indigo-600">{m.score.toFixed(1)}</span>
                <span className="text-[10px] text-gray-400 block">Mean: {m.mean.toFixed(1)}*</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
              {/* Shaded population standard range */}
              <div 
                className="absolute top-0 bottom-0 bg-yellow-100 opacity-50"
                style={{ 
                  left: `${Math.max(0, (m.mean - 1.2) * 10)}%`, 
                  right: `${Math.max(0, 100 - (m.mean + 1.2) * 10)}%` 
                }}
              />
              
              {/* Score Bar */}
              <div 
                className={`absolute top-0 bottom-0 rounded-full ${m.score >= 5.5 ? 'bg-indigo-500' : m.score >= 4.0 ? 'bg-purple-500' : 'bg-gray-400'}`} 
                style={{ width: `${m.score * 10}%` }}
              />

              {/* National Mean Mark */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-red-500 flex items-center justify-center z-10"
                style={{ left: `${m.mean * 10}%` }}
              >
                <div className="w-2 h-2 rounded-full bg-red-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-4 flex justify-between text-[10px] text-gray-400">
        <div>Shaded area represents 68% of the national average standard deviation.</div>
        <div>* 68% of the population falls within the shaded area.</div>
      </div>
    </div>
  );
};

// EQ Assessment Renderer (Page 48 & 49)
const EQGraphs = ({ pageNum }) => {
  const isComponentsPage = pageNum === 48;
  const list = isComponentsPage ? EQ_COMPONENTS : EQ_SCORING;

  return (
    <div className="bg-white p-6 border border-gray-100 rounded-xl shadow-sm print:shadow-none print:border-none print:p-0 my-6 space-y-6">
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {isComponentsPage ? "Emotional Quotient Assessment Results" : "Emotional Quotient Scoring Information"}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          {isComponentsPage 
            ? "Individual scores of emotional intelligence dimensions." 
            : "Aggregated intrapersonal, interpersonal, and total emotional quotient scores."
          }
        </p>
      </div>

      <div className="space-y-6">
        {list.map((eq, idx) => (
          <div key={eq.name} className="space-y-2">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-md font-bold text-gray-800 flex items-center gap-2">
                  <span className="inline-flex justify-center items-center w-6 h-6 rounded-full bg-teal-50 text-teal-600 text-xs font-extrabold">
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
                <div className="w-2 h-2 rounded-full bg-red-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-4 flex justify-between text-[10px] text-gray-400">
        <div>National benchmark comparisons indicate areas of strengths and development focuses.</div>
        <div>* 68% of the population falls within the shaded area.</div>
      </div>
    </div>
  );
};

// Default text formatting page renderer
const DefaultPageRenderer = ({ content }) => {
  const blocks = content.split('\n\n');

  return (
    <div className="space-y-4">
      {blocks.map((block, idx) => {
        const lines = block.trim().split('\n');
        if (!lines.length || lines[0] === '') return null;

        // Check if block is a list
        const isList = lines.some(line => line.strip ? line.strip().startsWith('•') : line.trim().startsWith('•') || line.trim().startsWith('*'));

        if (isList) {
          return (
            <ul key={idx} className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
              {lines.map((line, lidx) => {
                const cleanLine = line.trim().replace(/^[•*]\s*/, '');
                if (!cleanLine) return null;
                return <li key={lidx} className="leading-relaxed">{cleanLine}</li>;
              })}
            </ul>
          );
        }

        // Check if single line is a header
        if (lines.length === 1) {
          const text = lines[0].trim();
          
          // Identify potential major headers or headings
          const isAllHeader = text === text.toUpperCase() && text.length > 3 && !text.match(/^\d+$/);
          const isKnownHeader = [
            "Natural", "Adapted", "Problems - Challenges", "People - Contacts", "Pace - Consistency", "Procedures - Constraints", 
            "Ways to Communicate", "Ways NOT to Communicate", "Introduction", "General Characteristics"
          ].some(h => text.includes(h));

          if (isAllHeader || isKnownHeader) {
            return (
              <h3 key={idx} className="text-md font-extrabold text-blue-900 border-l-4 border-blue-600 pl-3 uppercase tracking-wide mt-6 mb-2">
                {text}
              </h3>
            );
          }
        }

        // Check if paragraph contains column headers (like Page 13 side-by-side Natural vs Adapted columns)
        // Let's check if the block contains "Natural" or "Adapted" as standalone headers
        const joinedText = lines.join(' ');
        
        return (
          <p key={idx} className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
            {block}
          </p>
        );
      })}
    </div>
  );
};

const PageContent = ({ page }) => {
  const pageNum = page.page;

  if (pageNum === 1) {
    return <CoverPage content={page.content} />;
  }
  if (pageNum === 21 || pageNum === 22) {
    return (
      <div className="space-y-4">
        {/* Render standard text if available */}
        <div className="text-gray-700 leading-relaxed text-sm">
          {page.content.split('\n\n').slice(0, 1).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        {/* Render beautiful interactive chart */}
        {pageNum === 21 && <BehavioralHierarchy />}
      </div>
    );
  }
  if (pageNum === 23) {
    return <DISCGraphs />;
  }
  if (pageNum === 37) {
    return (
      <div className="space-y-4">
        <div className="text-gray-700 leading-relaxed text-sm">
          {page.content.split('\n\n').slice(0, 1).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <MotivatorsHierarchy />
      </div>
    );
  }
  if (pageNum === 48 || pageNum === 49) {
    return (
      <div className="space-y-4">
        <div className="text-gray-700 leading-relaxed text-sm">
          {page.content.split('\n\n').slice(0, 1).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <EQGraphs pageNum={pageNum} />
      </div>
    );
  }

  return <DefaultPageRenderer content={page.content} />;
};

const DISCProfilePage = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Monitor scrolling to highlight the active section in Table of Contents
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of SECTIONS) {
        const firstPageEl = document.getElementById(`page-${section.start}`);
        const lastPageEl = document.getElementById(`page-${section.end}`);
        if (firstPageEl && lastPageEl) {
          const top = firstPageEl.offsetTop;
          const bottom = lastPageEl.offsetTop + lastPageEl.offsetHeight;
          if (scrollPosition >= top && scrollPosition <= bottom) {
            setActiveSection(section.title);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPage = (pageNum) => {
    const el = document.getElementById(`page-${pageNum}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
                  const isActive = activeSection === section.title;
                  return (
                    <div key={section.title} className="space-y-2">
                      <button 
                        onClick={() => scrollToPage(section.start)}
                        className={`text-left text-sm font-bold block w-full transition ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
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
                              onClick={() => scrollToPage(pageNum)}
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
                  className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-12 shadow-sm relative print:shadow-none print:border-none print:p-0 print:m-0 print:bg-transparent print:break-after-page min-h-[900px] flex flex-col justify-between"
                >
                  {/* Decorative Header (Screen only) */}
                  <div className="flex justify-between items-center text-[10px] text-gray-400 font-extrabold uppercase tracking-widest border-b border-gray-100 pb-4 mb-6 print:hidden">
                    <span>TTI Success Insights • TriMetrix® EQ</span>
                    <span className="bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full">Page {page.page} of 58</span>
                  </div>

                  {/* Main Page Title */}
                  {page.page > 1 && page.title && (
                    <h2 className="text-2xl font-extrabold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">
                      {page.title}
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
        <script src={`/client.js?${new Date().getTime()}`}></script>
      </body>
    </html>
  );
};

export default DISCProfilePage;
