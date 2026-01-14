import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { TaskComponent } from "./tasks/task/task.component";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    // since AppComponent is not standalone, we need to declare it here
    declarations: [AppComponent,HeaderComponent,UserComponent],
    // root component to bootstrap
    bootstrap: [AppComponent],
    // import standalone components here
    imports: [BrowserModule,TasksModule],
}) 
export class AppModule { }