import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserItemComponent } from './components/user-item/user-item.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserPostComponent } from './components/user-post/user-post.component';

import { PostCommentsComponent } from './components/user-post/post-comments/post-comments.component';
import { PostTodosComponent } from './components/post-todos/post-todos.component';

import { UserAlbumsComponent } from './components/user-albums/user-albums.component';
import { UserPhotosComponent } from './components/user-albums/user-photos/user-photos.component';



@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserInfoComponent,
    UserPostComponent,
    PostCommentsComponent,
    PostTodosComponent,
    UserAlbumsComponent,
    UserPhotosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
