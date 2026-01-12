import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
    // @Input() name: string | undefined;

  isAddingTask = false;
  tasks = [
    { id: 't1',userId:'u1', title: 'Task One', summary: 'This is the first task.',dueDate:'2025-12-31' },
    { id: 't2',userId:'u2', title: 'Task Two', summary: 'This is the second task.',dueDate:'2025-12-31' },
    { id: 't3',userId:'u3', title: 'Task Three', summary: 'This is the third task.',dueDate:'2025-12-31' }
  ];

  get seelctedUserTasks() { 
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

}
