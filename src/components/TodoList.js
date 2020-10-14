import React from 'react';
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = ({ todo, setTodo }) => {
  return (
    <div className="list-container">
      <ul className="todo-list">
        {todo.map((item) => (
          <Todo item={item} todo={todo} setTodo={setTodo} text={item.text} key={item.id}/>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;