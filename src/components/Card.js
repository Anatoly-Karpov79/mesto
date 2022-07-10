// Создаем класс
export class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
   
  }
  // Находим шаблон для карточек
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  // Создаем карточку
  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector(".card__image")
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardElement.querySelector(".card__name").textContent = this._name;

    this._setEventListeners();
    return this._cardElement;
  }

  // Устанавливаем слушатели
  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".card__heart")

    this._cardImage
      .addEventListener("click", () => {
        this._handleCardClick();
      });
    
      this._likeButton.addEventListener("click", () => {
        this._toggleLike();
      });

    this._cardElement
      .querySelector(".card__delete")
      .addEventListener("click", () => {
        this._handleDelete();
      });
  }

  // ставим лайк
  _toggleLike() {
    this._likeButton.classList.toggle("card__heart_activ");
  }
  // нажатие на корзину
  _handleDelete() {
    this._cardElement.remove();
    this._cardElement = null;
  }
}
