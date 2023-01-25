/* eslint-disable @typescript-eslint/no-unused-vars */

import "./App.css";
import InputField from "./Components/InputField";
import Todos from "./Components/Todos";
import useState, { useReducer } from "react";
import { TodoReducer, initialState } from "./Reducer/TodoReducer";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <div className="App">
      <span className="heading">Yours Todo</span>
      <InputField state={state} dispatch={dispatch} />
      <Todos state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
