import React from 'react';

const books = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    title: 'Book Title 1',
    description: 'This is a description of book 1.',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    title: 'Book Title 2',
    description: 'This is a description of book 2.',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    title: 'Book Title 3',
    description: 'This is a description of book 3.',
  },
];

const Books = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map(book => (
          <div key={book.id} className="p-4 bg-white shadow rounded hover:shadow-xl duration-150">
            <img src={book.image} alt={book.title} className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-4">{book.description}</p>
            <button className="px-4 py-2 bg-purple-700 text-white rounded">Read</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
