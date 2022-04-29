import { Popup } from "./Popup.js";
class PopupWithForm extends Popup {
  constructor(selector, submitCallback) {
    super(selector);
    this._submitCallback = submitCallback;
    this._inputList = this._popup.querySelectorAll(".popup-form__text-form");
    this._submitButton = this._popup.querySelector(".popup-form__save-button");
    this._submitButtonInitialText = this._submitButton.textContent;
  }

  getSubmitButton() {
    return this._submitButton;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(values) {
    this._inputList.forEach((input) => {
      if (values[input.name] != undefined) {
        input.value = values[input.name];
      }
    });
  }

  renderLoading(isLoading, buttonText='Сохранение...') {
    if(isLoading) {
      this._submitButton.textContent = buttonText;
    } else {
      this._submitButton.textContent = this._submitButtonInitialText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form = this._popup.querySelector(".popup-form");

    this._form.addEventListener('submit', () => {
      this._submitCallback(this, this._getInputValues())
      .then(() => this.close())
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}

export { PopupWithForm };
