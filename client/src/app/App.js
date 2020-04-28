import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/layout';
import { TodoForm, TodoList } from './components/todo';

import './App.css';

/* Todo Model
id: string (GUID)
message: string
completed: boolean
createdAt: number
modifiedAt: number
*/

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (message) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        message: message,
        completed: false,
        createdAt: new Date().getTime(),
        modifiedAt: null
      }
    ]);
  };

  return (
    <div className="app">
      <Header />
      <main className="">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos}  />
      </main>
    </div>
  );
}

export default App;
