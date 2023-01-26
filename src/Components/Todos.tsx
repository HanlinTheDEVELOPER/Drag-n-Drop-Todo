import React from "react";
import SingleTodo from "./SingleTodo";
import { Action } from "../Reducer/TodoReducer";
import { Todo } from "../Types/interface";

interface Props {
  state: Todo[];
  dispatch: React.Dispatch<Action>;
}

const Todos: React.FC<Props> = ({ state, dispatch }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>
        {state.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={state}
            dispatch={dispatch}
          />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>
        {state.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={state}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
