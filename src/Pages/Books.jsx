import React from 'react';

const books = [
  {
    id: 1,
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDt_DCSLzJsdZgqqOu5BUrGNJL-8QClmTAr3EesT16yMYo1GAN',
    title: 'A Short History of Nearly Everything',
    description: 'A Short History of Nearly Everything by American-British author Bill Bryson is a popular science book that explains some areas of science, using easily accessible language that appeals more to the general public than many other books dedicated to the subject.',
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4WHB2cfH5WRRqGeYkHO4Ui_mimHhQIUVrwrapuFkqSw-KyZm',
    title: 'The Elegant Universe',
    description: 'The Elegant Universe: Superstrings, Hidden Dimensions, and the Quest for the Ultimate Theory is a book by Brian Greene published in 1999, which introduces string and superstring theory, and provides a comprehensive though non-technical assessment of the theory and some of its shortcomings.',
  },
  {
    id: 3,
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRq524vrSAtMWqPTW2ObynqjTDnzKGbNtxF06kQkdoJutK8tvc3',
    title: 'Love Triangle: The Life-changing Magic of Trigonometry',
    description: "Maths Practice Geometry Problem Daily Exercises in Angle Circle, Length of the Rectangles... to Improve Geometry Skills for Enjoyment and Challenge ( Maths Skills Series Activity Book ) A good one!",
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
