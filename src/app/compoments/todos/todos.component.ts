import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {
        content: 'first todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: true
      }
    ]
  }

  toggleDone(id: number) {
    this.todos.map((elem,index)=>{
      if (index == id) elem.completed = !elem.completed; 
      //this loops for the task with id and changes status when found
      return elem;
    })
  }

  deleteToDo(id: number){
    this.todos = this.todos.filter((elem, index)=> index !== id);
    //this returns all but the one that matches
  }

  addToDo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo='';//clear input from form
  }

}
