import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { GetAllTodosComponent } from './components/get-all-todos/get-all-todos.component';
import { GetTodoByIdComponent } from './components/get-todo-by-id/get-todo-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    GetAllTodosComponent,
    GetTodoByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
