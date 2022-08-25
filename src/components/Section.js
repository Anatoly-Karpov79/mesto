export default class Section {
    constructor ( {items, renderer, userId}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
        this._addItem = this.addItem;
        this._userId = userId;
    }

    renderItems (items, userId) {
        this._renderedItems = items;
        items.forEach(item => {
            this._renderer(item, userId);
           
          });
    }

    addItem (element) {
        this._container.append(element);
    };
    addNewItem (element) {
        this._container.prepend(element);
     
    };

}