import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Output() complete = new EventEmitter<string>();
  @Input({required: true}) task!: Task;

  onTaskComplete() {
    this.complete.emit(this.task.id);
  }
}
