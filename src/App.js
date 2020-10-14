import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";

function App() {

  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <div className="todo-container">
        <Form todo={todo} setTodo={setTodo} inputText={inputText} setInputText={setInputText} />
      </div>
    </div>               
  );
}

export default App;
