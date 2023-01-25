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
    <div className="todos">
      {state.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={state}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default Todos;
