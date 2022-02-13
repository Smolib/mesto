// константы редактирования profile
const editButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('#popup-edit-profile');
const popupEditProfileForm = popupEditProfile.querySelector('.popup__container');
const nameInput = popupEditProfile.querySelector('input[name="name"]');
const nameText = document.querySelector('.profile__name');
const specialityInput = popupEditProfile.querySelector('input[name="speciality"]');
const specialityText = document.querySelector('.profile__speciality');
const popupCloseButtons = document.querySelectorAll('.popup__close-button');

// константы добавления карточек
const locations = document.querySelector('.locations');
const locationTemplate = document.querySelector('#location').content.querySelector('.location');
const addButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('#popup-add-card');
const imageTitleInput = popupAddCard.querySelector('input[name="image-title"]');
const imageLinkInput = popupAddCard.querySelector('input[name="image-link"]');

// отображение popup-ов
const showPopup = (popupName) => {
  popupName.classList.remove('popup_closed');
  popupName.classList.add('popup_opened');
}

const showPopupEditProfile =() => {
  showPopup(popupEditProfile);
  nameInput.value = nameText.textContent;
  specialityInput.value = specialityText.textContent;
}

const showPopupAddCard =() => {
  showPopup(popupAddCard);
  imageTitleInput.value = '';
  imageLinkInput.value = '';
}

editButton.addEventListener('click', showPopupEditProfile);
addButton.addEventListener('click', showPopupAddCard);


// закрытие popup-ов
const closePopup = (popupName) => {
popupName.classList.remove('popup_opened');
popupName.classList.add('popup_closed');
}

popupCloseButtons.forEach((button) => button.addEventListener('click', closePopup.bind(undefined, button.closest('.popup'))));

// редактирование профиля
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  nameText.textContent = nameInput.value;
  specialityText.textContent = specialityInput.value;
  closePopup(popupEditProfile);
}

popupEditProfile.addEventListener('submit', handleProfileFormSubmit);

// добавление начальных карточек
const initialCards = [
  {
    name: 'Карачаево-Черкесск',
    link: './images/karachaevsk.jpg',
  },
  {
    name: 'Гора Эльбрус',
    link: './images/elbrus.jpg',
  },
  {
    name: 'Домбай',
    link: './images/dombay.jpg',
  },
  {
    name: 'Уральские горы',
    link: './images/ural.jpg',
  },
  {
    name: 'Ключевская сопка',
    link: './images/kluchevskoi.jpg',
  },
  {
    name: 'Коштантау',
    link: './images/koshtantau.jpg',
  },
];
const addCard = (name, link) => {
  const locationCard = locationTemplate.cloneNode(true);
  const likeButton = locationCard.querySelector('.location__like-button');
  const trashButton = locationCard.querySelector('.location__trash-button');

  locationCard.querySelector('.location__image').src = link;
  locationCard.querySelector('.location__image').alt = name;
  locationCard.querySelector('.location__name').textContent = name;

  trashButton.addEventListener('click', () =>
  locationCard.remove());
  likeButton.addEventListener('click', () =>
  likeButton.classList.toggle('location__like-button_active'));

  locations.prepend(locationCard);
}

initialCards.forEach((item) => addCard(item.name, item.link));

// добавление новых карточек
const handleAddCardSubmit = (evt) => {
  evt.preventDefault();
  addCard(imageTitleInput.value, imageLinkInput.value);
  closePopup(popupAddCard);
}

popupAddCard.addEventListener('submit', handleAddCardSubmit);
