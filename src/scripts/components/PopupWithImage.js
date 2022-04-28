import { Popup } from "./Popup.js";

class PopupWithImage extends Popup {
  open(card) {
    this._textImage.textContent = card._title;
    this._bigImage.src = card._link;
    this._bigImage.alt = card._title;

    super.open();
  }
}

export { PopupWithImage };
