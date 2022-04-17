class UserInfo {
  constructor (nameSelector, specialitySelector) {
    this._nameArea = document.querySelector(nameSelector);
    this._specialityArea = document.querySelector(specialitySelector);
  }

  getUserInfo () {
    return {name: this._nameArea.textContent, speciality: this._specialityArea.textContent};
  }

  setUserInfo ({name, speciality}) {
    this._nameArea.textContent = name;
    this._specialityArea.textContent = speciality;
  }
}

export { UserInfo };
