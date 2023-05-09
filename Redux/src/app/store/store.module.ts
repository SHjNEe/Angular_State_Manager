import { NgModule } from "@angular/core";
import { NgRedux, NgReduxModule } from "@angular-redux/store";

import { rootReducer } from "./index";
import { AppState } from "./app.state";
@NgModule({
  imports: [NgReduxModule],
})
export class StoreModule {
  constructor(private ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(rootReducer, {} as AppState);
  }
}
