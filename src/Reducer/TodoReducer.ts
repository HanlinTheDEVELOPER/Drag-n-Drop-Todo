import { Todo } from "../Types/interface";

type EditData = {
  id: number;
  data: string;
};

export type Action =
  | { type: "Add"; payload: string }
  | { type: "Remove"; payload: number }
  | { type: "Done"; payload: number }
  | { type: "Edit"; payload: EditData }
  | { type: "Active" };

export const initialState: Todo[] = [
  {
    id: 1,
    todo: "test",
    isDone: true,
  },
  {
    id: 2,
    todo: "test 2 ",
    isDone: true,
  },
  {
    id: 3,
    todo: "test 3",
    isDone: true,
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

    case "Edit":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.data }
          : todo
      );

    case "Active":
      return state.filter((todo) => !todo.isDone);

    default:
      return state;
  }
};
