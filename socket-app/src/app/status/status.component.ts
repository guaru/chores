import { Component, OnInit, Input } from '@angular/core';
import { StatusService } from '../service/status.service';
import { Observable, Subscription } from 'rxjs';
import { Status } from '../models/status';
import { Task } from '../models/task';
import { Tablero } from '../models/tablero';
import { User } from '../models/user';
import { ProjectUser } from '../models/projectUser';
import { TaskVO } from '../models/task-vo';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input('tablero') tablero:Tablero;
  @Input('users') users:ProjectUser[];
  @Input('status') status: Status[];
  private _stsSub: Subscription;
  private _stsSubChange: Subscription;
  private _stsSubLoadStatus : Subscription;
  constructor(private statusService:StatusService) { }

  ngOnInit() {
    this._stsSub =  this.statusService.newTask.pipe().subscribe(data=>{
        let task:Task =data;
        if(task.projectId === this.tablero.id)
          this.addTask(task);
    });
    
    this._stsSubChange = this.statusService.changeTask.pipe().subscribe(data=>{
        let taskvo:TaskVO =data;
        if(taskvo.task.projectId === this.tablero.id){
          if(taskvo.beforeStatusId === taskvo.task.statusId)
          {
           this.updateTask(taskvo.task);
          }else
          {
            let newStatusId =  taskvo.task.statusId;
            taskvo.task.statusId =  taskvo.beforeStatusId;
            this.removeTask(taskvo.task);
            taskvo.task.statusId =  newStatusId;
            this.addTask(taskvo.task);
          }
        } 
    });

    
  }




  addTask(task:Task)
  {
    this.status.find(x=>x.id === task.statusId).tasks.push(task);
  }

  updateTask(task:Task){
    let index = this.status.find(x=>x.id === task.statusId).tasks.findIndex(t=>t.id === task.id);
    this.status.find(x=>x.id === task.statusId).tasks[index] =  task;
  }

  removeTask(task:Task)
  {
    this.status.find(x=>x.id === task.statusId).tasks = 
    this.status.find(x=>x.id === task.statusId).tasks.filter(t=>t.id != task.id);
  }



  ngOnDestroy(){
    this._stsSub.unsubscribe();
    this._stsSubChange.unsubscribe();
  }


  editStatusTask(data){
     let task:Task =  data.task;
     const currentStatusId=task.statusId;
     let newStatusId:number=  data.statusId;
      this.status.forEach(s=>{
        if(s.id === newStatusId)
        {
            s.tasks.push(task);
        }
     });

     this.status.find(x=>x.id === currentStatusId).tasks =  
     this.status.find(x=>x.id === currentStatusId).tasks.filter(x=>x.id!=task.id);
  }
 
}
