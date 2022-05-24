import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/model/user-app.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() userInfo!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
