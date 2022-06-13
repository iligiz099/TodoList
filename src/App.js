import React, { useState } from "react";
import './App.css';
import Form from "./components/Form.js";
import Todolist from "./components/Todolist.js";

function App() {
  const [inputText,setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <Todolist setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
