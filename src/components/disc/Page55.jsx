export const title = "Emotional Quotient™ Wheel";
import React from 'react';

const Page55 = () => {
  const data = [
    { name: "Self-Awareness", score: 3.0, startAngle: -180, endAngle: -120, color: "#f97316" },
    { name: "Self-Regulation", score: 5.5, startAngle: -120, endAngle: -60, color: "#ea580c" },
    { name: "Motivation", score: 6.2, startAngle: -60, endAngle: 0, color: "#dc2626" },
    { name: "Empathy", score: 4.7, startAngle: 0, endAngle: 90, color: "#c084fc" },
    { name: "Social Skills", score: 3.6, startAngle: 90, endAngle: 180, color: "#7e22ce" }
  ];

  const rad = Math.PI / 180;
  const maxRadius = 144;

  const getWedgePath = (start, end, radius) => {
    const x1 = radius * Math.cos(start * rad);
    const y1 = radius * Math.sin(start * rad);
    const x2 = radius * Math.cos(end * rad);
    const y2 = radius * Math.sin(end * rad);
    return `M 0 0 L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`;
  };

  const getAnnularSectorPath = (start, end, r1, r2) => {
    const x1_inner = r1 * Math.cos(start * rad);
    const y1_inner = r1 * Math.sin(start * rad);
    const x2_inner = r1 * Math.cos(end * rad);
    const y2_inner = r1 * Math.sin(end * rad);
    
    const x1_outer = r2 * Math.cos(start * rad);
    const y1_outer = r2 * Math.sin(start * rad);
    const x2_outer = r2 * Math.cos(end * rad);
    const y2_outer = r2 * Math.sin(end * rad);
    
    return `M ${x1_inner} ${y1_inner} L ${x1_outer} ${y1_outer} A ${r2} ${r2} 0 0 1 ${x2_outer} ${y2_outer} L ${x2_inner} ${y2_inner} A ${r1} ${r1} 0 0 0 ${x1_inner} ${y1_inner} Z`;
  };

  return (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed text-sm">
        The Emotional Quotient™ Wheel is a visual representation of your intrapersonal and interpersonal emotional intelligence dimensions. The size of each colored segment corresponds to your score, illustrating the balance between your self-awareness, self-regulation, motivation, empathy, and social skills.
      </p>

      <div className="bg-white p-6 border border-gray-100 rounded-2xl shadow-sm print:shadow-none print:border-none print:p-0 my-6 flex flex-col items-center">
        <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
          <svg 
            viewBox="-200 -200 400 400" 
            className="w-full h-full max-h-[380px]"
          >
            {/* Definitions of Text Paths */}
            <defs>
              <path id="eqTopRimPath" d="M -173 0 A 173 173 0 0 1 173 0" fill="none" />
              <path id="eqBottomRimPath" d="M -173 0 A 173 173 0 0 0 173 0" fill="none" />
            </defs>

            {/* Sector labels ring (gray background ring) */}
            <circle cx="0" cy="0" r="168" fill="#78716c" opacity="0.15" />
            <circle cx="0" cy="0" r="144" fill="white" />

            {/* Background grid concentric circles inside wedges */}
            <circle cx="0" cy="0" r={maxRadius * 0.4} stroke="#f1f5f9" fill="none" strokeWidth="1" />
            <circle cx="0" cy="0" r={maxRadius * 0.7} stroke="#f1f5f9" fill="none" strokeWidth="1" />

            {/* Inner score wedges */}
            {data.map((w) => {
              const wedgeRadius = (w.score / 10) * maxRadius;
              return (
                <path 
                  key={`inner-${w.name}`}
                  d={getWedgePath(w.startAngle, w.endAngle, wedgeRadius)}
                  fill={w.color}
                  opacity="0.85"
                  className="transition-all duration-500 hover:opacity-100"
                />
              );
            })}

            {/* Radial divider lines */}
            {data.map((w) => {
              const x = 180 * Math.cos(w.startAngle * rad);
              const y = 180 * Math.sin(w.startAngle * rad);
              return (
                <line 
                  key={`line-${w.startAngle}`}
                  x1="0" y1="0" x2={x} y2={y}
                  stroke="#d1d5db"
                  strokeWidth="1.5"
                />
              );
            })}

            {/* Outer rim colored sectors */}
            {/* Top half: Intrapersonal (Orange) */}
            <path d={getAnnularSectorPath(-180, 0, 168, 180)} fill="#ea580c" />
            
            {/* Bottom half: Interpersonal (Purple) */}
            <path d={getAnnularSectorPath(0, 180, 168, 180)} fill="#6b21a8" />

            {/* Circular boundaries */}
            <circle cx="0" cy="0" r="180" stroke="#cbd5e1" fill="none" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="168" stroke="#cbd5e1" fill="none" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="144" stroke="#cbd5e1" fill="none" strokeWidth="1.5" />

            {/* Outer rim labels (INTRAPERSONAL & INTERPERSONAL) */}
            <text className="font-extrabold text-[9px] fill-white tracking-[0.3em] select-none">
              <textPath href="#eqTopRimPath" startOffset="50%" textAnchor="middle">INTRAPERSONAL</textPath>
            </text>
            <text className="font-extrabold text-[9px] fill-white tracking-[0.3em] select-none">
              <textPath href="#eqBottomRimPath" startOffset="50%" textAnchor="middle">INTERPERSONAL</textPath>
            </text>

            {/* Sector labels and score values */}
            {data.map((w) => {
              const midAngle = (w.startAngle + w.endAngle) / 2;
              const textRadius = 156;
              const scoreRadius = 120;
              
              // Label rotation
              let rot = midAngle + 90;
              if (rot > 90 && rot < 270) {
                rot -= 180;
              }

              const lx = textRadius * Math.cos(midAngle * rad);
              const ly = textRadius * Math.sin(midAngle * rad);
              
              const sx = scoreRadius * Math.cos(midAngle * rad);
              const sy = scoreRadius * Math.sin(midAngle * rad);

              return (
                <g key={`labels-${w.name}`} className="select-none">
                  {/* Sector Name */}
                  <text 
                    x={lx}
                    y={ly}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-gray-700 font-extrabold text-[8px] uppercase tracking-wide"
                    transform={`rotate(${rot}, ${lx}, ${ly})`}
                  >
                    {w.name}
                  </text>
                  
                  {/* Score Number */}
                  <text 
                    x={sx}
                    y={sy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-gray-900 font-bold text-xs"
                  >
                    {w.score.toFixed(1)}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Page55;
