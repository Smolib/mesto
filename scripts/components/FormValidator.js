class FormValidator {
  constructor(args, formElement) {
    this._inputSelector = args.inputSelector;
    this._activeButtonClass = args.activeButtonClass;
    this._inputErrorClass = args.inputErrorClass;
    this._errorClass = args.errorClass;
    this._formElement = formElement;

    this._buttonElement = this._formElement.querySelector(
      args.submitButtonSelector
    );
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );

    formElement.updateValidity = () => {
      this.updateValidity();
    };
  }

  _showError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.name}-error`
    );
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
    inputElement.classList.add(this._inputErrorClass);
  }

  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.name}-error`
    );
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
    inputElement.classList.remove(this._inputErrorClass);
  }

  _checkValidity(inputElement) {
    const isInputNotValid = !inputElement.validity.valid;
    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;
      this._showError(inputElement, errorMessage);
    } else {
      this._hideError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.setAttribute("disabled", true);
      this._buttonElement.classList.remove(this._activeButtonClass);
    } else {
      this._buttonElement.removeAttribute("disabled");
      this._buttonElement.classList.add(this._activeButtonClass);
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        this._checkValidity(inputElement);
        this._toggleButtonState();
      });
    });
    this._toggleButtonState();
  }

  updateValidity() {
    this._inputList.forEach((inputElement) => this._hideError(inputElement));
    this._toggleButtonState(this._inputList, this._buttonElement);
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export { FormValidator };
