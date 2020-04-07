import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  todos : any[] = [];
  todoItemInput : string = '';
  itemCounter : number = 0;
  index : number = 0;
  //error message handling
  flag = false;

  constructor() { }

  ngOnInit(): void {
    this.itemCounter = this.todos.length;
  }

  //adding a new todo 
  addTodo() {
    if(this.todoItemInput !== '') {
        this.todos.push({todoItem: this.todoItemInput, id: this.index+1});
        this.todoItemInput = '';
        this.index += 1;
        this.itemCounter = this.todos.length;
        this.flag = false;
      } else {
        this.flag = true;
      }
  }

  //deleting a todo 
  removeTodo(idNum) {
    this.todos.splice(idNum, 1);
    this.itemCounter = this.todos.length;
    this.flag = false;
  }

  //error message handler
  onKeydown(e) {
    this.flag = false;
  }
}
