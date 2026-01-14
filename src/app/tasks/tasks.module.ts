import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    // not standalone, we need to declare it here
    declarations: [TasksComponent,TaskComponent,NewTaskComponent],
    // export the component so it can be used in other modules
    exports: [TasksComponent],
    imports: [CommonModule,FormsModule],
})
export class TasksModule {}