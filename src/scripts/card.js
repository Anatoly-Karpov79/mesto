// Создаем класс
export class Card {
  constructor({ data, handleCardClick }, popupSelector) {
    this._name = data.name;
    this._link = data.link;
    this._popupSelector = popupSelector;
    this._handleCardClick = handleCardClick;
  }
  // Находим шаблон для карточек
  _getTemplate() {
    const cardElement = document
      .querySelector("#element-card")
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  // Создаем карточку
  generateCard() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
    this._cardElement.querySelector(".card__name").textContent = this._name;

    return this._cardElement;
  }

  // Устанавливаем слушатели
  _setEventListeners() {
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick();
      });
    this._cardElement
      .querySelector(".card__heart")
      .addEventListener("click", () => {
        this._handleHeartActiv();
      });

    this._cardElement
      .querySelector(".card__delete")
      .addEventListener("click", () => {
        this._handleDelete();
      });
  }

  // ставим лайк
  _handleHeartActiv() {
    this._cardElement
      .querySelector(".card__heart")
      .classList.toggle("card__heart_activ");
  }
  // нажатие на корзину
  _handleDelete() {
    this._cardElement.remove();
    this._cardElement = null;
  }
}
