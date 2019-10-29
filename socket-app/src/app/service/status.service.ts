import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Status } from '../models/status';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
   status =  this.socket.fromEvent<Status[]>('status');
  constructor(private socket: Socket) { }
 

  getStatus(tableroId: number) {
    this.socket.emit('getStatus', tableroId);
  }
  addTask(task:Task){
    this.socket.emit('addTask',task);
  }
  editTask(task:Task)
  {
    this.socket.emit('editTask',task);
  }
}
