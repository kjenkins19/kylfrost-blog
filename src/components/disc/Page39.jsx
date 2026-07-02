import React from 'react';

const Page39 = () => {
  const data = [
    { name: "Theoretical", score: 45, rank: "3rd", startAngle: -90, endAngle: -30, color: "#881337", textClass: "fill-white", labelColor: "#881337" },
    { name: "Utilitarian", score: 37, rank: "5th", startAngle: -30, endAngle: 30, color: "#f59e0b", textClass: "fill-gray-900", labelColor: "#f59e0b" },
    { name: "Individualistic", score: 47, rank: "1st", startAngle: 30, endAngle: 90, color: "#111827", textClass: "fill-white", labelColor: "#111827" },
    { name: "Aesthetic", score: 47, rank: "2nd", startAngle: 90, endAngle: 150, color: "#6d28d9", textClass: "fill-white", labelColor: "#6d28d9" },
    { name: "Social", score: 45, rank: "4th", startAngle: 150, endAngle: 210, color: "#0d9488", textClass: "fill-gray-900", labelColor: "#0d9488" },
    { name: "Traditional", score: 31, rank: "6th", startAngle: 210, endAngle: 270, color: "#78716c", textClass: "fill-white", labelColor: "#78716c" }
  ];

  const rad = Math.PI / 180;
  const maxRadius = 155;

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
        The Motivators Wheel™ is a visual representation of your passion for each of the six motivators. The size of each colored segment corresponds to your score, illustrating the hierarchy and intensity of your motivational drives.
      </p>

      <div className="bg-white p-6 border border-gray-100 rounded-2xl shadow-sm print:shadow-none print:border-none print:p-0 my-6 flex flex-col items-center">
        <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
          <svg 
            viewBox="-200 -200 400 400" 
            className="w-full h-full max-h-[380px]"
          >
            {/* Background grid circles */}
            <circle cx="0" cy="0" r={maxRadius * 0.4} stroke="#f1f5f9" fill="none" strokeWidth="1" />
            <circle cx="0" cy="0" r={maxRadius * 0.7} stroke="#f1f5f9" fill="none" strokeWidth="1" />
            
            {/* Inner score wedges */}
            {data.map((w) => {
              const wedgeRadius = (w.score / 70) * maxRadius;
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
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
              );
            })}

            {/* Outer rim sections */}
            {data.map((w) => (
              <path 
                key={`rim-${w.name}`}
                d={getAnnularSectorPath(w.startAngle, w.endAngle, 155, 180)}
                fill={w.labelColor}
                stroke="#e2e8f0"
                strokeWidth="0.5"
              />
            ))}

            {/* Circular boundaries */}
            <circle cx="0" cy="0" r="180" stroke="#cbd5e1" fill="none" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="155" stroke="#cbd5e1" fill="none" strokeWidth="1.5" />

            {/* Outer rim labels */}
            {data.map((w) => {
              const midAngle = (w.startAngle + w.endAngle) / 2;
              const textRadius = 167;
              const x = textRadius * Math.cos(midAngle * rad);
              const y = textRadius * Math.sin(midAngle * rad);
              
              let rot = midAngle + 90;
              if (rot > 90 && rot < 270) {
                rot -= 180;
              }

              return (
                <text 
                  key={`text-${w.name}`}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`${w.textClass} font-extrabold text-[9px] uppercase tracking-wide select-none`}
                  transform={`rotate(${rot}, ${x}, ${y})`}
                >
                  {w.name}
                </text>
              );
            })}

            {/* Score & Rank labels inside sectors */}
            {data.map((w) => {
              const midAngle = (w.startAngle + w.endAngle) / 2;
              const textRadius = 110;
              const x = textRadius * Math.cos(midAngle * rad);
              const y = textRadius * Math.sin(midAngle * rad);

              return (
                <g key={`labels-${w.name}`} className="select-none">
                  <circle cx={x} cy={y} r="18" fill="white" opacity="0.9" stroke="#f1f5f9" strokeWidth="0.5" />
                  <text 
                    x={x} 
                    y={y - 3} 
                    textAnchor="middle" 
                    className="fill-red-600 font-extrabold text-xs"
                  >
                    {w.score}
                  </text>
                  <text 
                    x={x} 
                    y={y + 7} 
                    textAnchor="middle" 
                    className="fill-red-500 font-bold text-[9px]"
                  >
                    {w.rank}
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

export default Page39;
