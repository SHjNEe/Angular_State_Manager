import { ADD_TODO } from "../config";

export function addTodoAction(todo) {
  return { type: ADD_TODO, payload: todo };
}
