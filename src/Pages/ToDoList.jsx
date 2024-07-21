import React, { useState, useEffect } from 'react';

const ToDoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingText, setEditingText] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, id: Date.now() }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id) => {
    const todo = todos.find(todo => todo.id === id);
    setEditingTodo(todo);
    setEditingText(todo.text);
  };

  const handleSaveEdit = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: editingText } : todo)));
    setEditingTodo(null);
    setEditingText('');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">To Do List</h1>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 space-y-6">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-lg"
            placeholder="Add a new task"
          />
          <button
            onClick={handleAddTodo}
            className="bg-purple-700 text-white p-2 rounded-lg hover:bg-purple-800"
          >
            Add
          </button>
        </div>
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow">
              {editingTodo && editingTodo.id === todo.id ? (
                <div className="flex items-center space-x-4 flex-grow">
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded-lg"
                  />
                  <button
                    onClick={() => handleSaveEdit(todo.id)}
                    className="bg-green-700 text-white p-2 rounded-lg hover:bg-green-800"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <>
                  <span className="flex-grow">{todo.text}</span>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleEditTodo(todo.id)}
                      className="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="bg-red-700 text-white p-2 rounded-lg hover:bg-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoPage;
