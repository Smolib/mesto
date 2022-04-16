import {Popup} from './Popup.js';

class PopupWithImage extends Popup {
  open (card) {
    const bigImage = this._popup.querySelector(".popup-big-image__image");
    const textImage = this._popup.querySelector(".popup-big-image__text");

    textImage.textContent = card._title;
    bigImage.src = card._link;
    bigImage.alt = card._title;

    super.open();
  }
}

export { PopupWithImage };
