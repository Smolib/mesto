class Popup {
  constructor (selector) {
    this._popup = document.querySelector(selector);
    this._handleEscCloseCallback = this._handleEscClose.bind(this);
    this.setEventListeners();
  }

  open () {
    this._popup.classList.add('popup_opened');
    document.addEventListener("keydown", this._handleEscCloseCallback);
  }

  close () {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscCloseCallback);
  }

  _handleEscClose (evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners () {
    this._popup.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup_opened") ||
        evt.target.classList.contains("popup__close-button")
      ) {
        this.close();
      }
    });
  }
}

export { Popup };
