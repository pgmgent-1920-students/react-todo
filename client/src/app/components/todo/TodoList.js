import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = ({todos, completeTodo}) => {

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        {(!!todos && todos.length > 0)
        ? (
          <ul>
            {todos.map((todo) => <TodoListItem todo={todo} key={todo.id} completeTodo={(id, completed) => completeTodo(id, completed)} />)}
          </ul>
        )
        : (
          <p>No todo's</p>
        )
        }        
      </div>
    </div>
  );
};

export default TodoList;