import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App';
  users = DUMMY_USERS

  selectedUserId = 'u1';
  //handler for selected user event emitted from UserComponent (from child to parent)
  OnSelectedUser(userId: string) {
    this.selectedUserId = userId;
  }

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }
}
