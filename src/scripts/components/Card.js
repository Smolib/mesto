class Card {
  constructor(name, link, selector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;

    this._element = this._getTemplate(selector);
  }

  _getTemplate(selector) {
    return document
      .querySelector(selector)
      .content.querySelector(".location")
      .cloneNode(true);
  }

  _handleLikeButton() {
    this._element
      .querySelector(".location__like-button")
      .classList.toggle("location__like-button_active");
  }

  _handleImageClick() {
    this._handleCardClick(this);
  }

  _handleTrashButton() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._element
      .querySelector(".location__like-button")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });
    this._element
      .querySelector(".location__image")
      .addEventListener("click", () => {
        this._handleImageClick();
      });
    this._element
      .querySelector(".location__trash-button")
      .addEventListener("click", () => {
        this._handleTrashButton();
      });
  }

  generateCard() {
    this._imageElement = this._element.querySelector(".location__image");

    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._element.querySelector(".location__name").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}

export { Card };
