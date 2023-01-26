import { Todo } from "../Types/interface";
import { AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { Action } from "../Reducer/TodoReducer";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  todo: Todo;
  index: number;
  dispatch: React.Dispatch<Action>;
};

const SingleTodo: React.FC<Props> = ({ todo, dispatch, index }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [editMode, setEditMode] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  useEffect(() => {
    inputRef.current?.focus();
  }, [editMode]);

  const handleDone = (id: number) => {
    dispatch({ type: "Done", payload: id });
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    dispatch({ type: "Edit", payload: { id, data: editTodo } });
    setEditMode(false);
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "Remove", payload: id });
  };
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          className="todos__single"
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {editMode && !todo.isDone ? (
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
      )}
    </Draggable>
  );
};

export default SingleTodo;
