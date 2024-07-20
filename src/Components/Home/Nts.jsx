import React, { useState } from 'react';

const ShowcasePage = () => {
  const [activeTab, setActiveTab] = useState('showcase');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderCards = () => {
    const cards = [
      { title: 'PROJECT X', description: 'Description of project, quick info etc', author: 'Abhay Gupta' },
      { title: 'PROJECT X', description: 'Description of project, quick info etc', author: 'Nikhil Mansotra' },
      { title: 'PROJECT X', description: 'Description of project, quick info etc', author: 'Mohit' }
    ];

    return cards.map((card, index) => (
      <div key={index} className="w-full md:w-1/3 p-2">
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
          <p className="text-gray-500 mt-2">By {card.author}</p>
          <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">View</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="ml-4 p-4">
      <div className="flex justify-between items-center mb-10">
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded ${activeTab === 'showcase' ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-700'}`}
            onClick={() => handleTabClick('showcase')}
          >
            Showcase
          </button>
        </div>
        <button className="bg-purple-500 text-white px-4 py-2 rounded">Post</button>
      </div>
      <div className="flex flex-wrap -mx-2">
        {renderCards()}
      </div>
    </div>
  );
};

export default ShowcasePage;
