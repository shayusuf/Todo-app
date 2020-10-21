import { Component, OnInit } from '@angular/core';
import { TodoService} from '../todo.service';
@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  id:any;
  title:any;
  date:any;
  description:any;
  constructor(private todo_create_service: TodoService) { this.id = 0;}
  ngOnInit(): void {}
  addTodo(){
    this.id+=1;
    this.todo_create_service.addTodo(this.id,this.date,this.title,this.description);
  }
}
