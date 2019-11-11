import { Component, OnInit,Input, ViewChild, ElementRef } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../models/task';
import { StatusService } from '../service/status.service';
import { TaskService } from '../service/task.service';
import { TaskComment } from '../models/taskCommet';
import { IfStmt } from '@angular/compiler';
import {FILE_SIZE_UPLOAD,BASE_URL} from '../config';
import { TaskFile } from '../models/taskFile';
import { DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title = `Information`;
  @Input() task: Task;
  @Input('statusService') statusService:StatusService; 
  @ViewChild('inputFile') inputFile: ElementRef;
  taskComments : TaskComment[] = [];
  taskFiles : TaskFile []  = []
  comment:string = null;
  load:boolean = false;
  fileUpload:File = null;
  BASE_URL = BASE_URL;
  msg: any;

  constructor(
    public activeModal: NgbActiveModal,
    public taskService:TaskService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
      this.load = true;
       this.taskService.finComments(this.task.id).subscribe(data=>{
           this.taskComments = data.json();
           this.load = false;
       },error=> this.load = false);

       this.taskService.findFiles(this.task.id).subscribe(data=>{
          this.taskFiles =  data.json();
       });

       
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

  handleFileInput(files: FileList){
      this.fileUpload =  files.item(0);
  }
  
  onClickUploadFile(){
    if(this.fileUpload==null )
    {
      this.msg = "Debe seleccionar un archivo";
      return;
    }
    if( this.fileUpload.size > FILE_SIZE_UPLOAD )
    {
        this.msg = "El archivo no puede ser mayor a 15 MB";
        return;
    }
    this.taskService.uploadFile(this.fileUpload,this.task.id).subscribe(data=>{
       this.taskFiles =  data.json();
       this.fileUpload  = null;
       this.inputFile.nativeElement.value = null;
       this.statusService.notifyTask(this.task.id);
    });
  }


  onClickOpenFile(fileId:number){
       window.open(`${BASE_URL}api/task/download/${fileId}`);
  }

  transform(id:number) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${BASE_URL}api/task/file/${id}`);
  }
}
