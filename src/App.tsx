/* eslint-disable @typescript-eslint/no-unused-vars */

import "./App.css";
import InputField from "./Components/InputField";
import Todos from "./Components/Todos";
import { useState, useReducer } from "react";
import { TodoReducer, initialState } from "./Reducer/TodoReducer";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Todo } from "./Types/interface";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const onDragEnd = (result: DropResult) => {
    console.log(result);
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (source.droppableId !== destination.droppableId)
      dispatch({ type: "Done", payload: Number(draggableId) });

    let add;

    // Source Logic
    if (source.droppableId === "TodosList") {
      add = state.filter((todo) => !todo.isDone)[source.index];
      state.filter((todo) => !todo.isDone).splice(source.index, 1);
    } else {
      add = state.filter((todo) => todo.isDone)[source.index];
      state.filter((todo) => todo.isDone).splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      state.filter((todo) => !todo.isDone).splice(destination.index, 0, add);
    } else {
      state.filter((todo) => todo.isDone).splice(destination.index, 0, add);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Yours Todo</span>
        <InputField state={state} dispatch={dispatch} />
        <Todos state={state} dispatch={dispatch} />
      </div>
    </DragDropContext>
  );
};

export default App;
