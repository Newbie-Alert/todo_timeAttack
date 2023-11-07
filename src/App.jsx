import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Todolist from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header />
      <Input setTodos={setTodos} />
      <Todolist isActive={true} todos={todos} setTodos={setTodos} />
      <Todolist isActive={false} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
