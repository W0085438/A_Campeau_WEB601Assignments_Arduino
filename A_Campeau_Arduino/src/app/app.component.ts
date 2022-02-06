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
        imgURL: "https://cdn.shopify.com/s/files/1/0506/1689/3647/products/A000066_03.front_970c6014-61ab-4226-a20f-14cc6d8d682c_1000x750.jpg?v=1629816078",
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
