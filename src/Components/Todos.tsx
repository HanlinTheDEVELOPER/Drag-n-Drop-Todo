import React from "react";
import { Todo } from "../Types/interface";
import SingleTodo from "./SingleTodo";
import { Action } from "../Reducer/TodoReducer";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos} dispatch={function (value: Action): void {
            throw new Error("Function not implemented.");
          } }        />
      ))}
    </div>
  );
};

export default Todos;
