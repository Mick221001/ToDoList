import React, { useState } from 'react';

function AddTodo({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    const trimmed = newTodo.trim();
    if (trimmed) {
      onAddTodo({ id: Date.now(), text: trimmed });
      setNewTodo('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Aggiungi una nuova attività"
      />
      <button onClick={handleAddTodo}>Aggiungi</button>
    </div>
  );
}

export default AddTodo;
