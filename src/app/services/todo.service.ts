import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseURL = 'http://localhost:8080/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(private http: HttpClient ) { }

  getAllTodos(){

    this.http.get(baseURL.concat('/bmsbharathi'));
  }

  getTodoById(id){

    return this.http.get(baseURL.concat('/bmsbharathi/').concat(id));
  }

  addTodo(todo:Object){

    return this.http.post(baseURL.concat('/add'),todo);
  }


}
