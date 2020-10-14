import React from 'react';
import Todo from "./Todo";

const TodoList = ({ todo }) => {
  return (
    <div className="list-container">
      <ul className="todo-list">
        <Todo />
      </ul>
    </div>
  );
}

export default TodoList;