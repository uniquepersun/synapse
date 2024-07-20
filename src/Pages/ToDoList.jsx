import React, { useState, useEffect } from 'react';



const TodoListPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingText, setEditingText] = useState('');



  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index]);
  };

  const saveEdit = () => {
    const newTodos = todos.map((todo, i) => (i === editingIndex ? editingText : todo));
    setTodos(newTodos);
    setEditingIndex(-1);
    setEditingText('');
  };

  return (
    <div className="ml-4 p-4">
      <h2 className="text-2xl font-bold mb-4">To-do List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow border rounded px-2 py-1 mr-2"
          placeholder="Add new task"
        />
        <button onClick={addTodo} className="bg-purple-500 text-white px-4 py-2 rounded">Add</button>
      </div>
      <ul className="list-disc pl-5">
        {todos.map((todo, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="flex-grow border rounded px-2 py-1 mr-2"
                />
                <button onClick={saveEdit} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
              </>
            ) : (
              <>
                <span>{todo}</span>
                <div className="space-x-2">
                  <button onClick={() => editTodo(index)} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
                  <button onClick={() => deleteTodo(index)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListPage;
