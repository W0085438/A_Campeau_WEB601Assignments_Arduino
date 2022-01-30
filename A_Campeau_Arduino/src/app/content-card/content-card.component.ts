//import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import {Content} from "../helper-files/content-interface";




@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
   
  constructor() {
    let uno: Content;
    let due: Content;
    let mega: Content;
    
    let boards: ContentList;
    boards = new ContentList(uno);

    ContentList.addItems() {
    uno = {
      id: 0,
      title: "UNO",
      description: "Entry level board",
      creator: "Arduino",
      imgURL: "",
      type: "Microcontroller"
    },
    due = {
      id: 0,
      title: "DUE",
      description: "Intermediate level board",
      creator: "Arduino",
      imgURL: "",
      type: "Microcontroller"
    },
    mega = {
      id: 0,
      title: "MEGA",
      description: "Entry level board with expanded IO",
      creator: "Arduino",
      imgURL: "",
      type: "Microcontroller"
    }
   }
  }
  ngOnInit(): void {
  }

}
