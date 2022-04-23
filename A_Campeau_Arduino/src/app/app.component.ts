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
    this.getBoards();
  }

  getBoards(): void {
    this.arduinoService.getBoardsObs().subscribe(boardArray => this.boardList = boardArray);
    this.arduinoService.getIndividualBoard(3).subscribe(individualBoard => this.filteredBoard = individualBoard);
  }

  addNewBoard(newBoardFromChild: Content): void {
    this.arduinoService.addBoard(newBoardFromChild).subscribe(newBoardFromServer => {
      console.log('New board from server', newBoardFromServer);
      this.boardList.push(newBoardFromServer);
      this.boardList = [...this.boardList];
    });
  }

  updateBoard(contentItem: Content): void {
    this.arduinoService.updateBoard(contentItem).subscribe(() => {
      console.log("Board has been updated");
      this.getBoards();
    })
  }

  getBoard(id: string) {
    let newId = parseInt(id);
    if(isNaN(newId)){
      return this.messageService.add(`Only a number will be accepted. A number between 0 and ${this.boardList.length - 1} must be entered.`);
    }
      if(newId < 0 || newId > this.boardList.length - 1) {
        return this.messageService.add(`A number between 0 and ${this.boardList.length - 1} must be entered.`);
    } else {
      this.messageService.clear();
      return this.arduinoService.getIndividualBoard(newId).subscribe(individualBoard => this.filteredBoard = individualBoard);
    }
  }

}
