import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {Tablero} from  '../models/tablero'
import { DocumentService } from '../service/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  tableros: Observable<Tablero[]>;
  currentDoc: number;
  private _docSub: Subscription;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.tableros = this.documentService.documents;
    this._docSub = this.documentService.currentDocument.subscribe(doc =>{ 
      this.currentDoc = doc.id ;
    });
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  loadTablero(id: string) {
    this.documentService.getDocument(id);
  }

  newTablero() {
    this.documentService.newDocument();
  }

}
