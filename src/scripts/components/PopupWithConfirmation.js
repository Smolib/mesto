import { Popup } from "./Popup.js";

class PopupWithConfirmation extends Popup {
  open(callback) {
    this._submitCallback = callback;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallback();
      this.close();
    });
  }
}

export { PopupWithConfirmation };
