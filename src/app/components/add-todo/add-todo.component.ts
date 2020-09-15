import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  todo = {
    note: 'Type your Note here',
    createdBy: 'bmsbharathi',
    isTrashed: false,
    isCompleted: false,
    createdTime: ''
  };
  submitted = false;

  saveTodo() {

    const newTodo = {
      note: this.todo.note,
      createdBy: this.todo.createdBy,
      isTrashed: this.todo.isTrashed,
      isCompleted: this.todo.isCompleted,
      createdTime: new Date().toUTCString()
    };


    this.todoService.addTodo(newTodo)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error)
        }

      );

  }

}
