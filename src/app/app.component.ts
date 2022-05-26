import { Component, OnInit } from '@angular/core';
import { IPost, ITodos, IUser } from './shared/model/user-app.model';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  users: IUser[] = [];
  userInfo!: IUser;
  posts: IPost[] = [];
  todos: ITodos[] = [];
  isPostsActive: boolean = false;
  isTodosActive: boolean = false;
  isAlbumsActive: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(){
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe((users: IUser[]) => {
      this.users = users;
    })
  }

  getUserInfo(id: number) {
    this.userService.getUserById(id).subscribe((user: IUser) => {
      this.userInfo = user;
      this.posts = [];
    })
  }

  getPosts(id: number): void{
    if(!this.isPostsActive) {
      this.userService.getPostsByUserId(id).subscribe((posts: IPost[]) => {
        this.posts = posts;
        this.isPostsActive = true;
        this.isTodosActive = false;
        this.isAlbumsActive = false;
      });
    }
    else {
      this.isPostsActive = false;
      this.isTodosActive = false;
      this.isAlbumsActive = false;
    }
  }

  getTodos(id: number){
    if(!this.isTodosActive) {
      this.userService.getTodosByUserId(id).subscribe((todos: ITodos[]) => {
        this.todos = todos;
        this.isTodosActive = true;
        this.isPostsActive = false;
        this.isAlbumsActive = false;
      });
    }
    else{
      this.isPostsActive = false;
      this.isTodosActive = false;
      this.isAlbumsActive = false;
    }
  }

}
