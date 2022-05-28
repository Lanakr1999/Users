import { Component, OnInit } from '@angular/core';
import {IAlbums, IPost, ITodos, IUser} from './shared/model/user-app.model';
import { UserService } from './shared/service/user.service';
import {ChangeButtonAnim, ShowUsersAnim} from "./animations/show-users-anim";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ShowUsersAnim, ChangeButtonAnim]
})
export class AppComponent implements OnInit{

  animationState: string = '';
  animationStateButton: string = 'show';
  animationStateTextColor: string = 'silver';

  buttonName: string = 'show users';
  users: IUser[] = [];
  userInfo!: IUser;
  posts: IPost[] = [];
  todos: ITodos[] = [];
  albums: IAlbums[] = [];

  isUsersListActive: boolean = false;
  isPostsActive: boolean = false;
  isTodosActive: boolean = false;
  isAlbumsActive: boolean = false;


  constructor(private userService: UserService) {
  }

  ngOnInit(){
    this.getUsers();
  }

  showUsers() {
    this.isUsersListActive = !this.isUsersListActive;
    this.buttonName = this.buttonName === 'show users' ? 'close users' : 'show users';
    this.animationState = this.animationState === 'out' ? '' : 'out';
    this.animationStateButton = this.animationStateButton === 'close' ? 'show' : 'close';
    this.animationStateTextColor = this.animationStateTextColor === 'black' ? 'silver' : 'black';
  }


  closeActive() {
    this.isPostsActive = false;
    this.isTodosActive = false;
    this.isAlbumsActive = false;
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
      this.closeActive();
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
      this.closeActive();
    }
  }

  getAlbums(id: number) {
    if(!this.isAlbumsActive) {
      this.userService.getAlbumsByUserId(id).subscribe((albums: IAlbums[]) => {
        this.albums = albums;
        this.isPostsActive = false;
        this.isTodosActive = false;
        this.isAlbumsActive = true;
      });
    }
    else {
      this.closeActive();
    }
  }
}
