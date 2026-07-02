import React, { useEffect, useState } from 'react';
import { discPages } from './discData.js';

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

// OCR Clean-up helper to filter out trailing page signatures, wheel roles, and other scans noise
const WHEEL_ROLES = [
  "IMPLEMENTOR", "ANALYZER", "CONDUCTOR", "COORDINATOR", 
  "PERSUADER", "SUPPORTER", "PROMOTER", "RELATER"
];

const cleanOcrContent = (content) => {
  if (!content) return "";
  const lines = content.split('\n');
  const filtered = lines.filter(line => {
    const trimmed = line.trim();
    if (!trimmed) return true;
    
    // Remove wheel roles
    if (WHEEL_ROLES.includes(trimmed)) return false;
    
    // Remove copyright blocks
    if (trimmed.includes("Copyright ©") || (trimmed.includes("Copyright") && trimmed.includes("Target Training International"))) return false;
    
    // Remove page numbers or footer artifacts
    if (trimmed.match(/^Page \d+$/i)) return false;
    if (trimmed.match(/^\d+$/)) return false;
    if (trimmed.includes("Clear Cut Strategies, LLC & The Abelson Group")) return false;
    if (trimmed.includes("Clear Out Strategies, LLC & The Abelson Group")) return false;
    if (trimmed.includes("Tel. 937-597-4507")) return false;
    if (trimmed.includes("Succeed@TheAbelsonGroup.com")) return false;
    if (trimmed.includes("CarlaNeer@hotmail.com")) return false;
    
    return true;
  });
  
  return filtered.join('\n').replace(/\n{3,}/g, '\n\n').trim();
};

