import { Component, OnInit, Input } from '@angular/core';
import { StatusService } from '../service/status.service';
import { Observable, Subscription } from 'rxjs';
import { Status } from '../models/status';
import { Task } from '../models/task';
import { Tablero } from '../models/tablero';
import { User } from '../models/user';
import { ProjectUser } from '../models/projectUser';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input('tablero') tablero:Tablero;
  @Input('users') users:ProjectUser[];
  status: Status[];
  private _stsSub: Subscription;
  constructor(private statusService:StatusService) { }

  ngOnInit() {
    this._stsSub =  this.statusService.status.pipe().subscribe(data=>{
        this.status =  data;
        console.log('status',this.status);
    });
   
  }
  ngOnDestroy(){
    this._stsSub.unsubscribe();
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
