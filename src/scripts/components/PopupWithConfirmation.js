import { PopupWithForm } from "./PopupWithForm.js";

class PopupWithConfirmation extends PopupWithForm {

   constructor(selector) {
    super(selector, ()=>this._onSubmit());
  }

  _onSubmit () {
    return this._submitCallbackConfirmation()
  }

  open(callback) {
    this._submitCallbackConfirmation = callback;
    super.open();
  }

}

export { PopupWithConfirmation };
