import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { boardList } from '../helper-files/board-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService{

  constructor() { }

  createDb() {
    const boardsList: Content[] = boardList;
    return {boardList}; 
  }

  genId(boards: Content[]): number {
    return boards.length > 0 ?
    Math.max(...boards.map(c => c.id ?? 0)) + 1 : 2000;
  }
}


