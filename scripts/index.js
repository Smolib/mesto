import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./initialCards.js";
import { argsValidation } from "./argsValidation.js";

// константы попапов
const popups = document.querySelectorAll(".popup");
let openedPopup;

// константы редактирования profile
const editButton = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector("#popup-edit-profile");
const profileForm = popupEditProfile.querySelector(".popup-form");
const nameInput = popupEditProfile.querySelector("input[name='name']");
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

// константы большого изображения
const popupBigImage = document.querySelector("#popup-big-image");
const bigImage = document.querySelector(".popup-big-image__image");
const textImage = document.querySelector(".popup-big-image__text");

// отображение popup-ов
const showPopup = (popupName) => {
  popupName.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEscape);
  openedPopup = popupName;
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
    if (openedPopup) closePopup(openedPopup);
    openedPopup = null;
  }
};

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__close-button")
    ) {
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

// открыть большое изображение

const openPopupImage = (card) => {
  showPopup(popupBigImage);
  textImage.textContent = card._title;
  bigImage.src = card._link;
  bigImage.alt = card._title;
};

// добавление начальных карточек

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, "#location");

  locations.append(card.generateCard());
});

// создание новых карточек

const addCard = (name, link) => {
  const card = new Card(name, link, "#location");
  locations.prepend(card.generateCard());
};

const handleAddCardSubmit = (evt) => {
  evt.preventDefault();
  addCard(imageTitleInput.value, imageLinkInput.value);
  closePopup(popupAddCard);
  addCardForm.reset();
};

popupAddCard.addEventListener("submit", handleAddCardSubmit);

// валидация форм

const setValidators = (args) => {
  const formList = Array.from(document.querySelectorAll(args.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(args, formElement);
    validator.enableValidation();
  });
};

setValidators(argsValidation);

export { openPopupImage };
