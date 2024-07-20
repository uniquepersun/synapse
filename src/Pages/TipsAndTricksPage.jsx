import React from 'react';

const tips = [
  {
    id: 1,
    title: 'Tip 1: Organize Your Workspace',
    description: 'Keeping your workspace clean and organized can help increase productivity and reduce stress.',
  },
  {
    id: 2,
    title: 'Tip 2: Take Regular Breaks',
    description: 'Taking regular breaks can help refresh your mind and prevent burnout. Try the Pomodoro technique: work for 25 minutes, then take a 5-minute break.',
  },
  {
    id: 3,
    title: 'Tip 3: Stay Hydrated',
    description: 'Drinking enough water throughout the day can help you stay focused and energized. Aim for at least 8 glasses of water a day.',
  },
];

const TipsPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">Tips and Tricks</h1>


      <div className="max-w-2xl mx-auto space-y-8">
        {tips.map(tip => (
          <div key={tip.id} className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{tip.title}</h2>
            <p className="text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsPage;
