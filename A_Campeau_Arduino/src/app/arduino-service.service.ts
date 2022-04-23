import { Injectable } from '@angular/core';
import { BOARDLIST } from './helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArduinoServiceService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) {}
    
  getBoards(): Observable<Content[]> {
    console.log("Loading content...");
    return this.http.get<Content[]>("api/boardList");
  }
   
  addBoard(newContentItem: Content): Observable<Content> {
    console.log("Added new board.");
    this.messageService.add(`New board added successfully.`);
    return this.http.post<Content>("api/boardList", newContentItem, this.httpOptions);
  }

  updateBoard(contentItem: Content): Observable<any>{
    return this.http.put("api/boardList", contentItem, this.httpOptions);
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
