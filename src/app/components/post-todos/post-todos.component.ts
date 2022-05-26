import { Component, Input, OnInit } from '@angular/core';
import { ITodos } from 'src/app/shared/model/user-app.model';

@Component({
  selector: 'app-post-todos',
  templateUrl: './post-todos.component.html',
  styleUrls: ['./post-todos.component.scss']
})
export class PostTodosComponent implements OnInit {

  @Input() todo!: ITodos;
  constructor() { }


  ngOnInit(): void {
  }

  toogleTodo() {
    this.todo.completed = !this.todo.completed;
    console.log(this.todo.completed);
  }

}
