import { Component, OnInit, EventEmitter, Output, Inject, Input, Optional } from '@angular/core';
import { ArduinoServiceService } from '../arduino-service.service';
import { Content } from '../helper-files/content-interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  @Output() newBoardEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateBoardEvent: EventEmitter<Content> = new EventEmitter<Content>();
  content?: Content;

  constructor(public dialog: MatDialog) { }
  data: any;
  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModifyContent, {
      width: '600px',
      height: '650px',
      data: {}
    });

    dialogRef.componentInstance.closed.subscribe(data => {
      this.addNewBoard(data);
    });
  }

  addNewBoard(data: Content) {
    console.log(data);
    this.content = {
      title: data.title,
      description: data.description,
      creator: data.creator,
      imgURL: data.imgURL,
      type: data.type,
      tags: data.tags
    }

    this.newBoardEvent.emit(this.content);
  }

  updateBoard(data: Content) {
    this.content = {
      title: data.title,
      description: data.description,
      creator: data.creator,
      imgURL: data.imgURL,
      type: data.type,
      tags: data.tags
    }
    this.updateBoardEvent.emit(this.content);
  }
}

@Component({
  selector: 'modify-content',
  templateUrl: './modify-content.html',
  styleUrls: ['./modify-content-component.scss']
})
export class ModifyContent {
  closed = new EventEmitter();
  content?: Content;
  constructor(public dialogRef: MatDialogRef<ModifyContent>, @Inject(MAT_DIALOG_DATA) public data: Content) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  newHobby(title: string, desc: string, creator: string, imgurl: string, type: string, tags: string) {
    this.content = {
      title: title,
      description: desc,
      creator: creator,
      imgURL: imgurl,
      type: type,
      tags: tags.split(",")
    }

    this.dialogRef.close(this.content);
    this.dialogRef.afterClosed().subscribe(data => {
      this.data = data;
      this.closed.emit(this.data);
      console.log(this.data);
    });
  }

  

}
