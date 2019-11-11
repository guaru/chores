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

  uploadFile(fileToUpload: File,taskId:Number): Observable<Response> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(`${BASE_URL}api/task/upload-file/${taskId}`, formData);
 }
   
 findFiles(taskId:number):Observable<Response>{
  return this.http.get(`${BASE_URL}api/task/findFiles/${taskId}`);
 }

 download(fileId:number){
  return this.http.get(`${BASE_URL}api/task/download/${fileId}`);
 }

}
