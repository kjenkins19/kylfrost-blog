export const title = "Communication Tips";
import React from 'react';

const COMMUNICATION_TIPS = [{
  type: "Dominance",
  title: "ambitious, forceful, decisive, strong-willed, independent and goal-oriented",
  bgClass: "bg-red-500",
  textClass: "text-red-700",
  hoverBg: "hover:bg-red-50/20",
  dos: ["Be clear, specific, brief and to the point.", "Stick to business.", "Be prepared with support material in a well-organized \"package.\""],
  donts: ["Talking about things that are not relevant to the issue.", "Leaving loopholes or cloudy issues.", "Appearing disorganized."]
}, {
  type: "Influencing",
  title: "magnetic, enthusiastic, friendly, demonstrative and political",
  bgClass: "bg-yellow-500",
  textClass: "text-yellow-700",
  hoverBg: "hover:bg-yellow-50/20",
  dos: ["Provide a warm and friendly environment.", "Don't deal with a lot of details (put them in writing).", "Ask \"feeling\" questions to draw their opinions or comments."],
  donts: ["Being curt, cold or tight-lipped.", "Controlling the conversation.", "Driving on facts and figures, alternatives, abstractions."]
}, {
  type: "Steadiness",
  title: "patient, predictable, reliable, steady, relaxed and modest",
  bgClass: "bg-green-500",
  textClass: "text-green-700",
  hoverBg: "hover:bg-green-50/20",
  dos: ["Begin with a personal comment--break the ice.", "Present your case softly, nonthreateningly.", "Ask \"how?\" questions to draw their opinions."],
  donts: ["Rushing headlong into business.", "Being domineering or demanding.", "Forcing them to respond quickly to your objectives."]
}, {
  type: "Compliance",
  title: "dependent, neat, conservative, perfectionist, careful and compliant",
  bgClass: "bg-blue-500",
  textClass: "text-blue-700",
  hoverBg: "hover:bg-blue-50/20",
  dos: ["Prepare your \"case\" in advance.", "Stick to business.", "Be accurate and realistic."],
  donts: ["Being giddy, casual, informal, loud.", "Pushing too hard or being unrealistic with deadlines.", "Being disorganized or messy."]
}];

const Page9 = () => {
  return (<div className="space-y-4">
      <p className="text-gray-700 leading-relaxed text-sm">
        This section provides suggestions on methods which will improve Kyle's communications with others. The tips
        include a brief description of typical people with whom he may interact. By adapting to the communication style
        desired by other people, Kyle will become more effective in his communications with them. He may have to
        practice some flexibility in varying his communication style with others who may be different from himself. This
        flexibility and the ability to interpret the needs of others is the mark of a superior communicator.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {COMMUNICATION_TIPS.map((tip) => (<div
            key={tip.type}
            className={`relative border border-gray-200 rounded-2xl p-6 bg-white shadow-sm flex flex-col justify-between transition-all duration-200 hover:shadow ${tip.hoverBg}`}
          >
            {/* Accent triangle at bottom right */}
            <div className="absolute bottom-0 right-0 w-8 h-8 overflow-hidden rounded-br-2xl pointer-events-none">
              <div className={`absolute bottom-[-16px] right-[-16px] w-12 h-12 rotate-45 ${tip.bgClass}`}/>
            </div>

            <div>
              <div className="mb-4">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold text-white uppercase ${tip.bgClass} mb-2`}>
                  {tip.type}
                </span>
                <p className="text-gray-800 text-sm font-semibold leading-relaxed">
                  When communicating with a person who is {tip.title}:
                </p>
              </div>

              <div className="space-y-2 mb-4">
                {tip.dos.map((doItem, idx) => (<div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                    <span className={`text-sm ${tip.textClass}`}>•</span>
                    <span>{doItem}</span>
                  </div>))}
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
                    </div>))}
                </div>
              </div>
            </div>
          </div>))}
      </div>
    </div>);
};

export default Page9;
