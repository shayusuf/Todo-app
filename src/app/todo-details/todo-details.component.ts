import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  TodoDetails:any;
  constructor(private todo_details_service: TodoService) { }
  ngOnInit(): void {
    this.TodoDetails = this.todo_details_service.TodoDetails;
  }
}
