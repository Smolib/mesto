import "./index.css";
import { Card } from "./scripts/components/Card.js";
import { FormValidator } from "./scripts/components/FormValidator.js";
import { errorCards } from "./scripts/utils/errorCards.js";
import { argsValidation } from "./scripts/utils/argsValidation.js";
import { Section } from "./scripts/components/Section.js";
import { PopupWithImage } from "./scripts/components/PopupWithImage.js";
import { PopupWithForm } from "./scripts/components/PopupWithForm.js";
import { UserInfo } from "./scripts/components/UserInfo.js";
import { Api } from "./scripts/components/Api.js";
import { PopupWithConfirmation } from "./scripts/components/PopupWithConfirmation.js";

//работа с api
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-40",
  headers: {
    authorization: "c5831f36-c63f-485a-b825-3b43b70dd4bf",
    "Content-Type": "application/json",
  },
});

// подгрузка данных пользователя
api
  .getUserInfo()
  .then((user) => {
    userInfo.setUserInfo({
      name: user.name,
      speciality: user.about,
      avatar: user.avatar,
    });
  })
  .catch((err) => {
    alert(
      "Ой! Что-то пошло не так! Mesto захватили бобры и мы не смогли подгрузить настоящие данные пользователя, простите нас! :("
    );
    userInfo.setUserInfo({
      name: "Неизвестный бобер",
      speciality: "Профессиональный платиностройщик",
      avatar:
        "https://cstor.nn2.ru/forum/data/forum/images/2018-10/216027485-photo_bobra_01.jpg",
    });
  });

// работа с карточками

function deleteCardApi(card) {
  const popupButtonText = popupDeleteCard.getSubmitButton().textContent;
  popupDeleteCard.getSubmitButton().textContent = "Удаление...";
  api
    .deleteCard(card)
    .then((res) => {
      card.deleteSelf();
    })
    .catch((err) => {
      alert(
        "Ой! Что-то пошло не так! Mesto не смог удалить карточку :("
      )
    })
    .finally(
      (res) => (popupDeleteCard.getSubmitButton().textContent = popupButtonText)
    );
}

function toggleLikeApi(card) {
  if (card.getLikedByMe()) {
    api.deleteLike(card).then((res) => {
      card.updateLikes(res.likes, false);
    })
    .catch((err) => {
      alert(
        "Ой! Что-то пошло не так! Mesto не смог убрать like :("
      )
    });
  } else {
    api.putLike(card).then((res) => {
      card.updateLikes(res.likes, true);
    })
    .catch((err) => {
      alert(
        "Ой! Что-то пошло не так! Mesto не смог добавить like :("
      )
    });
  }
}

const createCard = (item) => {
  const myId = "d96b1a53fe8ac56896b1ce45";
  const argsCard = {
    item,
    deletable: myId === item.owner._id,
    likedByMe: item.likes.some((likeitem) => likeitem._id == myId),
    selector: "#location",
    handleCardClick: popupBigImage.open.bind(popupBigImage),
    handleTrashClick: function () {
      popupDeleteCard.open(() => deleteCardApi(this));
    },
    handleLikeClick: function () {
      toggleLikeApi(this);
    },
  };
  const card = new Card(argsCard);
  return card.generateCard();
};

const cardSection = new Section((item) => {
  return createCard(item);
}, ".locations");

api
  .getInitialCards()
  .then((cards) => {
    cardSection.addItems(cards);
  })
  .catch((err) => {
    alert(
      "Ой! Что-то пошло не так! Mesto захватили бобры и мы не смогли подгрузить настоящие фотографии, простите нас! :("
    );
    cardSection.addItems(errorCards);
  });

// создание popup-ов
const userInfo = new UserInfo(
  ".profile__name",
  ".profile__speciality",
  ".profile__avatar"
);

const popupBigImage = new PopupWithImage("#popup-big-image");

const popupAddCard = new PopupWithForm("#popup-add-card", function ({
  "image-title": name,
  "image-link": link,
}) {
  const popupButtonText = this.getSubmitButton().textContent;
  this.getSubmitButton().textContent = "Создание...";
  api
    .postCard({ name, link })
    .then((item) => {
      cardSection.addItem(item);
    })
    .catch((err) => {
      alert("Ой! Что-то пошло не так! Mesto не смог добавить новую карточку");
    })
    .finally((res) => (this.getSubmitButton().textContent = popupButtonText));
});

const popupEditAvatar = new PopupWithForm("#popup-edit-avatar", function ({
  "avatar-link": avatar,
}) {
  const popupButtonText = this.getSubmitButton().textContent;
  this.getSubmitButton().textContent = "Сохранение...";
  api
    .patchUserAvatar(avatar)
    .then((res) => {
      userInfo.setUserInfo({ avatar });
    })
    .finally((res) => (this.getSubmitButton().textContent = popupButtonText));
});

const popupDeleteCard = new PopupWithConfirmation("#popup-delete-card");

const popupEditProfile = new PopupWithForm("#popup-edit-profile", function ({
  name,
  speciality,
}) {
  const popupButtonText = this.getSubmitButton().textContent;
  this.getSubmitButton().textContent = "Сохранение...";
  api
    .patchUserInfo({ name, speciality })
    .then(({ name, about }) => {
      userInfo.setUserInfo({ name, speciality: about });
    })
    .catch((err) => {
      alert("Ой! Что-то пошло не так! Mesto не смог сохранить ваше имя");
    })
    .finally((res) => (this.getSubmitButton().textContent = popupButtonText));
});

// валидация форм

const formValidators = {};

const setValidators = (args) => {
  const formList = Array.from(document.querySelectorAll(args.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(args, formElement);
    const formName = formElement.getAttribute("name");

    formValidators[formName] = validator;

    validator.enableValidation();
  });
};

setValidators(argsValidation);

// обработчики событий на кнопках

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const editAvatarButton = document.querySelector(".profile__avatar");

editButton.addEventListener("click", () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());

  formValidators["profile-form"].updateValidity();
  popupEditProfile.open();
});

addButton.addEventListener("click", () => {
  formValidators["card-form"].updateValidity();
  popupAddCard.open();
});

editAvatarButton.addEventListener("click", () => {
  formValidators["avatar-form"].updateValidity();
  popupEditAvatar.open();
});
