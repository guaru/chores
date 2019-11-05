import { Component, OnInit,Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../models/task';
import { StatusService } from '../service/status.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title = `Information`;
  @Input() task: Task;
  @Input('statusService') statusService:StatusService; 
  constructor(
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
  }

  onChangeUpdateTask(){
    this.statusService.editTask(this.task);
  }
}
