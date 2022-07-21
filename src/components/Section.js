export default class Section {
    constructor ( {items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
        this._addItem = this.addItem;
    }

    renderItems (items, userId) {
        this._renderedItems = items;
        console.log(items);
        items.forEach(item => {
            this._renderer(item, userId);
            
          });
    }

    addItem (element) {
        this._container.append(element);
    };
}