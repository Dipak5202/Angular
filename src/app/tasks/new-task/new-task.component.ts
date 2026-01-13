import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../types.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter();
  @Input({required: true}) userId!: string;
  /*-- Two way binding --
    for getting user input from form fields
    binding input fields to these properties

  [(ngModel)]="enteredTitle"
  [(ngModel)]="enteredSummary"
  [(ngModel)]="enteredDueDate"
  */
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  // inject TasksService
  //alternative to constructor injection
  private tasksService = inject(TasksService);

  //  enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');

  onCancel() {
    this.close.emit();
  }

  OnSubmit(){
    const newTask: NewTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    };
    this.tasksService.addTask(newTask, this.userId);
    this.close.emit();
  }
}
