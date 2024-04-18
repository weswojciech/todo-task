import './App.css';

import { useState } from 'react';

import { AddTask } from './components/AddTask';
import { TodosList } from './components/TodosList';

function App() {
  const [todos, setTodos] = useState([ {title: 'dupa', completed: false, id: '1'} ]);

  const addTodo = (title) => {
    const generateId = () => {
      return Math.floor(Math.random() * 2137);
    }
    const newTodo = {
      title,
      completed: false,
      id: generateId(),
    }

    setTodos(prev => (
      [...prev,
        newTodo]
    ))
  };

  const handleCompletion = (id) => {
    setTodos(prevTodos => {
      return prevTodos.map(task =>
        task.id === id ? { ...task, completed: true } : task
      );
    });
  }; 
  
  const handleDelete = (id) => {
    setTodos(prevTodos => {
      return prevTodos.filter(task => task.id !== id)
    });
  };

  return (
    <div className="App">
      <AddTask addTodo={addTodo} />
      <TodosList
        todos={todos}
        handleCompletion={handleCompletion}
        handleDelete={handleDelete} 
        />
    </div>
  );
}

export default App;
