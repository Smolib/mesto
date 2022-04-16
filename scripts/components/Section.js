class Section {
  constructor ({items, renderer}, selectorOfContainer) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selectorOfContainer);
  }

  renderItems () {
    this._items.forEach(item => {
      this._container.prepend(this._renderer(item));
    });
  }

  addItem(item) {
    this._container.prepend(this._renderer(item));
  }
}

export { Section };
