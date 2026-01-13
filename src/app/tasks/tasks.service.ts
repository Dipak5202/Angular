
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
} 