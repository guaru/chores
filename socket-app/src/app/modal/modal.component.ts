import { Component, OnInit,Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../models/task';
import { StatusService } from '../service/status.service';
import { TaskService } from '../service/task.service';
import { TaskComment } from '../models/taskCommet';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title = `Information`;
  @Input() task: Task;
  @Input('statusService') statusService:StatusService; 
  taskComments : TaskComment[] = [];
  comment:string = null;
  load:boolean = false;
  constructor(
    public activeModal: NgbActiveModal,
    public taskService:TaskService
  ) {}

  ngOnInit() {
      this.load = true;
       this.taskService.finComments(this.task.id).subscribe(data=>{
           this.taskComments = data.json();
           this.load = false;
       },error=> this.load = false);
  }

  onChangeUpdateTask(){
    this.statusService.editTask(this.task);
  }

  addComment(){
    if(this.comment != null && this.comment.trim() !=''){
      let taskComment =  new TaskComment(null,this.comment,null,this.task.id);
      this.taskService.createComment(taskComment).subscribe(data=>{
         this.comment = null;
          this.taskComments = data.json();
          this.statusService.notifyTask(this.task.id);
      });
    }
  }


  deleteComment(taskComment: TaskComment){
      this.taskService.deleteComment(taskComment.id).subscribe(data=>{
          this.taskComments =  this.taskComments.filter(x=>x.id != taskComment.id);
          this.statusService.notifyTask(this.task.id);
      });
  }
  
}