const cleanTitle = (title, pageNum) => {
  if (pageNum === 14) return "Natural and Adapted Style (Continued)";
  return title;
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

// ----------------------------------------------------
// MODERNIZED VISUAL COMPONENTS FOR DATA-HEAVY PAGES
// ----------------------------------------------------

// Page 12 - Descriptors Grid (replaces plain text lists)
const DESCRIPTORS_DATA = [
  {
    dimension: "Dominance",
    colorClass: "red",
    headerBg: "bg-red-600",
    lightBg: "bg-red-50/70",
    textClass: "text-red-700",
    score: 26,
    highWords: ["Driving", "Ambitious", "Pioneering", "Strong-Willed", "Determined", "Competitive", "Decisive", "Venturesome"],
    lowWords: ["Calculating", "Cooperative", "Hesitant", "Cautious", "Agreeable", "Modest", "Peaceful", "Unobtrusive"]
  },
  {
    dimension: "Influencing",
    colorClass: "yellow",
    headerBg: "bg-yellow-500",
    lightBg: "bg-yellow-50/75",
    textClass: "text-yellow-800",
    score: 24,
    highWords: ["Inspiring", "Magnetic", "Enthusiastic", "Persuasive", "Convincing", "Poised", "Optimistic", "Trusting"],
    lowWords: ["Reflective", "Factual", "Calculating", "Skeptical", "Logical", "Suspicious", "Matter-of-Fact", "Incisive"]
  },
  {
    dimension: "Steadiness",
    colorClass: "green",
    headerBg: "bg-green-600",
    lightBg: "bg-green-50/70",
    textClass: "text-green-700",
    score: 89,
    highWords: ["Relaxed", "Passive", "Patient", "Possessive", "Predictable", "Consistent", "Steady", "Stable"],
    lowWords: ["Mobile", "Active", "Restless", "Impatient", "Pressure-Oriented", "Eager", "Flexible", "Impulsive"]
  },
  {
    dimension: "Compliance",
    colorClass: "blue",
    headerBg: "bg-blue-600",
    lightBg: "bg-blue-50/70",
    textClass: "text-blue-700",
    score: 74,
    highWords: ["Cautious", "Careful", "Exacting", "Systematic", "Accurate", "Open-Minded", "Balanced Judgment", "Diplomatic"],
    lowWords: ["Firm", "Independent", "Self-Willed", "Obstinate", "Unsystematic", "Uninhibited", "Arbitrary", "Unbending"]
  }
];

const DescriptorGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border border-gray-200 rounded-xl overflow-hidden bg-white my-6 shadow-sm">
      {DESCRIPTORS_DATA.map((col) => {
        const isHigh = col.score >= 50;
        return (
          <div key={col.dimension} className="flex flex-col border-r last:border-r-0 border-gray-200">
            {/* High Descriptors */}
            <div className={`flex-1 p-4 flex flex-col items-center justify-center gap-2 transition duration-200 ${isHigh ? `${col.lightBg} font-bold text-gray-900` : 'bg-white text-gray-400 font-normal'}`}>
              {col.highWords.map((word) => (
                <span key={word} className={`text-xs tracking-wide ${isHigh ? `${col.textClass} font-bold` : 'opacity-60'}`}>{word}</span>
              ))}
            </div>
            
            {/* Color accent split header */}
            <div className={`${col.headerBg} py-3 text-center text-white font-extrabold uppercase text-[10px] tracking-wider flex flex-col justify-center items-center`}>
              <span>{col.dimension}</span>
              <span className="text-[9px] opacity-90 mt-0.5">Score: {col.score}</span>
            </div>

            {/* Low Descriptors */}
            <div className={`flex-1 p-4 flex flex-col items-center justify-center gap-2 transition duration-200 ${!isHigh ? `${col.lightBg} font-bold text-gray-900` : 'bg-white text-gray-400 font-normal'}`}>
              {col.lowWords.map((word) => (
                <span key={word} className={`text-xs tracking-wide ${!isHigh ? `${col.textClass} font-bold` : 'opacity-60'}`}>{word}</span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Page 13 & 14 - Natural & Adapted Styles dual comparisons
const NATURAL_ADAPTED_DATA = {
  13: [
    {
      title: "Problems - Challenges",
      color: "red",
      bgClass: "bg-red-600",
      borderClass: "border-red-200",
      natural: "Kyle is cautious in his approach to problem solving and does not attempt to demand that his view, or opinion, be accepted at face value. Kyle likes to solve problems within the framework of a team environment. He will look for a compromise as opposed to a win-lose situation.",
      adapted: "Kyle sees no need to change his approach to solving problems or dealing with challenges in his present environment."
    },
    {
      title: "People - Contacts",
      color: "yellow",
      bgClass: "bg-yellow-500",
      borderClass: "border-yellow-200",
      natural: "Kyle is undemonstrative in his approach to influencing others and likes to let facts and figures stand for themselves. He feels persuasion needs to be objective and straightforward. His trust level is based on each interaction--the past is the past. He presents facts without embellishments.",
      adapted: "Kyle sees no need to change his approach to influencing others to his way of thinking. He sees his natural style to be what the environment is calling for."
    }
  ],
  14: [
    {
      title: "Pace - Consistency",
      color: "green",
      bgClass: "bg-green-600",
      borderClass: "border-green-200",
      natural: "Kyle is comfortable in an environment in which there are few projects going on concurrently. He is appreciative of the team concept and feels quite secure in an environment where the need to move from one activity to another quite quickly is kept to a minimum.",
      adapted: "Kyle sees his natural activity style to be just what the environment needs. What you see is what you get for activity level and consistency. Sometimes he would like the world to slow down."
    },
    {
      title: "Procedures - Constraints",
      color: "blue",
      bgClass: "bg-blue-600",
      borderClass: "border-blue-200",
      natural: "Kyle naturally is cautious and concerned for quality. He likes to be on a team that takes responsibility for the final product. He enjoys knowing the rules and can become upset when others fail to comply with the rules.",
      adapted: "Kyle shows little discomfort when comparing his basic (natural) style to his response to the environment (adapted) style. The difference is not significant and Kyle sees little or no need to change his response to the environment."
    }
  ]
};

const ComparativeStyleCard = ({ styleData }) => {
  const verticalTextStyles = {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="flex border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow transition duration-200 mb-6 border-gray-200">
      {/* Rotated category sidebar */}
      <div className={`w-12 sm:w-14 flex-shrink-0 flex items-center justify-center ${styleData.bgClass} text-white font-black py-6`}>
        <span 
          style={verticalTextStyles}
          className="whitespace-nowrap tracking-wider text-xs sm:text-sm uppercase"
        >
          {styleData.title}
        </span>
      </div>
      
      {/* Side-by-side styles */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-150">
        <div className="p-6 hover:bg-gray-50/30 transition">
          <div className="flex items-center gap-2 mb-3">
            <span className={`w-2 h-2 rounded-full ${styleData.bgClass}`} />
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Natural Style</h4>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">{styleData.natural}</p>
        </div>
        
        <div className="p-6 bg-gray-50/10 hover:bg-gray-50/40 transition">
          <div className="flex items-center gap-2 mb-3">
            <span className={`w-2 h-2 rounded-full ${styleData.bgClass} opacity-60`} />
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Adapted Style</h4>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">{styleData.adapted}</p>
        </div>
      </div>
    </div>
  );
};

// Page 9 - Communication Tips Component
const COMMUNICATION_TIPS = [
  {
    type: "Dominance",
    title: "ambitious, forceful, decisive, strong-willed, independent and goal-oriented",
    bgClass: "bg-red-500",
    textClass: "text-red-700",
    hoverBg: "hover:bg-red-50/20",
    dos: [
      "Be clear, specific, brief and to the point.",
      "Stick to business.",
      "Be prepared with support material in a well-organized \"package.\""
    ],
    donts: [
      "Talking about things that are not relevant to the issue.",
      "Leaving loopholes or cloudy issues.",
      "Appearing disorganized."
    ]
  },
  {
    type: "Influencing",
    title: "magnetic, enthusiastic, friendly, demonstrative and political",
    bgClass: "bg-yellow-500",
    textClass: "text-yellow-700",
    hoverBg: "hover:bg-yellow-50/20",
    dos: [
      "Provide a warm and friendly environment.",
      "Don't deal with a lot of details (put them in writing).",
      "Ask \"feeling\" questions to draw their opinions or comments."
    ],
    donts: [
      "Being curt, cold or tight-lipped.",
      "Controlling the conversation.",
      "Driving on facts and figures, alternatives, abstractions."
    ]
  },
  {
    type: "Steadiness",
    title: "patient, predictable, reliable, steady, relaxed and modest",
    bgClass: "bg-green-500",
    textClass: "text-green-700",
    hoverBg: "hover:bg-green-50/20",
    dos: [
      "Begin with a personal comment--break the ice.",
      "Present your case softly, nonthreateningly.",
      "Ask \"how?\" questions to draw their opinions."
    ],
    donts: [
      "Rushing headlong into business.",
      "Being domineering or demanding.",
      "Forcing them to respond quickly to your objectives."
    ]
  },
  {
    type: "Compliance",
    title: "dependent, neat, conservative, perfectionist, careful and compliant",
    bgClass: "bg-blue-500",
    textClass: "text-blue-700",
    hoverBg: "hover:bg-blue-50/20",
    dos: [
      "Prepare your \"case\" in advance.",
      "Stick to business.",
      "Be accurate and realistic."
    ],
    donts: [
      "Being giddy, casual, informal, loud.",
      "Pushing too hard or being unrealistic with deadlines.",
      "Being disorganized or messy."
    ]
  }
];

const CommunicationTipsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      {COMMUNICATION_TIPS.map((tip) => (
        <div 
          key={tip.type} 
          className={`relative border border-gray-200 rounded-2xl p-6 bg-white shadow-sm flex flex-col justify-between transition-all duration-200 hover:shadow ${tip.hoverBg}`}
        >
          {/* Accent triangle at bottom right */}
          <div className="absolute bottom-0 right-0 w-8 h-8 overflow-hidden rounded-br-2xl pointer-events-none">
            <div className={`absolute bottom-[-16px] right-[-16px] w-12 h-12 rotate-45 ${tip.bgClass}`} />
          </div>

          <div>
            <div className="mb-4">
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold text-white uppercase ${tip.bgClass} mb-2`}>
                {tip.type}
              </span>
              <p className="text-gray-800 text-sm font-semibold leading-relaxed">
                When communicating with a person who is {tip.title}:
              </p>
            </div>

            <div className="space-y-2 mb-4">
              {tip.dos.map((doItem, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className={`text-sm ${tip.textClass}`}>•</span>
                  <span>{doItem}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-3 mt-3">
              <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                Factors that will create tension:
              </h5>
              <div className="space-y-2">
                {tip.donts.map((dontItem, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-650">
                    <span className="text-sm text-gray-400">•</span>
                    <span>{dontItem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Page 10 - Perceptions Component
const PERCEPTIONS_DATA = [
  {
    title: "Self-Perception",
    subtitle: "Kyle usually sees himself as being:",
    accentClass: "bg-emerald-500",
    lightBg: "bg-emerald-50/10",
    items: [
      { left: "Considerate", right: "Thoughtful" },
      { left: "Good-Natured", right: "Dependable" },
      { left: "Team player", right: "Good listener" }
    ]
  },
  {
    title: "Others' Perception - Moderate",
    subtitle: "Under moderate pressure, stress or fatigue, others may see him as:",
    accentClass: "bg-amber-500",
    lightBg: "bg-amber-50/10",
    items: [
      { left: "Nondemonstrative", right: "Hesitant" },
      { left: "Unconcerned", right: "Inflexible" }
    ]
  },
  {
    title: "Others' Perception - Extreme",
    subtitle: "Under extreme pressure, stress or fatigue, others may see him as:",
    accentClass: "bg-rose-500",
    lightBg: "bg-rose-50/10",
    items: [
      { left: "Possessive", right: "Stubborn" },
      { left: "Detached", right: "Insensitive" }
    ]
  }
];

const PerceptionsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
      {PERCEPTIONS_DATA.map((card) => (
        <div 
          key={card.title}
          className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow transition duration-200 flex flex-col"
        >
          <div className={`${card.accentClass} py-3.5 px-5 text-white font-extrabold text-xs uppercase tracking-wider`}>
            {card.title}
          </div>
          
          <div className={`p-5 flex-1 flex flex-col justify-between ${card.lightBg}`}>
            <p className="text-gray-500 text-xs font-semibold leading-relaxed mb-4">
              {card.subtitle}
            </p>

            <div className="space-y-3">
              {card.items.map((row, idx) => (
                <div key={idx} className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-gray-50/50 border border-gray-100 px-3 py-2 rounded-lg">
                    <span className={`w-1.5 h-1.5 rounded-full ${card.accentClass}`} />
                    <span>{row.left}</span>
                  </div>
                  {row.right ? (
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-gray-50/50 border border-gray-100 px-3 py-2 rounded-lg">
                      <span className={`w-1.5 h-1.5 rounded-full ${card.accentClass}`} />
                      <span>{row.right}</span>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Pages 16-19 - Time Wasters
const TIME_WASTERS = {
  16: [
    {
      title: "Failure To Share Information",
      desc: "The failure to share information is the inability or unwillingness to discuss with others.",
      causes: [
        "Don't think others want to know the information",
        "Unclear of the way the information will be used/received",
        "Wait until asked before sharing information"
      ],
      solutions: [
        "Let others know that they need to ask for information",
        "Share with those whose opinions you trust"
      ]
    },
    {
      title: "Resisting Change",
      desc: "Resisting change is the process of consciously or subconsciously not participating in the change process. Measures of resistance may be active or passive, not doing things the new way, or making excuses for not having tasks accomplished.",
      causes: [
        "Need a high degree of security",
        "Like to maintain the status quo",
        "Routine/procedures have worked in the past",
        "One specific aspect of a proposed change violates sense of values",
        "A specific change is not seen as contributing to successful accomplishments"
      ],
      solutions: [
        "Acknowledge that change is a natural part of any job",
        "Develop the habit of writing down all of the pros and cons of a specific change",
        "Evaluate each objection to a change",
        "If there is one specific objection that is overriding the ability to change, share the specific concern with those involved and seek advice or input from others"
      ]
    }
  ],
  17: [
    {
      title: "Postpone The Unpleasant",
      desc: "Postponing the unpleasant is similar to procrastinating but is usually a continual reprioritizing of daily tasks. It is often a way to delay something that is not enjoyable.",
      causes: [
        "Like low-conflict environments and relationships",
        "Want to feel the success of accomplishment so the simple tasks are done first"
      ],
      solutions: [
        "Change your routine and, for one week, do the unpleasant tasks first",
        "See the accomplishment of unpleasant tasks as an equal or even greater achievement of success",
        "Reward yourself for every unpleasant task that you complete without postponing",
        "Confront those people who are causing you discomfort and discuss the problems"
      ]
    },
    {
      title: "Habits",
      desc: "A habit is a specific thought, behavior or way of doing something that was acquired by repetition or by reinforcement from self and/or others.",
      causes: [
        "Have established routines that are comfortable",
        "Routine creates a feeling of security",
        "Resist change for change's sake",
        "Have been praised repeatedly for a specific behavior"
      ],
      solutions: [
        "Evaluate habits and decide which contribute to your accomplishments and which deter you from success",
        "Try new ways of performing a certain task",
        "Ask others for recommendations on different approaches",
        "Consciously practice changing your routine"
      ]
    }
  ],
  18: [
    {
      title: "Not Exercising Authority",
      desc: "Not exercising authority is the inability to make decisions that might adversely impact some people and compromises the success of task accomplishment. It is also the resistance to making the tough calls.",
      causes: [
        "Want to be seen as supportive",
        "Believe people will do what is right",
        "Fear offending others",
        "Fear creating conflict between team members"
      ],
      solutions: [
        "Have clearly defined and written performance objectives",
        "Have clearly written rationale for specific decisions",
        "Assign decision reporting to the deputy/assistant",
        "Appoint a strong deputy or assistant",
        "Have a \"Good Guy/Bad Guy\" image agreement with deputy/assistant"
      ]
    },
    {
      title: "Failure To Anticipate",
      desc: "Failure to anticipate is the lack of focusing on possible outcomes or requirements.",
      causes: [
        "Expect only the best to happen",
        "Expect everyone else to do their best"
      ],
      solutions: []
    }
  ],
  19: [
    {
      title: "Failure To Anticipate (Continued)",
      desc: "Failure to anticipate is the lack of focusing on possible outcomes or requirements.",
      causes: [
        "Trust the system to run well",
        "Focus on the here and now rather than the future",
        "Resist change"
      ],
      solutions: [
        "Set aside a specific amount of time each day to consider outcome possibilities",
        "Talk with others who may have prior experience with a specific task or person"
      ]
    }
  ]
};

const TimeWastersList = ({ pageNum }) => {
  const wasters = TIME_WASTERS[pageNum];
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

// Page 6 - Value to the Organization
const ValueToOrganization = () => {
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

// Page 7 - Checklist for Communicating (Ways to Communicate)
const WaysToCommunicate = () => {
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

// Page 8 - Checklist for Communicating Continued (Ways NOT to Communicate)
const WaysNotToCommunicate = () => {
  const donts = [
    "Offer assurance and guarantees you can't fulfill.",
    "Make statements you cannot prove.",
    "Touch his body when talking to him.",
    "Be redundant.",
    "Stick coldly or harshly to business; on the other hand, don't lose sight of goals by being too personal.",
    "Be disorganized.",
    "Leave things open to interpretation.",
    "Manipulate or push him into agreeing because he probably won't fight back.",
    "Debate about facts and figures.",
    "Patronize or demean him by using subtlety or incentive.",
    "Pretend to be an expert, if you are not."
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm my-6 space-y-4">
      <p className="text-gray-500 text-xs font-semibold leading-relaxed border-b border-gray-100 pb-3">
        This section of the report is a list of things <strong>NOT</strong> to do while communicating with Kyle. Review and identify those methods of communication that result in frustration or reduced performance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {donts.map((d, idx) => (
          <div key={idx} className="flex items-start gap-3 p-3.5 border border-rose-50 bg-rose-50/10 rounded-xl hover:bg-rose-50/20 transition">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mt-0.5">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <span className="text-xs text-gray-750 leading-relaxed text-gray-700">{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Page 15 - Adapted Style checklist
const AdaptedEnvironmentChecklist = () => {
  const points = [
    "Task focus over people focus.",
    "Sensitivity to existing rules and regulations.",
    "Diplomatic cooperation in team interaction.",
    "Adherence to established guidelines and procedures.",
    "Precise, analytical approach to work tasks.",
    "Logical solutions.",
    "Consistency of task performance.",
    "Traditional, quality-oriented work model to follow.",
    "Exhibiting patience and good listening skills.",
    "Disciplined, meticulous attention to order.",
    "Compliance to high standards.",
    "Using a disciplined approach.",
    "Limited contact with people."
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm my-6 space-y-4">
      <p className="text-gray-500 text-xs font-semibold leading-relaxed border-b border-gray-100 pb-3">
        Kyle sees his present work environment requiring him to exhibit the behaviors listed below. If these statements DO NOT sound job-related, explore the reasons why he is adapting this behavior.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {points.map((p, idx) => (
          <div key={idx} className="flex items-center gap-3 p-3 border border-indigo-50 bg-indigo-50/5 rounded-xl hover:bg-indigo-50/15 transition">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-gray-700 leading-relaxed">{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Page 20 - Areas for Improvement
const AreasForImprovement = () => {
  const points = [
    "Dislike change if he feels the change is unwarranted",
    "Not let others know where he stands on an issue.",
    "Need help in prioritizing new assignments.",
    "Have difficulty establishing priorities. Have a tendency to make all things a number one priority--may have trouble meeting deadlines.",
    "Avoid accountability by overstating the complexity of the situation.",
    "Hold a grudge if his personal beliefs are attacked.",
    "Be dependent on others for decisions, even if he knows he is right."
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm my-6 space-y-4">
      <p className="text-gray-500 text-xs font-semibold leading-relaxed border-b border-gray-100 pb-3">
        In this area is a listing of possible limitations without regard to a specific job. Review and highlight 1 to 3 limitations that are hindering performance and develop an action plan to reduce or eliminate them.
      </p>
      <div className="space-y-3">
        {points.map((p, idx) => (
          <div key={idx} className="flex items-start gap-3.5 p-3.5 border border-amber-50 bg-amber-50/10 rounded-xl hover:bg-amber-50/20 transition">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mt-0.5">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="text-xs text-gray-700 leading-relaxed font-semibold">
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest block mb-1">Tendency {idx + 1}</span>
              {p}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Page 25 - Success Insights Wheel Component
const SuccessInsightsWheelSVG = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-2xl shadow-sm my-6">
      <h3 className="text-md font-bold text-gray-800 mb-2">Success Insights® Wheel</h3>
      <p className="text-xs text-gray-400 mb-6 text-center max-w-sm">
        Natural (Circle) and Adapted (Star) styles plotted at <strong>(20) Supporting Coordinator</strong>.
      </p>
      
      <div className="relative w-72 h-72">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Wheel Background rings */}
          <circle cx="100" cy="100" r="90" fill="none" stroke="#E5E7EB" strokeWidth="1" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#E5E7EB" strokeWidth="1" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="#E5E7EB" strokeWidth="1" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="#E5E7EB" strokeWidth="1" />
          
          {/* 8 Sector Wedges representing combinations of D, I, S, C */}
          {/* Segment 1: Conductor (Red) (247.5 - 292.5 deg) */}
          <path d="M 100 100 L 100 10 A 90 90 0 0 1 163.6 36.4 Z" fill="#EF4444" opacity="0.15" />
          {/* Segment 2: Persuader (Red-Yellow) (292.5 - 337.5 deg) */}
          <path d="M 100 100 L 163.6 36.4 A 90 90 0 0 1 190 100 Z" fill="#F59E0B" opacity="0.15" />
          {/* Segment 3: Promoter (Yellow) (337.5 - 22.5 deg) */}
          <path d="M 100 100 L 190 100 A 90 90 0 0 1 163.6 163.6 Z" fill="#EAB308" opacity="0.15" />
          {/* Segment 4: Relater (Yellow-Green) (22.5 - 67.5 deg) */}
          <path d="M 100 100 L 163.6 163.6 A 90 90 0 0 1 100 190 Z" fill="#84CC16" opacity="0.15" />
          {/* Segment 5: Supporter (Green) (67.5 - 112.5 deg) */}
          <path d="M 100 100 L 100 190 A 90 90 0 0 1 36.4 163.6 Z" fill="#22C55E" opacity="0.15" />
          {/* Segment 6: Coordinator (Green-Blue) (112.5 - 157.5 deg) */}
          <path d="M 100 100 L 36.4 163.6 A 90 90 0 0 1 10 100 Z" fill="#06B6D4" opacity="0.15" />
          {/* Segment 7: Analyzer (Blue) (157.5 - 202.5 deg) */}
          <path d="M 100 100 L 10 100 A 90 90 0 0 1 36.4 36.4 Z" fill="#3B82F6" opacity="0.15" />
          {/* Segment 8: Implementor (Blue-Red) (202.5 - 247.5 deg) */}
          <path d="M 100 100 L 36.4 36.4 A 90 90 0 0 1 100 1 Z" fill="#6366F1" opacity="0.15" />

          {/* Sector divider lines */}
          <line x1="100" y1="10" x2="100" y2="190" stroke="#E5E7EB" strokeWidth="1" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="#E5E7EB" strokeWidth="1" />
          <line x1="36.4" y1="36.4" x2="163.6" y2="163.6" stroke="#E5E7EB" strokeWidth="1" />
          <line x1="36.4" y1="163.6" x2="163.6" y2="36.4" stroke="#E5E7EB" strokeWidth="1" />

          {/* Sector Labels */}
          <text x="100" y="25" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#B91C1C">CONDUCTOR</text>
          <text x="145" y="45" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#D97706">PERSUADER</text>
          <text x="165" y="100" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#CA8A04">PROMOTER</text>
          <text x="145" y="150" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#65A30D">RELATER</text>
          <text x="100" y="175" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#16A34A">SUPPORTER</text>
          <text x="55" y="150" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#0891B2">COORDINATOR</text>
          <text x="35" y="100" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#2563EB">ANALYZER</text>
          <text x="55" y="45" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#4F46E5">IMPLEMENTOR</text>

          {/* Plotted Natural (Circle) and Adapted (Star) dot in Coordinator/Supporter outer zone */}
          <circle cx="72" cy="172" r="6" fill="#16A34A" stroke="#FFFFFF" strokeWidth="1.5" className="animate-pulse" />
          <path d="M 72 167 L 73.5 170.5 L 77 170.5 L 74 172.5 L 75.5 176 L 72 174 L 68.5 176 L 70 172.5 L 67 170.5 L 70.5 170.5 Z" fill="#D97706" stroke="#FFFFFF" strokeWidth="1.0" />
        </svg>

        {/* Legend block */}
        <div className="absolute bottom-2 left-2 flex flex-col gap-1 text-[10px] font-bold bg-white/95 border border-gray-150 p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#16A34A] border border-white shadow-sm" />
            <span className="text-gray-600">Natural Style (20)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 text-[#D97706]">
              <path d="M 5 0.5 L 6.5 4 L 10 4 L 7 6 L 8.5 9.5 L 5 7.5 L 1.5 9.5 L 3 6 L 0 4 L 3.5 4 Z" fill="currentColor" stroke="white" strokeWidth="0.5" />
            </svg>
            <span className="text-gray-600">Adapted Style (20)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Default text formatting page renderer
const DefaultPageRenderer = ({ content }) => {
  const cleanedContent = cleanOcrContent(content);
  const blocks = cleanedContent.split('\n\n');

  return (
    <div className="space-y-6">
      {blocks.map((block, idx) => {
        const lines = block.trim().split('\n');
        if (!lines.length || lines[0] === '') return null;

        // Check if block is a list
        const isList = lines.some(line => line.trim().startsWith('•') || line.trim().startsWith('*') || line.trim().startsWith('-'));

        if (isList) {
          return (
            <ul key={idx} className="list-disc pl-6 space-y-3 text-gray-700 text-sm">
              {lines.map((line, lidx) => {
                const cleanLine = line.trim().replace(/^[•*\-]\s*/, '');
                if (!cleanLine) return null;
                return <li key={lidx} className="leading-relaxed pl-1 text-gray-700">{cleanLine}</li>;
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
  if (pageNum === 6) {
    return <ValueToOrganization />;
  }
  if (pageNum === 7) {
    return <WaysToCommunicate />;
  }
  if (pageNum === 8) {
    return <WaysNotToCommunicate />;
  }
  if (pageNum === 9) {
    return (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed text-sm">
          This section provides suggestions on methods which will improve Kyle's communications with others. The tips include a brief description of typical people with whom he may interact. By adapting to the communication style desired by other people, Kyle will become more effective in his communications with them.
        </p>
        <CommunicationTipsGrid />
      </div>
    );
  }
  if (pageNum === 10) {
    return (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed text-sm">
          A person's behavior and feelings may be quickly telegraphed to others. This section provides additional information on Kyle's self-perception and how, under certain conditions, others may perceive his behavior.
        </p>
        <PerceptionsGrid />
      </div>
    );
  }
  if (pageNum === 12) {
    return (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed text-sm">
          Based on Kyle's responses, the report has marked those words that describe his personal behavior. They describe how he solves problems and meets challenges, influences people, responds to the pace of the environment, and how he responds to rules and procedures set by others.
        </p>
        <DescriptorGrid />
      </div>
    );
  }
  if (pageNum === 13 || pageNum === 14) {
    const list = NATURAL_ADAPTED_DATA[pageNum];
    return (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed text-sm">
          {pageNum === 13 
            ? "Kyle's natural style of dealing with problems, people, pace of events and procedures may not always fit what the environment needs. This section will provide valuable information related to stress and the pressure to adapt to the environment."
            : "Comparing basic (natural) style to response to the environment (adapted) style reveals the degree to which Kyle feels pressured to adapt."
          }
        </p>
        <div className="mt-6">
          {list.map((style, i) => (
            <ComparativeStyleCard key={i} styleData={style} />
          ))}
        </div>
      </div>
    );
  }
  if (pageNum === 15) {
    return <AdaptedEnvironmentChecklist />;
  }
  if (pageNum === 16 || pageNum === 17 || pageNum === 18 || pageNum === 19) {
    return (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed text-sm">
          {pageNum === 16 && "This section of your report is designed to identify time wasters that may impact your overall time use effectiveness. Possible causes and solutions will serve as a basis for creating an effective plan for maximizing your use of TIME and increasing your PERFORMANCE."}
          {pageNum > 16 && "Review the causes and solutions to create an action plan for minimizing these time wasters."}
        </p>
        <TimeWastersList pageNum={pageNum} />
      </div>
    );
  }
  if (pageNum === 20) {
    return <AreasForImprovement />;
  }
  if (pageNum === 21 || pageNum === 22) {
    return (
      <div className="space-y-4">
        <div className="text-gray-700 leading-relaxed text-sm font-medium">
          {cleanOcrContent(page.content).split('\n\n').slice(0, 1).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        {pageNum === 21 && <BehavioralHierarchy />}
      </div>
    );
  }
  if (pageNum === 23) {
    return <DISCGraphs />;
  }
  if (pageNum === 25) {
    return (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed text-sm">
          Notice on the wheel that your Natural style (circle) and your Adapted style (star) are plotted on the Wheel. If they are plotted in different boxes, then you are adapting your behavior. The further the two plotting points are from each other, the more you are adapting your behavior.
        </p>
        <SuccessInsightsWheelSVG />
      </div>
    );
  }
  if (pageNum === 37) {
    return (
      <div className="space-y-4">
        <div className="text-gray-700 leading-relaxed text-sm">
          {cleanOcrContent(page.content).split('\n\n').slice(0, 1).map((para, i) => (
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
          {cleanOcrContent(page.content).split('\n\n').slice(0, 1).map((para, i) => (
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
