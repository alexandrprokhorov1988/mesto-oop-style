export default class UserInfo {
  constructor(userNameSelector, userInfoSelector, jobInput, nameInput) {
    this._userNameSelector = userNameSelector;
    this._userInfoSelector = userInfoSelector;
    this._jobInput = jobInput;
    this._nameInput = nameInput;
  }

  getUserInfo() {
    this._userInfoObj = {};
    this._userInfoObj['name'] = this._userNameSelector.textContent;
    this._userInfoObj['profession'] = this._userInfoSelector.textContent;
    return this._userInfoObj;
  }

  setUserInfo(obj) {
    this._userNameSelector.textContent = obj[0].name;
    this._userInfoSelector.textContent = obj[0].profession;
  }

  setUserInfoToForm(obj) {
    this._nameInput.value = obj.name;
    this._jobInput.value = obj.profession;
  }
}