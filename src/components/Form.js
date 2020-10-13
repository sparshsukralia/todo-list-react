import React from 'react';
import "./Form.css"

const Form = () => {

  const inputTextHandler = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="form-container">
      <h3>To-Dos</h3>
      <form className="form">
        <input onChange={inputTextHandler} type="text" className="todo-input" placeholder="New Todo..."/>
        <button className="todo-button"><h2>Add</h2></button>
      </form>
    </div>
  );
}

export default Form;