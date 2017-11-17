import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { UserService } from './services/users.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './component/profile/profile.component';
import { RouterModule }   from '@angular/router';
import { PostComponent } from './component/post/post.component';
import { PostsService } from './services/posts.service';
import { AuthGuard } from './services/authguard.service';
import { AuthService } from './services/auth.service';
import { ProfilePhotoDirective } from './directives/profile-photo.directive';
import { SmallPhotoDirective } from './directives/small-photo.directive';
import { LikerComponent } from './component/liker/liker.component';
import { CapitalLetterPipe } from './pipes/capital-letter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    PostComponent,
    ProfilePhotoDirective,
    SmallPhotoDirective,
    LikerComponent,
    CapitalLetterPipe
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
        
      },
      {
        path: 'home',
        component: HomeComponent,
        children: [
          { path: '', redirectTo: 'posts', pathMatch: 'full' },
          { path: 'posts', component: PostComponent },
          { path: 'profile/:id', component: ProfileComponent }
        ]
        //canActivate: [AuthGuard]
      }/*,
      {
        path: 'profile/:id',
        component: ProfileComponent,
        //canActivate: [AuthGuard]
      },
      {
        path: 'posts',
        component: PostComponent,
        //canActivate: [AuthGuard]
      }     */ 
    ])
  ],
  providers: [UserService, PostsService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
