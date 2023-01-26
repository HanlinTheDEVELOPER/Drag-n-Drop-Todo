import React, { useRef, useState } from "react";
import { Action } from "../Reducer/TodoReducer";
import { Todo } from "../Types/interface";

interface Props {
  state: Todo[];
  dispatch: React.Dispatch<Action>;
}

const InputField: React.FC<Props> = ({ state, dispatch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todo, setTodo] = useState<string>("");

  return (
    <form
      className="input"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "Add", payload: todo });
        inputRef.current?.blur();
        setTodo("");
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter Task Name"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
