import React from "react";
import SingleTodo from "./SingleTodo";
import { Action } from "../Reducer/TodoReducer";
import { Todo } from "../Types/interface";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  state: Todo[];

  dispatch: React.Dispatch<Action>;
}

const Todos: React.FC<Props> = ({ state, dispatch }) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos  ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {state
              .filter((todo) => !todo.isDone)
              .map((todo, index) => (
                <SingleTodo
                  index={index}
                  key={todo.id}
                  todo={todo}
                  dispatch={dispatch}
                />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="CompletedList">
        {(provided, snapshot) => (
          <div
            className={`todos remove ${
              snapshot.isDraggingOver ? "dragcomplete" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>
            {state
              .filter((todo) => todo.isDone)
              .map((todo, index) => (
                <SingleTodo
                  index={index}
                  key={todo.id}
                  todo={todo}
                  dispatch={dispatch}
                />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Todos;
