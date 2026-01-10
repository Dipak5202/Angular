import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App';
  users = DUMMY_USERS

  //handler for selected user event emitted from UserComponent (from child to parent)
  OnSelectedUser(userId: string) {
    console.log('Selected User Id : ', userId);
  }
}
