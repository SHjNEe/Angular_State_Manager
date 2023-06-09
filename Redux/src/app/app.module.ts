import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { AppRoutingModule } from "./app-routing.module";
import { StoreModule } from "./store/store.module";
import { NgReduxModule } from "@angular-redux/store/ng-redux.module";

@NgModule({
  declarations: [AppComponent, HomeComponent, UserComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
