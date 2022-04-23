import { Injectable } from '@angular/core';
import { BOARDLIST } from './helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class ArduinoServiceService {

  constructor(private messageService: MessageService) {

   }

   getBoardsObs(): Observable<Content[]> {
     this.messageService.add('Content Array Loaded!');
     return of (BOARDLIST);
   }

   getIndividualBoard(id: number):Observable<Content[]> {
    let board = BOARDLIST.filter(board => board.id == id);
    this.messageService.add(`Content item at id: ${id} has been loaded.`);
    return of (board);
   }
}
