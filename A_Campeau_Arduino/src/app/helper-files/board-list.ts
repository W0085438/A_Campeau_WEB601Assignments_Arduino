import { Content } from './content-interface';

export class boardList {
    static boardCount = 0;
    private _items: Content[];

    constructor(item: Content) {
        this._items = [];
        this._items[boardList.boardCount] = item;
        this.incrementCount();
    }

    get items(): Content[] {
        return this._items;
    }

    addItems(item: Content) {
        this._items.push(item);
    }

    getItemArrayLength(): number {
        return this._items.length;
    }

    incrementCount() {
        return ++boardList.boardCount;
    }

    getItemAt(itemIndex: number) {
        if(itemIndex > this._items.length - 1) {
            return `An error has occurred! The index ${itemIndex} is beyond the length of the array.`;
        } else {
            let item = this._items[itemIndex];
            let title = item.title;
            let description = item.description;
            let creator = item.creator;
            let imgURL = item.imgURL;
            let type = item.type;
            let tags = item.tags;
            let board =
                `
                    <div> Title: ${title} </div>
                    <div> Description: ${description} </div>
                    <div> Creator: ${creator} </div>
                    <div> Type: ${type} </div>
                    <div> Tags: ${[tags]}</div>
                    <img src="${imgURL}">
                `;

                return board;
        }

    }
}
