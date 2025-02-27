// src/components/TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Lista delle Attività</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onRemoveTodo={handleRemoveTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;