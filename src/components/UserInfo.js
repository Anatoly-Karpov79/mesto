export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
   
  }
  getUserInfo() {
    const profile = {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src,
      id: this.id
      };
      console.log(profile)
      return profile;
      
  }

  // Добавляем данные пользователя на страницу
  setUserInfo({ name, about, avatar, _id }) {
    this._name.textContent = name;
    this._about.textContent = about;
    this._avatar.src = avatar;
    this._id=_id ;
    console.log(name,about,avatar,_id)
};
}
