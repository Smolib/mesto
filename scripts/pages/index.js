import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { initialCards } from "../utils/initialCards.js";
import { argsValidation } from "../utils/argsValidation.js";
import { Section } from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

// создание popup-ов
const userInfo = new UserInfo ('.profile__name', '.profile__speciality');

const popupBigImage = new PopupWithImage("#popup-big-image");

const popupAddCard = new PopupWithForm('#popup-add-card', ({'image-title': name, 'image-link': link}) => {
  defaultCardList.addItem({name:name, link:link});
});

const popupEditProfile = new PopupWithForm('#popup-edit-profile', ({name, speciality}) => {
  userInfo.setUserInfo({name, speciality});
});

// обработчики событий на кнопках
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

editButton.addEventListener("click", () =>{
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  popupEditProfile.open();
});
addButton.addEventListener("click", ()=>popupAddCard.open());

// добавление начальных карточек

const defaultCardList = new Section ({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, "#location", popupBigImage.open.bind(popupBigImage));
    return card.generateCard();
  }
}, '.locations');

defaultCardList.renderItems();

// валидация форм

const setValidators = (args) => {
  const formList = Array.from(document.querySelectorAll(args.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(args, formElement);
    validator.enableValidation();
  });
};

setValidators(argsValidation);
