import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserPostComponent } from './components/user-post/user-post.component';



@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserInfoComponent,
    UserPostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
