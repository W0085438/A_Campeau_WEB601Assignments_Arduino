import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
@Output() newBoardEvent: EventEmitter<Content> = new EventEmitter<Content>();
newBoard?: Content;
  constructor() { }

  ngOnInit(): void {
  }

  createBoard(id:string, title:string, description:string, creator:string, imgURL:string, type:string, tags:string):void {
    this.newBoard = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(", ")
    };
    this.newBoardEvent.emit(this.newBoard);
  }

}
