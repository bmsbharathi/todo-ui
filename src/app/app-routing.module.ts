import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAllTodosComponent } from './components/get-all-todos/get-all-todos.component'
import { GetTodoByIdComponent } from './components/get-todo-by-id/get-todo-by-id.component'
import { AddTodoComponent } from './components/add-todo/add-todo.component'

const routes: Routes = [
  {
    path: 'todo/:username/add',
    component: AddTodoComponent
  },
  {
    path: 'todo/:username/:id',
    component: GetTodoByIdComponent
  }
  ,
  {
    path: 'todo/:username',
    component: GetAllTodosComponent
  },
  {
    path: '',
    redirectTo: 'todo/:username',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
