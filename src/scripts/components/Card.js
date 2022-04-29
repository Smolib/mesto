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
    this._locationImage = this._element.querySelector(".location__image");
    this._likeButton = this._element.querySelector(".location__like-button");
    this._trashButton = this._element.querySelector(".location__trash-button");
    this._elementLikesValue = this._element.querySelector(".location__like-value");
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
    this._handleLikeClick(this);
  }

  _handleImageClick() {
    this._handleCardClick(this);
  }

  _handleTrashButton() {
    this._handleTrashClick(this);
  }

  _setEventListeners() {
    this._likeButton
      .addEventListener("click", () => {
        this._handleLikeButton();
      });
      this._locationImage
      .addEventListener("click", () => {
        this._handleImageClick();
      });
    if (this._trashButton) {
      this._trashButton.addEventListener("click", () => {
        this._handleTrashButton();
      });
    }
  }

  deleteSelf() {
    this._element.remove();
  }

  updateLikes(likes, likedByMe) {
    const likesValue = likes.length;
    this._likedByMe = likedByMe;

    if (likedByMe) {
      this._likeButton
        .classList.add("location__like-button_active");
    } else {
      this._likeButton
        .classList.remove("location__like-button_active");
    }

    if (likesValue) {
      this._elementLikesValue.textContent = likesValue;
    } else this._elementLikesValue.textContent = "";
  }

  generateCard() {

    this.updateLikes(this._likes, this._likedByMe);

    if (!this._deletable) {
      this._trashButton.remove();
    }

    this._locationImage.src = this._link;
    this._locationImage.alt = this._name;
    this._element.querySelector(".location__name").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}

export { Card };
