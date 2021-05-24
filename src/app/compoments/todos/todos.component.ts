import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

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

}
