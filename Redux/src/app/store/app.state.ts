export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface AppState {
  todos: Todo[];
}
