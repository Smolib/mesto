import "./index.css";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { argsValidation } from "../scripts/utils/argsValidation.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { Api } from "../scripts/components/Api.js";
import { PopupWithConfirmation } from "../scripts/components/PopupWithConfirmation.js";

//работа с api
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-40",
  headers: {
    authorization: "c5831f36-c63f-485a-b825-3b43b70dd4bf",
    "Content-Type": "application/json",
  },
});

// подгрузка данных пользователя и карточек

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo({
      name: user.name,
      speciality: user.about,
      avatar: user.avatar,
      _id: user._id,
    });
    cardSection.addItems(cards);
  })
  .catch((err) => {
    alert(
      "Ой! Что-то пошло не так! Mesto сломался и мы не смогли подгрузить данные пользователя и карточки, простите нас! :("
    );
    userInfo.setUserInfo({
      name: "Ошибка загрузки",
      speciality: "Ошибка загрузки",
    });
  });

// работа с карточками

function deleteCardApi(card) {
  popupDeleteCard.renderLoading(true, "Удаление карточки...");
  return api
    .deleteCard(card)
    .then((res) => {
      card.deleteSelf();
    })
    .catch((err) => {
      alert("Ой! Что-то пошло не так! Mesto не смог удалить карточку :(");
    })
    .finally(() => popupDeleteCard.renderLoading(false));
}

function toggleLikeApi(card) {
  if (card.getLikedByMe()) {
    api
      .deleteLike(card)
      .then((res) => {
        card.updateLikes(res.likes, false);
      })
      .catch((err) => {
        alert("Ой! Что-то пошло не так! Mesto не смог убрать like :(");
      });
  } else {
    api
      .putLike(card)
      .then((res) => {
        card.updateLikes(res.likes, true);
      })
      .catch((err) => {
        alert("Ой! Что-то пошло не так! Mesto не смог добавить like :(");
      });
  }
}

const createCard = (item) => {
  const myId = userInfo.getUserId();
  const argsCard = {
    item,
    deletable: myId === item.owner._id,
    likedByMe: item.likes.some((likeitem) => likeitem._id == myId),
    selector: "#location",
    handleCardClick: popupBigImage.open.bind(popupBigImage),
    handleTrashClick: (card) => {
      popupDeleteCard.open(() => deleteCardApi(card));
    },
    handleLikeClick: (card) => toggleLikeApi(card),
  };
  const card = new Card(argsCard);
  return card.generateCard();
};

const cardSection = new Section((item) => {
  return createCard(item);
}, ".locations");

// создание popup-ов
const userInfo = new UserInfo(
  ".profile__name",
  ".profile__speciality",
  ".profile__avatar"
);

const popupBigImage = new PopupWithImage("#popup-big-image");

const popupAddCard = new PopupWithForm(
  "#popup-add-card",
  (popup, { "image-title": name, "image-link": link }) => {
    popup.renderLoading(true, "Сохранение карточки...");
    return api
      .postCard({ name, link })
      .then((item) => {
        cardSection.addItem(item);
      })
      .catch((err) => {
        alert("Ой! Что-то пошло не так! Mesto не смог добавить новую карточку");
      })
      .finally(() => popup.renderLoading(false));
  }
);

const popupEditAvatar = new PopupWithForm(
  "#popup-edit-avatar",
  (popup, { "avatar-link": avatar }) => {
    popup.renderLoading(true, "Сохранение аватара...");
    return api
      .patchUserAvatar(avatar)
      .then((res) => {
        userInfo.setUserInfo({ avatar });
      })
      .catch((err) => {
        alert("Ой! Что-то пошло не так! Mesto не смог сохранить аватар.");
      })
      .finally(() => popup.renderLoading(false));
  }
);

const popupDeleteCard = new PopupWithConfirmation(
  "#popup-delete-card",
  () => {}
);

const popupEditProfile = new PopupWithForm(
  "#popup-edit-profile",
  (popup, { name, speciality }) => {
    popup.renderLoading(true, "Сохранение...");
    return api
      .patchUserInfo({ name, speciality })
      .then(({ name, about }) => {
        userInfo.setUserInfo({ name, speciality: about });
      })
      .catch((err) => {
        alert("Ой! Что-то пошло не так! Mesto не смог сохранить ваше имя");
      })
      .finally(() => popup.renderLoading(false));
  }
);

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
