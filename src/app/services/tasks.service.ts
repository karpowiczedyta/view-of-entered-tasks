import { Task } from './../models/task';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import {} from 'rxjs/BehaviorSubject';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs";


@Injectable()
export class TasksService{



private tasksList: Array<Task> = [];
private tasksDone: Array<Task> = [];

private tasksListObs = new BehaviorSubject<Array<Task>>([]);
private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

constructor() {


  this.tasksList = [
    {name: 'Sprzatanie ', created: new Date().toLocaleDateString(), isDone: false},
    {name: 'Nauka Angulara', created: new Date().toLocaleDateString(), isDone: false},
    {name: 'Gotowanie', created: new Date().toLocaleDateString(), isDone: false},
    {name: 'Zakupy', created: new Date().toLocaleDateString(), isDone: false}
  ];
  this.tasksListObs.next(this.tasksList);

}

add(task: Task): void {
  this.tasksList.push(task);
  this.tasksListObs.next(this.tasksList);
}

remove(task: Task): void {
  this.tasksList = this.tasksList.filter(e => e !== task);
  this.tasksListObs.next(this.tasksList);
}

done(task: Task): void {
  this.tasksDone.push(task);
  this.remove(task);
  this.tasksDoneObs.next(this.tasksDone);
}

getTasksListObs(): Observable<Array<Task>>{
  return this.tasksListObs.asObservable();
}

getTasksDoneObs(): Observable<Array<Task>>{
  return this.tasksDoneObs.asObservable();
}

}
