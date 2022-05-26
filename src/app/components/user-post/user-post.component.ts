import { Component, Input, OnInit } from '@angular/core';
import { IComment, IPost, ITodos } from 'src/app/shared/model/user-app.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {

  @Input() post!: IPost;

  comments: IComment[] = [];
  isCommentVisible: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  getComments() {

    if(!this.isCommentVisible) {
      this.userService.getCommentsByPostId(this.post.id).subscribe((comments: IComment[]) => {
        this.comments = comments;
        this.isCommentVisible = true;
      });
    }
    else{
      this.isCommentVisible = false;
    }
  }
}
