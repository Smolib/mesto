class Card {
  constructor({
    item,
    deletable,
    likedByMe,
    selector,
    handleCardClick,
    handleTrashClick,
    handleLikeClick,
  }) {
    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes;
    this._id = item._id;
    this._deletable = deletable;
    this._likedByMe = likedByMe;
    this._ownerId = item.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;

    this._element = this._getTemplate(selector);
  }

  getLikedByMe() {
    return this._likedByMe;
  }

  getId() {
    return this._id;
  }

  _getTemplate(selector) {
    return document
      .querySelector(selector)
      .content.querySelector(".location")
      .cloneNode(true);
  }

  _handleLikeButton() {
    this._handleLikeClick();
  }

  _handleImageClick() {
    this._handleCardClick(this);
  }

  _handleTrashButton() {
    this._handleTrashClick(this);
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
    const trashButton = this._element.querySelector(".location__trash-button");
    if (trashButton) {
      trashButton.addEventListener("click", () => {
        this._handleTrashButton();
      });
    }
  }

  deleteSelf() {
    this._element.remove();
    this._element = null;
  }

  updateLikes(likes, likedByMe) {
    const likesValue = likes.length;
    const elementLikesValue = this._element.querySelector(
      ".location__like-value"
    );
    this._likedByMe = likedByMe;

    if (likedByMe) {
      this._element
        .querySelector(".location__like-button")
        .classList.add("location__like-button_active");
    } else {
      this._element
        .querySelector(".location__like-button")
        .classList.remove("location__like-button_active");
    }

    if (likesValue) {
      elementLikesValue.textContent = likesValue;
    } else elementLikesValue.textContent = "";
  }

  generateCard() {
    this._imageElement = this._element.querySelector(".location__image");

    this.updateLikes(this._likes, this._likedByMe);

    if (!this._deletable) {
      this._element.querySelector(".location__trash-button").remove();
    }

    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._element.querySelector(".location__name").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}

export { Card };
