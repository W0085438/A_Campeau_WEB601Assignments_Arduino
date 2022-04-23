import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { BOARDLIST } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService{

  constructor() { }

  createDb() {
    const boardList: Content[] = BOARDLIST;
    return {boardList}; 
  }

  genId(boards: Content[]): number {
    return boards.length > 0 ?
    Math.max(...boards.map(c => c.id ?? 0)) + 1 : 2000;
  }
}


