//import { Content } from "@angular/compiler/src/render3/r3_ast";
import { title } from "process";
import {Content} from "./content-interface"; 

export class ContentList {
    private _items: Content[];

    constructor(item: Content) {
        this._items = [];
        this._items[0] = item;
    }
    get items(): Content[]{
        return this._items;
    }
    addItems(item: Content) {
        return this._items.push();
    }

    numItems() {
        return this._items.length;
    }

    processContent(item: Content): string {
        return '<p>' + item.title + '</p>',
               '<p>' + item.description + '</p>',
               '<p>' + item.creator + '</p>',
               '<img>' + item.imgURL + '</>',
               '<p>' + item.type + '</p>'
    }
}