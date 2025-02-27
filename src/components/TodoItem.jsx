// src/components/TodoItem.js
import React from 'react';

function TodoItem({ todo, onRemoveTodo }) {
  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={() => onRemoveTodo(todo.id)}>Rimuovi</button>
    </li>
  );
}

export default TodoItem;