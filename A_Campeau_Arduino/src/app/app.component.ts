import { Component, Input, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { ArduinoServiceService } from './arduino-service.service';
import { MessageService } from './message.service';
import { boardList } from './helper-files/board-list'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'About Arduino (working title)';
  boardList: Content[];
  filteredBoard: Content[];


  constructor(private arduinoService: ArduinoServiceService, public messageService: MessageService){
    this.boardList = [];
    this.filteredBoard = [];
  }

  ngOnInit(): void {
    this.arduinoService.getBoardsObs().subscribe(boardArray => this.boardList = boardArray);
    this.arduinoService.getIndividualBoard(3).subscribe(individualBoard => this.filteredBoard = individualBoard);
  }

  getBoard(id: string) {
    let newId = parseInt(id);
    if(isNaN(newId)){
      return this.messageService.add(`A number between 0 and ${this.boardList.length - 1}`);
    } else {
      this.messageService.clear();
      return this.arduinoService.getIndividualBoard(newId).subscribe(individualBoard => this.filteredBoard = individualBoard);
    }
  }

}
