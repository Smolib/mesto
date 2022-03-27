class Card {
  constructor (name, link, selector) {
    this._name = name;
    this._link = link;

    this._element = this._getTemplate(selector);
  }

  _getTemplate(selector) {
    selector = `#${selector}`;
    return document
    .querySelector(selector)
    .content
    .querySelector('.location')
    .cloneNode(true);
  }

  _handleLikeButton() {
      this._element.querySelector('.location__like-button').classList.toggle('location__like-button_active');
  }

  _handleImageClick() {
    const popupBigImage = document.querySelector("#popup-big-image");
    const bigImage = document.querySelector(".popup-big-image__image");
    const textImage = document.querySelector(".popup-big-image__text");


    popupBigImage.classList.add("popup_opened");
    document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup_opened");
      closePopup(openedPopup);
    }
    });
    textImage.textContent = this._name;
    bigImage.src = this._link;
    bigImage.alt = this._name;
  };

  _setEventListeners() {
    this._element.querySelector('.location__like-button').addEventListener('click', () => {
      this._handleLikeButton();
    });
    this._element.querySelector('.location__image').addEventListener("click",() => {
      this._handleImageClick();
    });
    this._element.querySelector('.location__trash-button').addEventListener("click", () => {
      this._element.remove();
    });
  }

  generateCard() {
    this._setEventListeners();

    this._element.querySelector('.location__image').src = this._link;
    this._element.querySelector('.location__image').alt = this._name;
    this._element.querySelector('.location__name').textContent = this._name;

    return this._element;
  }
}

export {Card}



