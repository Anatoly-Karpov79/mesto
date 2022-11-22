// Создаем класс
export class Card {
  constructor({ data, handleCardClick, hendleDelete, currentUserId, handleCardLikeSetting, handleCardLikeRemoving }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._hendleDelete = hendleDelete;
    this._handleCardLike = handleCardLikeSetting;
    this._handleCardLikeRemove = handleCardLikeRemoving;
    this._likes = data.likes;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._currentUserId = currentUserId;
   
  }
  // Находим шаблон для карточек
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _isCardLiked() {
    return this._likes.some((item) => item._id === this._currentUserId);
  }

  _renderLikes() {
    this._likesCounter.textContent = this._likes.length;

  }
  updateLikes(data) {
    this._likes = data.likes;
    this._renderLikes();
    this._toggleLike();
  }

  _likingPlaceCardHandler() {
    if (!this._isCardLiked()) {
      this._handleLike(this._cardId);
    } else {
      this._handleCardLikeRemove(this._cardId);
    }
  }
  _handleLikeButtonState() {
    if (!this._isCardLiked()) {
      this._likeButton.classList.remove('card__heart_activ');
    } else {
      this._likeButton.classList.add('card__heart_activ');
    }
  }

  _checkCardOwner() {
    if (this._ownerId !== this._currentUserId) {
      this._delBtn.remove();
//      console.log(this._ownerId)
//      console.log(this._userId)
    }
  }
  // Создаем карточку
  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector(".card__image")
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardElement.querySelector(".card__name").textContent = this._name;
    this._likesCounter = this._cardElement.querySelector('.card__likes');
    this._delBtn = this._cardElement.querySelector('.card__delete');
    this._renderLikes();
    this._setEventListeners();
    this._handleLikeButtonState();
    this._checkCardOwner();
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
        this._likingPlaceCardHandler();
      });

    this._cardElement
      .querySelector(".card__delete")
      .addEventListener("click", () => {
        this._hendleDelete();
        return this._cardElement
      });
  }

  // ставим лайк
  _toggleLike() {
    this._likeButton.classList.toggle("card__heart_activ");
  }

  _likingPlaceCardHandler() {
    if (!this._isCardLiked()) {
      this._handleCardLike(this._cardId);
    } else {
      this._handleCardLikeRemove(this._cardId);
    }
  }

  getId() {
    return this._cardId;
}

deleteCard() {
  this._cardElement.remove();
  this._cardElement = null;
}
 
}
