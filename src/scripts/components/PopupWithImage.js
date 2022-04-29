import { Popup } from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._bigImage = this._popup.querySelector(".popup-big-image__image");
    this._textImage = this._popup.querySelector(".popup-big-image__text");
  }
  open(card) {
    this._textImage.textContent = card._name;
    this._bigImage.src = card._link;
    this._bigImage.alt = card._name;

    super.open();
  }
}

export { PopupWithImage };
