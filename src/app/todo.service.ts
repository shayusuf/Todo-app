import { Injectable } from '@angular/core'
@Injectable({providedIn:'root'})
export class TodoService{
    TodoDetails = [];

    addTodo(id,date,title,description){
        this.TodoDetails.push({id,date,title,description})
    }
    deleteTodo(idd){
        this.TodoDetails.splice(idd,1);
    }
}