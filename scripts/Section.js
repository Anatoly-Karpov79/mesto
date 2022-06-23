export default class Section {
    constructor ( {data, renderer}, container) {
        this._renderedItems = data;
        this._renderer = renderer;
        this.container = document.querySelector('.elements');
    }

    renderItems () {
        this._renderedItems.forEach(item => {
            this._renderer(item);
          });
    }

    addItem (element) {
        this._container.append(element);
    }
}