import React from 'react';
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = ({ todo }) => {
  return (
    <div className="list-container">
      <ul className="todo-list">
        <Todo />
        <Todo />
        <Todo />
      </ul>
    </div>
  );
}

export default TodoList;