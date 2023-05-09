import { Component, OnInit } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { AppState, Todo } from "./store/app.state";
import { ADD_TODO } from "./store/config";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  todos: Todo[];
  newTodo: string = "";

  constructor(private ngRedux: NgRedux<AppState>) {}

  ngOnInit() {
    this.ngRedux
      .select<Todo[]>("todos")
      .subscribe((todos) => (this.todos = todos));
  }

  addTodo() {
    this.ngRedux.dispatch({ type: ADD_TODO, payload: this.newTodo });
    this.newTodo = "";
  }
}
