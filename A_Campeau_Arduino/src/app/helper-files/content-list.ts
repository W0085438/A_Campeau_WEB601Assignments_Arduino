//import { Content } from "@angular/compiler/src/render3/r3_ast";
import {Content} from "./content-interface"; 

export class ContentList {
    private _items: Content[];

    constructor() {
        this._items = [];
        //this._items[0] = item;
    }
    get items(): Content[]{
        return this._items;
    }
    addItems() {
        return this._items.push;
    }
}