import {Popup} from './Popup.js';
class PopupWithForm extends Popup {
  constructor (selector, submitCallback) {
    super(selector);
    this._submitCallback = submitCallback;
  }

  _getInputValues () {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues (values) {
    this._inputList.forEach(input => {
      if (values[input.name] != undefined){
        input.value = values[input.name];
      }
    });
  }

  setEventListeners () {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
      this.close();
    });
  }

  close () {
    super.close();
    this._form.reset();
  }
}

export {PopupWithForm};
