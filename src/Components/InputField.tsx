import React, { useRef, useState } from "react";
import { Todo } from "../Types/interface";
import { Action } from "../Reducer/TodoReducer";
import useTodoReducer from '../Reducer/TodoReducer';

interface Props {
  state: Todo[];
  dispatch: React.Dispatch<Action>
}

const InputField: React.FC<Props> = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todo, setTodo] = useState<string>("");
  const [state,dispatch] = useTodoReducer()

  return (
    <form
      className="input"
      onSubmit={(e) => {
       dispatch({type: 'Add', payload: todo})
        inputRef.current?.blur();
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
