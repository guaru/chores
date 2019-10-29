import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Tablero } from '../models/tablero';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  currentDocument = this.socket.fromEvent<Tablero>('tablero');
  documents = this.socket.fromEvent<Tablero[]>('tableros');

  constructor(private socket: Socket) { }

  getDocument(id: string) {
    this.socket.emit('getTablero', id);
  }

  newDocument() {
    this.socket.emit('addTablero', { id: 0, name: 'NUEVO TABLERO'});
  }

  editDocument(document: Tablero) {
    this.socket.emit('editTablero', document);
  }


}