import { TasksService } from './../services/tasks.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string = '' ;


  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  add(){
    const task: Task = ({name: this.newTask, created: new Date().toLocaleDateString(), isDone: false});
    this.tasksService.add(task);
    this.newTask = '';
  }

}
