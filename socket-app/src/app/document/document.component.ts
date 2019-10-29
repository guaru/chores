import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentService } from '../service/document.service';
import {UserService} from '../service/user.service';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Tablero } from '../models/tablero';
import { ProjectUser } from '../models/projectUser';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, OnDestroy {
  tablero: Tablero;
  users: ProjectUser[];
  private _docSub: Subscription;
  constructor(private documentService: DocumentService,private userService:UserService) { }

  ngOnInit() {
    this._docSub = this.documentService.currentDocument.pipe(
      startWith({ id: '', name: ''})
    ).subscribe((document:Tablero) => {
      this.tablero = document; 
      if(this.tablero.id){
        this.userService.findUsersByTablero(this.tablero.id).subscribe(data=>{
          this.users =  data.json();
        });
      }
    });
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }


  onChangeTablero(){
    this.editTablero();
  }

  editTablero() {
    this.documentService.editDocument(this.tablero);
  }

}