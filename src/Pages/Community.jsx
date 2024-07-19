import React from 'react';

const posts = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    title: 'Post Title 1',
    description: 'This is a description of post 1.',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    title: 'Post Title 2',
    description: 'This is a description of post 2.',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    title: 'Post Title 3',
    description: 'This is a description of post 3.',
  },
];

const Community = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Community</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="p-4 bg-white shadow rounded hover:shadow-xl duration-150">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-purple-700">
                <i className="fas fa-comment"></i>
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-purple-700">
                <i className="fas fa-thumbs-up"></i>
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-purple-700">
                <i className="fas fa-share"></i>
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
