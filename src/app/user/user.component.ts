import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

    /**
   * @Input decorator to receive data from parent component  (Parent to child communication)
   * required: true  --> to make input property mandatory to be provided by parent component
  */
  @Input({required: true}) user!:User
  @Input({required: true}) selected!:boolean

  /*
    - EventEmitter
    * @Output decorator to send data to parent component (Child to Parent communication)
    - EventEmitter is used to emit events from child component to parent component
    - creating own custom event
  */
  @Output() select = new EventEmitter<string>();

  //On click this method will be called
  onSelectedUser() {
    //emitting event to parent component
    // sendng id of selected user to parent component
    this.select.emit(this.user.id);
  }
  get imagePath() {
    //to get data from signal
    return 'assets/users/' + this.user.avatar;
  }

  //======================================== Traditional Input and Output Property ===================================================
  // /**
  //  * @Input decorator to receive data from parent component  (Parent to child communication)
  //  * required: true  --> to make input property mandatory to be provided by parent component
  // */
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // /*
  //   - EventEmitter
  //   * @Output decorator to send data to parent component (Child to Parent communication)
  //   - EventEmitter is used to emit events from child component to parent component
  //   - creating own custom event
  // */
  // @Output() select = new EventEmitter<string>();

  // //On click this method will be called
  // onSelectedUser() {
  //   //emitting event to parent component
  //   // sendng id of selected user to parent component
  //   this.select.emit(this.id);
  // }
  // get imagePath() {
  //   //to get data from signal
  //   return 'assets/users/' + this.avatar;
  // }


  //======================================== Signal as Output Property ===================================================

  // select = output<string>();

  //======================================== Signal as Input property ===================================================
  /* 
    - - - - -  Using signal as Input property - - - -
    required: true  --> to make input property mandatory to be provided by parent component
    when we use signal as Input property, we have to call it as a function to get its value
        Ex : this.avatar() instead of this.avatar in compponent class
             avatar() instead of avatar in template
    Whene ever using signal as Input property, you can not able to use Set() method to update its value
  */
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 'assets/users/' + this.avatar());
  
  //===================================== Signal and computed ======================================================
  //
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // //Computed
  // /* 

  //   when we have to derive a value from one or more signals, we can use computed. 
  //   It automatically tracks the signals used inside it and updates whenever any of those signals change.
  // */
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // //getter
  // // get imagePath() {
  // //   //to get data from signal
  // //   return 'assets/users/' + this.selectedUser().avatar;
  // // }

  // onSelectedUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   //setting data to signal / changing value of signal
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
}
