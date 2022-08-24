export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
   
  }
  getUserInfo() {
    const profile = {
      name: this._name.textContent,
      about: this._about.textContent
      };
      return profile;
  }

  // Добавляем данные пользователя на страницу
  setUserInfo({ name, about, avatar }) {
    if(name) {this._name.textContent = name;};
    if(about) {this._about.textContent = about;};
    if(avatar) {this._avatar.src = avatar;};
};
}
