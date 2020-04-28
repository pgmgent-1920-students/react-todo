import React from 'react';
import classnames from 'classnames';

import './TodoListItem.css';

const TodoListItem = ({todo, completeTodo}) => {
  return (
    <li className={classnames('todo-list__item', (todo.completed) ? 'todo-list__item--completed' : '')}>
      <h1>{todo.message}</h1>
      <span className="btn-complete" onClick={(ev) => completeTodo(todo.id, !todo.completed)}>C</span>
      <span className="btn-remove">D</span>
    </li>
  );
};

export default TodoListItem;