import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTask } from '../types.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
    // @Input() name: string | undefined;

  // if dont want to share service instance across app
  // then create service instance here
  // private tasksService = new TasksService();
  isAddingTask = false;

  //if want to share service instance across app
  // then inject service via constructor
  constructor(private tasksService: TasksService){}

  get selectedUserTasks() {
    return this.tasksService.getTasksByUserId(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(newTask: NewTask) {
    this.tasksService.addTask(newTask, this.userId);
    this.isAddingTask = false;
  }
}
 