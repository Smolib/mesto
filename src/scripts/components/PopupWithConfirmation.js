import { PopupWithForm } from "./PopupWithForm.js";

class PopupWithConfirmation extends PopupWithForm {
  open(callback) {
    this._submitCallback = callback;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallback();
    });
  }
}

export { PopupWithConfirmation };
