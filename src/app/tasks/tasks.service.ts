import { Injectable } from "@angular/core";
import { NewTask } from "../types.model";


@Injectable({
    providedIn: 'root' //service available application wide
})
export class TasksService {
    //Only accessible within this service
    private tasks = [
    { id: 't1',userId:'u1', title: 'Task One', summary: 'This is the first task.',dueDate:'2025-12-31' },
    { id: 't2',userId:'u2', title: 'Task Two', summary: 'This is the second task.',dueDate:'2025-12-31' },
    { id: 't3',userId:'u3', title: 'Task Three', summary: 'This is the third task.',dueDate:'2025-12-31' }
  ];

  getTasksByUserId(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(task: NewTask, userId: string) {
    const generatedId = 't' + (this.tasks.length + 1);
    const newTask = {
      id: generatedId,
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate
    };
    this.tasks.unshift(newTask);
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

}