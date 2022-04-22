import { Component, Input } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'About Arduino (working title)';
  failureMsg = "";
  contentList: Content[];

  constructor(){
    this.contentList = [
      {
        id: 0,
        title: "UNO",
        description: "Entry level board",
        creator: "Arduino",
        imgURL: "https://cdn.shopify.com/s/files/1/0506/1689/3647/products/A000066_03.front_970c6014-61ab-4226-a20f-14cc6d8d682c_1000x750.jpg?v=1629816078",
        type: "Microcontroller",
        tags: ['electronics', 'project']      
      },
      {
        id: 1,
        title: "MEGA 2560",
        description: "Expanded IO board",
        creator: "Arduino",
        imgURL: "https://cdn.shopify.com/s/files/1/0506/1689/3647/products/A000067_00.front_1000x750.jpg?v=1637830354",
        type: "Microcontroller"    
      },
      {
        id: 2,
        title: "DUE",
        description: "Powerful, intermediate board",
        creator: "Arduino",
        imgURL: "https://cdn.shopify.com/s/files/1/0506/1689/3647/products/A000062_01.iso_c7d197dc-56b9-4e5e-80fd-6cdc44c007ae_1000x750.jpg?v=1637829938",
        tags: ['electronics', 'project']      
      },
      {
        id: 3,
        title: "NANO",
        description: "Small form factor",
        creator: "Arduino",
        imgURL: "https://cdn.shopify.com/s/files/1/0506/1689/3647/products/A000005_03.front_2c44e4db-5d01-45ec-9b14-78b6df214913_1000x750.jpg?v=1628695116",
        type: "Microcontroller",
        tags: ['electronics', 'project']      
      },
      {
        id: 4,
        title: "LEONARDO",
        description: "Improved connectivity",
        creator: "Arduino",
        imgURL: "https://cdn.shopify.com/s/files/1/0506/1689/3647/products/A000057_03.front_710x467.jpg?v=1626444500",
        type: "Microcontroller+",
        tags: ['electronics', 'project']      
      },
      {
        id: 5,
        title: "ZERO",
        description: "Intermediate board",
        creator: "Arduino",
        type: "Microcontroller"     
      },
      {
        id: 6,
        title: "ZERO II",
        description: "Intermediate board",
        creator: "Arduino",
        imgURL: "https://cdn.shopify.com/s/files/1/0506/1689/3647/products/ABX00003_03.front_92550441-6d96-4e50-9268-5718c39ce4d1_2130x1400.jpg?v=1627483216",
        type: "Microcontroller+",
        tags: ['electronics', 'project']      
      }
    ]
  }
  filter(cardTitle: string, contentList: Content[]): string {
    for(let item of contentList){
      if (cardTitle == item.title){
        return "There is an item with that title:";
      }
    }
        return "Sorry, there are no items with that title!";
  }

  addBoardToList(newBoardFromChild: Content) {
    console.log(this.failureMsg);
    let promise = new Promise((success, failure) => {
      if ((
        newBoardFromChild.id ||
        newBoardFromChild.title ||
        newBoardFromChild.description ||
        newBoardFromChild.creator != "")) {
          this.failureMsg = "";
          success(
            `A new Arduino board ahs been added with the following attributes:
              Title: ${newBoardFromChild.title},
              ID: ${newBoardFromChild.id},
              Description: ${newBoardFromChild.description},
              Creator: ${newBoardFromChild.creator},
              Image URL: ${newBoardFromChild.imgURL},
              Type: ${newBoardFromChild.type},
              Tags: ${newBoardFromChild.tags}`);
        } else {
          failure("An error has occurred while adding new board. PLease ensure that all fields have been filled in.");
          this.failureMsg = "An error has occurred while adding new board. PLease ensure that all fields have been filled in.";
        }
    });

    promise
      .then((successMsg) => console.log(successMsg))
      .catch((errorMsg) => this.failureMsg = errorMsg);

    if(this.failureMsg != "") {
      return;

    } else {
      console.log('Previous board list: ', this.contentList);
      this.contentList.push(newBoardFromChild);
      this.contentList = [...this.contentList];
      console.log("Board to be added to list: ", newBoardFromChild);
      console.log("New board list: ", this.contentList);
    }
  }
}
