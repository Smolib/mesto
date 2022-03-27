import { Card } from "./card.js";
import { FormValidator } from "./FormValidator.js";

// константа списка попапов
const popups = document.querySelectorAll(".popup");

// константы редактирования profile
const editButton = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector("#popup-edit-profile");
const profileForm = popupEditProfile.querySelector(".popup-form");
const nameInput = popupEditProfile.querySelector('input[name="name"]');
const nameText = document.querySelector(".profile__name");
const specialityInput = popupEditProfile.querySelector(
  'input[name="speciality"]'
);
const specialityText = document.querySelector(".profile__speciality");
const popupCloseButtons = document.querySelectorAll(".popup__close-button");

// константы добавления карточек
const locations = document.querySelector(".locations");
const locationTemplate = document
  .querySelector("#location")
  .content.querySelector(".location");
const addButton = document.querySelector(".profile__add-button");
const popupAddCard = document.querySelector("#popup-add-card");
const addCardForm = popupAddCard.querySelector(".popup-form");
const imageTitleInput = popupAddCard.querySelector('input[name="image-title"]');
const imageLinkInput = popupAddCard.querySelector('input[name="image-link"]');

// отображение popup-ов
const showPopup = (popupName) => {
  popupName.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEscape);
};

const showPopupEditProfile = () => {
  showPopup(popupEditProfile);
  nameInput.value = nameText.textContent;
  specialityInput.value = specialityText.textContent;
  profileForm.updateValidity();
};

const showPopupAddCard = () => {
  showPopup(popupAddCard);
  addCardForm.updateValidity();
};

editButton.addEventListener("click", showPopupEditProfile);
addButton.addEventListener("click", showPopupAddCard);

// закрытие popup-ов
const closePopup = (popupName) => {
  popupName.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEscape);
};

const closePopupByEscape = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
});

// редактирование профиля
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  nameText.textContent = nameInput.value;
  specialityText.textContent = specialityInput.value;
  closePopup(popupEditProfile);
};

popupEditProfile.addEventListener("submit", handleProfileFormSubmit);

// массив начальных карточек
const initialCards = [
  {
    name: "Карачаево-Черкесск",
    link: "./images/karachaevsk.jpg",
  },
  {
    name: "Гора Эльбрус",
    link: "./images/elbrus.jpg",
  },
  {
    name: "Домбай",
    link: "./images/dombay.jpg",
  },
  {
    name: "Уральские горы",
    link: "./images/ural.jpg",
  },
  {
    name: "Ключевская сопка",
    link: "./images/kluchevskoi.jpg",
  },
  {
    name: "Коштантау",
    link: "./images/koshtantau.jpg",
  },
];

// открыть большое изображение
const popupBigImage = document.querySelector("#popup-big-image");
const bigImage = document.querySelector(".popup-big-image__image");
const textImage = document.querySelector(".popup-big-image__text");

const handleImageClick = (card) => {
  showPopup(popupBigImage);
  textImage.textContent = card.title;
  bigImage.src = card.link;
  bigImage.alt = card.title;
};

// добавление начальных карточек

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, "location");

  locations.append(card.generateCard());
});

// создание новых карточек

const addCard = (name, link) => {
  const card = new Card(name, link, "location");
  locations.prepend(card.generateCard());
};

const handleAddCardSubmit = (evt) => {
  evt.preventDefault();
  addCard(imageTitleInput.value, imageLinkInput.value);
  closePopup(popupAddCard);
  addCardForm.reset();
};

popupAddCard.addEventListener("submit", handleAddCardSubmit);

// настройка валидации
const argsValidation = {
  formSelector: ".popup-form",
  inputSelector: ".popup-form__text-form",
  submitButtonSelector: ".popup-form__save-button",
  activeButtonClass: "popup-form__save-button_active",
  inputErrorClass: "popup-form__text-form_error",
  errorClass: "popup-form__error-message_active",
};

// валидация форм

const enableValidation = (args) => {
  const formList = Array.from(document.querySelectorAll(args.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(args, formElement);
    validator.enableValidation();
  });
};

enableValidation(argsValidation);
