import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ArduinoServiceService } from '../arduino-service.service';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  @Output() newBoardEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateBoardEvent: EventEmitter<Content> = new EventEmitter<Content>();
  content?: Content;

  constructor(private arduinoService: ArduinoServiceService) { }

  ngOnInit(): void {
  }

  addBoard(title: string, desc: string, creator: string, imgurl: string, type: string, tags: string) {
    this.content = {
      title: title,
      description: desc,
      creator: creator,
      imgURL: imgurl,
      type: type,
      tags: tags.split(', ')
    }
    this.newBoardEvent.emit(this.content);
  }

  updateBoard(title: string, desc: string, creator: string, imgurl: string, type: string, tags: string) {
    this.content = {
      title: title,
      description: desc,
      creator: creator,
      imgURL: imgurl,
      type: type,
      tags: tags.split(',')
    }
    this.updateBoardEvent.emit(this.content);
  }

}
