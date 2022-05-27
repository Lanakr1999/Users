import {Component, Input, OnInit} from '@angular/core';
import {IPhotos} from "../../../shared/model/user-app.model";

@Component({
  selector: 'app-user-photos',
  templateUrl: './user-photos.component.html',
  styleUrls: ['./user-photos.component.scss']
})
export class UserPhotosComponent implements OnInit {


  @Input() photo!: IPhotos;
  constructor() { }

  ngOnInit(): void {
  }

}
