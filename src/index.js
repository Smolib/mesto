import './index.css'
import { Card } from './scripts/components/Card.js'
import { FormValidator } from "./scripts/components/FormValidator.js";
import { initialCards } from "./scripts/utils/initialCards.js";
import { argsValidation } from "./scripts/utils/argsValidation.js";
import { Section } from './scripts/components/Section.js'
import { PopupWithImage } from './scripts/components/PopupWithImage.js'
import { PopupWithForm } from "./scripts/components/PopupWithForm.js";
import { UserInfo } from "./scripts/components/UserInfo.js";

// создание popup-ов
const userInfo = new UserInfo ('.profile__name', '.profile__speciality');

const popupBigImage = new PopupWithImage("#popup-big-image");

const popupAddCard = new PopupWithForm('#popup-add-card', ({'image-title': name, 'image-link': link}) => {
  defaultCardList.addItem({name:name, link:link});
});

const popupEditProfile = new PopupWithForm('#popup-edit-profile', ({name, speciality}) => {
  userInfo.setUserInfo({name, speciality});
});

// валидация форм

const formValidators = {}

const setValidators = (args) => {
  const formList = Array.from(document.querySelectorAll(args.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(args, formElement);
    const formName = formElement.getAttribute('name');

    formValidators[formName] = validator;

    validator.enableValidation();
  });
};

setValidators(argsValidation);

// обработчики событий на кнопках

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

editButton.addEventListener("click", () =>{
  popupEditProfile.setInputValues(userInfo.getUserInfo());

  formValidators['profile-form'].updateValidity();
  popupEditProfile.open();
});

addButton.addEventListener("click", () => {
  formValidators['card-form'].updateValidity();
  popupAddCard.open();
  }
);

// добавление начальных карточек
const createCard = (item) => {
  const card = new Card(item.name, item.link, "#location", popupBigImage.open.bind(popupBigImage));
  return card.generateCard();
}

const defaultCardList = new Section ({
  items: initialCards,
  renderer: (item) => {
    return createCard(item);
  }
}, '.locations');

defaultCardList.renderItems();
