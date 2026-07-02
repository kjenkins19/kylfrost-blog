// Shared data configurations for DISC & EQ page components

export const SECTIONS = [
  { title: "Cover & Introduction", start: 1, end: 2 },
  { title: "Behaviors (DISC) Section", start: 3, end: 25 },
  { title: "Motivators Section", start: 26, end: 39 },
  { title: "Integrating Behaviors & Motivators", start: 40, end: 45 },
  { title: "Emotional Quotient Section", start: 46, end: 55 },
  { title: "Blending Behaviors, Motivators & EQ", start: 56, end: 58 },
];

export const BEHAVIOR_TRAITS = [
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

export const MOTIVATORS = [
  { name: "Individualistic/Political", desc: "Rewards those who value personal recognition, freedom, and control over their own destiny and others.", score: 5.8, mean: 4.7 },
  { name: "Aesthetic", desc: "Rewards those who value balance in their lives, creative self-expression, beauty and nature.", score: 5.8, mean: 4.3 },
  { name: "Theoretical", desc: "Rewards those who value knowledge for knowledge's sake, continuing education and intellectual growth.", score: 5.5, mean: 6.0 },
  { name: "Social", desc: "Rewards those who value opportunities to be of service to others and contribute to the progress and well being of society.", score: 5.5, mean: 5.7 },
  { name: "Utilitarian/Economic", desc: "Rewards those who value practical accomplishments, results and rewards for their investments of time, resources and energy.", score: 4.2, mean: 5.3 },
  { name: "Traditional/Regulatory", desc: "Rewards those who value traditions inherent in social structure, rules, regulations and principles.", score: 3.2, mean: 4.7 },
];

export const EQ_COMPONENTS = [
  { name: "Self-Awareness", desc: "The ability to recognize and understand your moods, emotions and drives, as well as their effect on others.", score: 3.0, mean: 7.4 },
  { name: "Self-Regulation", desc: "The ability to control or redirect disruptive impulses and moods and the propensity to suspend judgment and think before acting.", score: 5.5, mean: 7.2 },
  { name: "Motivation", desc: "A passion to work for reasons that go beyond money or status, and a propensity to pursue goals with energy and persistence.", score: 6.2, mean: 7.9 },
  { name: "Empathy", desc: "The ability to understand the emotional makeup of other people.", score: 4.7, mean: 7.5 },
  { name: "Social Skills", desc: "A proficiency in managing relationships and building networks.", score: 3.6, mean: 7.6 },
];

export const EQ_SCORING = [
  { name: "Intrapersonal", desc: "The ability to understand yourself and form an accurate concept of yourself to operate effectively in life.", score: 5.0, mean: 7.5 },
  { name: "Interpersonal", desc: "The ability to understand other people, what motivates others, how they work and how to work cooperatively with them.", score: 4.2, mean: 7.6 },
  { name: "Total Emotional Quotient", desc: "Your total level of emotional intelligence, formed by combining your intrapersonal and interpersonal scores.", score: 4.7, mean: 7.5 },
];

export const DISC_COLORS = {
  D: { bg: "bg-red-500", text: "text-red-600", border: "border-red-500", fill: "#EF4444" },
  I: { bg: "bg-yellow-500", text: "text-yellow-600", border: "border-yellow-500", fill: "#EAB308" },
  S: { bg: "bg-green-500", text: "text-green-600", border: "border-green-500", fill: "#22C55E" },
  C: { bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-500", fill: "#3B82F6" },
};
