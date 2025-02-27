// src/components/AddTodo.js
import React, { useState } from 'react';

function AddTodo({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      onAddTodo({ id: Date.now(), text: newTodo });
      setNewTodo('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Aggiungi una nuova attività"
      />
      <button onClick={handleAddTodo}>Aggiungi</button>
    </div>
  );
}

export default AddTodo;