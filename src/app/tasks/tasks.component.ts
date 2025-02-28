import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name! : string;
  @Input({required:true}) userid! : string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}
  
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userid);
  }

  onCompleteTask(id: string) {
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }


}
