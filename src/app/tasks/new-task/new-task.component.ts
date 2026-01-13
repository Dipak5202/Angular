import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../types.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter();
  @Output() add = new EventEmitter<NewTask>();
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

  //  enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');

  onCancel() {
    this.cancel.emit();
  }

  OnSubmit(){
    const newTask: NewTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    };
    this.add.emit(newTask);
  }
}
