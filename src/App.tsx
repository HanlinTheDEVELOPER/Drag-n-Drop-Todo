/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { Todo } from "./Types/interface";
import Todos from "./Components/Todos";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        todo,
        isDone: false,
      },
    ]);
    setTodo("");
  };

  return (
    <div className="App">
      <span className="heading">Yours Todo</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
