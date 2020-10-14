import React from 'react';
import "./Form.css"

const Form = ({ inputText, setInputText, todo, setTodo }) => {

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todo, {text: inputText, id: Math.random() * 1000, completed: false}
    ]);
    setInputText("");
  }

  return (
    <div className="form-container">
      <h3>To-Dos</h3>
      <form className="form">
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="New Todo..."/>
        <button className="todo-button" onClick={submitHandler}><h2>Add</h2></button>
      </form>
    </div>
  );
}

export default Form;