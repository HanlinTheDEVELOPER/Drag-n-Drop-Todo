import { Todo } from "../Types/interface";
import { AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [editMode, setEditMode] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  useEffect(() => {
    inputRef.current?.focus();
  }, [editMode]);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEditMode(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {editMode ? (
        <input
          ref={inputRef}
          value={editTodo}
          className="todos__single--text"
          type="text"
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span className="icon">
          <AiFillEdit onClick={() => setEditMode(true)} />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <FaTrash />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
