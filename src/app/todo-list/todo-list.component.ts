import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  TodoDetails:any;
  yes_no:any;
  no_yes:any;
  constructor(private todo_list_service: TodoService) {
     this.yes_no = false;this.no_yes=true;}
  ngOnInit(): void {
    this.TodoDetails = this.todo_list_service.TodoDetails;
    this.yes_no = true;
    this.no_yes = false;
  }
  deleteTodo(idd){
    this.todo_list_service.deleteTodo(idd);
  }
}
