const editButton = document.querySelector('.profile__edit-button');
const saveButton = document.querySelector('.popup__save-button');
const closeButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__container');
const nameInput = document.querySelector('input[name="name"]');
const nameText = document.querySelector('.profile__name');
const specialityInput = document.querySelector('input[name="speciality"]');
const specialityText = document.querySelector('.profile__speciality');

function showPopup() {
  nameInput.value = nameText.textContent;
  specialityInput.value = specialityText.textContent;
  popup.classList.add('popup_opened');
}

editButton.addEventListener('click', showPopup);

function closePopup() {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

function saveValue(evt) {
  evt.preventDefault();
  nameText.textContent = nameInput.value;
  specialityText.textContent = specialityInput.value;
  closePopup();
}

popupForm.addEventListener('submit', saveValue);
