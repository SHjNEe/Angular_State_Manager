import { combineReducers } from "redux";
import { AppState, Todo } from "./app.state";

export const ADD_TODO = "ADD_TODO";

export function todoReducer(state: Todo[] = [], action: any): Todo[] {
  switch (action.type) {
    case ADD_TODO:
      const newTodo: Todo = {
        id: state.length + 1,
        text: action?.payload,
        completed: false,
      };
      return [...state, newTodo];
    default:
      return state;
  }
}

export const rootReducer = combineReducers<AppState>({
  todos: todoReducer,
});
