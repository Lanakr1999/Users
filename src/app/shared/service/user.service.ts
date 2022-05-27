import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IUser, IPost, IComment, ITodos, IAlbums, IPhotos} from '../model/user-app.model';
import { Observable } from 'rxjs';

const URL_API = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${URL_API}/users`)
  }
  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${URL_API}/users/${id}`);
  }
  getPostsByUserId(id: number): Observable<IPost[]>{
    return this.http.get<IPost[]>(`${URL_API}/users/${id}/posts`);
  }
  getCommentsByPostId(id: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${URL_API}/post/${id}/comments`);
  }
  getTodosByUserId(id: number): Observable<ITodos[]> {
    return this.http.get<ITodos[]>(`${URL_API}/users/${id}/todos`);
  }
  getAlbumsByUserId(id: number): Observable<IAlbums[]> {
    return this.http.get<IAlbums[]>(`${URL_API}/users/${id}/albums`);
  }
  getPhotosByAlbumId(id: number): Observable<IPhotos[]> {
    return this.http.get<IPhotos[]>(`${URL_API}/albums/${id}/photos`);
  }
}
