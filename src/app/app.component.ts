import { Component, OnInit } from '@angular/core';
import { IPost, IUser } from './shared/model/user-app.model';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  users: IUser[] = [];
  userInfo!: IUser;
  posts: IPost[] = []

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
    this.userService.getPostsByUserId(id).subscribe((posts: IPost[]) => {
      this.posts = posts;
    })
  }

}
