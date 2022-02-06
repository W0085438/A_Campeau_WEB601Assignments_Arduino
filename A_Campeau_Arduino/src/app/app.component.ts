import { Component, Input } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'About Arduino (working title)';
  contentList: Content[];

  constructor(){
    this.contentList = [
      {
        id: 0,
        title: "UNO",
        description: "",
        creator: "",
        imgURL: "",
        type: "",
        tags: []      
      },
      {
        id: 0,
        title: "MEGA 2560",
        description: "",
        creator: "",
        imgURL: "",
        type: "",
        tags: []      
      },
      {
        id: 0,
        title: "DUE",
        description: "",
        creator: "",
        imgURL: "",
        type: "",
        tags: []      
      },
      {
        id: 0,
        title: "NANO",
        description: "",
        creator: "",
        imgURL: "",
        type: "",
        tags: []      
      },
      {
        id: 0,
        title: "LEONARDO",
        description: "",
        creator: "",
        imgURL: "",
        type: "",
        tags: []      
      },
    ]
  }
}
