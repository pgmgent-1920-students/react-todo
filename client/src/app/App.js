import React from 'react';

import { Header } from './components/layout';
import { TodoForm, TodoList } from './components/todo';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="">
        <TodoForm />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
