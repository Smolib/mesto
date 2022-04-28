class UserInfo {
  constructor(nameSelector, specialitySelector, avatarSelector) {
    this._nameArea = document.querySelector(nameSelector);
    this._specialityArea = document.querySelector(specialitySelector);
    this._avatarArea = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameArea.textContent,
      speciality: this._specialityArea.textContent,
    };
  }

  setUserInfo({ name, speciality, avatar }) {
    if (name) {
      this._nameArea.textContent = name;
    }
    if (speciality) {
      this._specialityArea.textContent = speciality;
    }
    if (avatar) {
      this._avatarArea.style["background-image"] = `url('${avatar}')`;
    }
  }
}

export { UserInfo };
