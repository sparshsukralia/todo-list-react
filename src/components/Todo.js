import React from 'react';
import "./Todo.css";

const Todo = ({ text, item, todo, setTodo }) => {

  const deleteHandler = () => {
    setTodo(todo.filter(el => el.id !== item.id))
  }

  const checkHandler = () => {
    setTodo(todo.map(el => {
      if(el.id === item.id) {
        return {
          ...el, completed: !el.completed
        }
      }
      return el;
    }))
  }

  return(
    <div className="todo">
      <li className={`todo-item ${item.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={checkHandler} className="check-btn"><i className="fas fa-check"></i></button>
      <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
    </div>
  );
}

export default Todo;