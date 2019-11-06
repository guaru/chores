import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import {BASE_URL} from '../config';
import { TaskComment } from '../models/taskCommet';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:Http) { }
 
  createComment(taskComment: TaskComment): Observable<Response> {
    return this.http.post(`${BASE_URL}api/task/createComment`,taskComment);
  }

  finComments(taskId:number):Observable<Response>{
    return this.http.get(`${BASE_URL}api/task/findComments/${taskId}`);
  }

  deleteComment(commentId:number):Observable<Response>{
    return this.http.delete(`${BASE_URL}api/task/deleteComment/${commentId}`);
  }
   
}
