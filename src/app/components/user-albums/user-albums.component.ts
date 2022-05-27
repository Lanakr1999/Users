import {Component, Input, OnInit} from '@angular/core';
import {IAlbums, IPhotos} from "../../shared/model/user-app.model";
import {UserService} from "../../shared/service/user.service";

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss']
})
export class UserAlbumsComponent implements OnInit {

  @Input() album!: IAlbums;
  isPhotosVisible: boolean = false;
  photos: IPhotos[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getPhotos() {
    this.userService.getPhotosByAlbumId(this.album.id).subscribe((photos: IPhotos[]) => {
      this.photos = photos;
      this.isPhotosVisible = !this.isPhotosVisible;
    })
  }

}
