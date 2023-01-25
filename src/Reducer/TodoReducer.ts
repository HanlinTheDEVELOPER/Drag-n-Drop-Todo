import { useReducer } from 'react';
import { Todo } from '../Types/interface';

export type Action = { type: 'Add'; payload: string } | { type: 'Remove'; payload: number } | { type: 'Done'; payload: number; }

const TodoReducer = (state: Todo[], action:Action) => {
    switch (action.type) {
        case 'Add':
            return [
                ...state,
                {id: Date.now(), todo: action.payload, isDone:false}
            ]
            break;
        case 'Remove':
            return state.filter(todo => todo.id !== action.payload)
            break;
        case 'Done':
            return state.map(todo => todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo)
            break;
        default:
            return state;
            break;
    }
}
const initialState: Todo[] = [];

const useTodoReducer = () => {
    const [state, dispatch] = useReducer(TodoReducer, initialState)

    return [state, dispatch];
}

export default useTodoReducer