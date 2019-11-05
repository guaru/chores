import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Status } from '../models/status';
import { Task } from '../models/task';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import {BASE_URL} from '../config';
import { TaskVO } from '../models/task-vo';
@Injectable({
  providedIn: 'root'
})
export class StatusService {
   newTask =  this.socket.fromEvent<Task>('newTask');
   changeTask =  this.socket.fromEvent<TaskVO>('changeTask');
  constructor(private socket: Socket,private http:Http) { }
 

  getStatus(tableroId: number) {
    this.socket.emit('initStatus', tableroId);
  }
  findAllStatus(tableroId:number):Observable<Response>{
    return this.http.get(`${BASE_URL}api/tablero/${tableroId}/status`);
  }
  addTask(task:Task){
    this.socket.emit('addTask',task);
  }
  editTask(task:Task)
  {
    this.socket.emit('editTask',task);
  }

  
}
