import { Todo } from "../Types/interface";

export type Action =
  | { type: "Add"; payload: string }
  | { type: "Remove"; payload: number }
  | { type: "Done"; payload: number };

export const initialState: Todo[] = [
  {
    id: 1,
    todo: "test",
    isDone: false,
  },
];

export const TodoReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case "Add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];

    case "Remove":
      return state.filter((todo) => todo.id !== action.payload);

    case "Done":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );

    default:
      return state;
  }
};

// const useTodoReducer = ()  => {
//   const [state: Todo[], dispatch : React.Dispatch<Action>]= useReducer(TodoReducer, initialState);

//   return [state, dispatch];
// };

// export default useTodoReducer;
