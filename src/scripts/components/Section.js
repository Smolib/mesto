class Section {
  constructor(renderer, selectorOfContainer) {
    this._renderer = renderer;
    this._container = document.querySelector(selectorOfContainer);
  }

  addItems(items) {
    items.forEach((item) => {
      this._container.append(this._renderer(item));
    });
  }

  addItem(item) {
    this._container.prepend(this._renderer(item));
  }
}

export { Section };
