//import { Content } from "@angular/compiler/src/render3/r3_ast";
import {Content} from "./content-interface"; 

export class ContentList {
    private _items: Content[];
    static itemCount = 0;

    constructor() {
        this._items = [];
    }
    get items(): Content[]{
        return this._items;
    }
    increaseCount() {
        return ++ContentList.itemCount;
    }
}