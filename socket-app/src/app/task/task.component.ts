import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Status } from '../models/status';
import { StatusService } from '../service/status.service';
import { Task } from '../models/task';
import { DocumentService } from '../service/document.service';
import { User } from '../models/user';
import { ProjectUser } from '../models/projectUser';
import { takeLast } from 'rxjs/operators';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  nameTask: string;
  @Input('status') status:Status;
  @Input('allstatus') allstatus:Status[];
  @Input('statusService') statusService:StatusService; 
  @Input('users') users:ProjectUser[];
  @Output('editStatusTask') editSatusTask = new EventEmitter();
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  
  }
  onClickAddTask(){
    if(this.nameTask!=''){
      this.statusService.addTask(new Task(null,this.nameTask,null,this.status,this.status.project));
      this.nameTask  =  null;
    }
  }

  onClickUpdateStatus(task:Task,statusId:number){
    task.statusId = statusId;
    this.statusService.editTask(task);
    this.editSatusTask.emit({task:task,statusId:statusId});
  }


  onChangeEndDate(task:Task)
  {
    this.statusService.editTask(task);
  }

  onChangeUserReporta(task:Task,user:User)
  {
    task.owneruserId =  user.id;
    this.statusService.editTask(task);
  }

  onChangeUserAtiende(task:Task,user:User)
  {
    task.devuserId =  user.id;
    this.statusService.editTask(task);
  }

  onClickShowTask(task:Task){
     // const modalRef = this.modalService.open(ModalComponent);
     const modalRef = this.modalService.open(ModalComponent,{ size: 'lg' } );
     modalRef.componentInstance.title = 'TAREA';
     modalRef.componentInstance.task =  task;
     modalRef.componentInstance.statusService =  this.statusService;
  }

  

}
