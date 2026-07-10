export const title = "Introduction Motivators Section";
import React from 'react';

const Page26 = () => {
  const ranking = [
    { rank: "1st", motivator: "Individualistic", intensity: "Strong", textClass: "text-emerald-700 font-extrabold" },
    { rank: "2nd", motivator: "Aesthetic", intensity: "Strong", textClass: "text-emerald-700 font-extrabold" },
    { rank: "3rd", motivator: "Theoretical", intensity: "Situational", textClass: "text-blue-700 font-bold" },
    { rank: "4th", motivator: "Social", intensity: "Situational", textClass: "text-blue-700 font-bold" },
    { rank: "5th", motivator: "Utilitarian", intensity: "Indifferent", textClass: "text-gray-500 font-medium" },
    { rank: "6th", motivator: "Traditional", intensity: "Indifferent", textClass: "text-gray-500 font-medium" }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
        <p>
          Knowledge of an individual's motivators help to tell us WHY they do things. A review of an
          individual's experiences, references, education and training help to tell us WHAT they can
          do. Behavioral assessments help to tell us HOW a person behaves and performs in the
          work environment. The Personal Motivators &amp; Engagement report measures the relative
          prominence of six basic interests or motivators (a way of valuing life): Theoretical,
          Utilitarian, Aesthetic, Social, Individualistic and Traditional.
        </p>
        <p>
          Motivators help to initiate one's behavior and are sometimes called the hidden motivators
          because they are not always readily observed. It is the purpose of this report to help illuminate
          and amplify some of those motivating factors and to build on the strengths that each person
          brings to the work environment.
        </p>
        <p>
          Based on your choices, this report ranks your relative passion for each of the six motivators. Your
          top two and sometimes three motivators cause you to move into action. You will feel positive
          when talking, listening or doing activities that satisfy your top motivators.
        </p>
        <p>
          The feedback you will receive in this section will reflect one of three intensity levels for each of the
          six motivators.
        </p>
      </div>

      <ul className="space-y-3 text-gray-700 text-sm pl-4">
        <li className="flex items-start gap-2.5">
          <span className="text-emerald-500 font-extrabold mt-0.5">•</span>
          <span>
            <strong className="text-gray-900 font-extrabold">Strong</strong> - positive feelings that you need to satisfy either on or off the job.
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="text-blue-500 font-extrabold mt-0.5">•</span>
          <span>
            <strong className="text-gray-900 font-extrabold">Situational</strong> - where your feelings will range from positive to indifferent based on other priorities in your life at the time. These motivators tend to become more important as your top motivators are satisfied.
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="text-gray-400 font-extrabold mt-0.5">•</span>
          <span>
            <strong className="text-gray-900 font-extrabold">Indifferent</strong> - your feelings will be indifferent when related to your 5th or 6th motivator.
          </span>
        </li>
      </ul>

      {/* Table Container */}
      <div className="border border-blue-200 rounded-2xl overflow-hidden shadow-sm max-w-2xl mx-auto my-8">
        <div className="bg-blue-50/60 px-6 py-4 border-b border-blue-200">
          <h4 className="text-base font-extrabold text-blue-900 tracking-wide">
            Your Personal Motivators Ranking
          </h4>
        </div>
        <table className="w-full text-left border-collapse">
          <tbody>
            {ranking.map((row, idx) => (
              <tr 
                key={row.motivator} 
                className="border-b border-gray-100 last:border-b-0 hover:bg-slate-50/50 transition-colors"
              >
                <td className="w-20 text-center py-3.5 text-sm font-semibold text-gray-500 border-r border-blue-100 bg-gray-50/30">
                  {row.rank}
                </td>
                <td className="py-3.5 pl-6 pr-4 text-sm font-semibold text-gray-800 border-r-4 border-blue-900">
                  {row.motivator}
                </td>
                <td className="py-3.5 pl-6 text-sm">
                  <span className={row.textClass}>
                    {row.intensity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page26;
