//валидация
const showError = (formElement, inputElement, errorMessage, args) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(args.errorClass);
  inputElement.classList.add(args.inputErrorClass);
};

const hideError = (formElement, inputElement, args) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  errorElement.textContent = "";
  errorElement.classList.remove(args.errorClass);
  inputElement.classList.remove(args.inputErrorClass);
};

const checkValidity = (formElement, inputElement, args) => {
  const isInputNotValid = !inputElement.validity.valid;
  if (isInputNotValid) {
    const errorMessage = inputElement.validationMessage;
    showError(formElement, inputElement, errorMessage, args);
  } else {
    hideError(formElement, inputElement, args);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, args) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.remove(args.activeButtonClass);
  } else {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.add(args.activeButtonClass);
  }
};

const setEventListeners = (formElement, args) => {
  const inputList = Array.from(
    formElement.querySelectorAll(args.inputSelector)
  );
  const buttonElement = formElement.querySelector(args.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", (evt) => {
      checkValidity(formElement, inputElement, args);
      toggleButtonState(inputList, buttonElement, args);
    });
  });
  toggleButtonState(inputList, buttonElement, args);

  formElement.updateValidity = () => {
    inputList.forEach((inputElement) =>
      checkValidity(formElement, inputElement, args)
    );
    toggleButtonState(inputList, buttonElement, args);
  };
};

const enableValidation = (args) => {
  const formList = Array.from(document.querySelectorAll(args.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, args);
  });
};
