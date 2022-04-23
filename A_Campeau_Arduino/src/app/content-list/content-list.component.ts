import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  @Input() contentItem: Content;
  constructor() {
    this.contentItem = {
      id: 0,
      title: "",
      description: "",
      creator: "",
      imgURL: "",
      type: "",
      tags: []
   }
  }
  ngOnInit(): void {
  }


  clicked(){
    if(this.contentItem != null){
      console.log(`Title: '${this.contentItem.title}' \nId: '${this.contentItem.id}'`);
    }
  }
}

