// Импортируем данные
import {popupImage, popupView, popupImageName} from './data.js';
//import {newOpenPopup } from './index.js'
import PopupWithImage from './PopupWithImage.js';
// Создаем класс
export class Card {
    constructor (item, popupSelector, handleCardClick) {
      this._name = item.name;
      this._link = item.link;
      this._popupSelector = popupSelector;
      this._handleCardClick = handleCardClick;
 //     this.selector = '#element-card'
    }
// Находим шаблон для карточек    
    _getTemplate() {
        const cardElement = document
          .querySelector('#element-card')
          .content
          .querySelector('.card')
          .cloneNode(true);
    
        return cardElement;
    }

// Создаем карточку
    generateCard() {
        this._cardElement = this._getTemplate();
        this._setEventListeners();    
        this._cardElement.querySelector('.card__image').src = this._link;
        this._cardElement.querySelector('.card__name').textContent = this._name;
     
        return this._cardElement;
    }   
// Открытие попапа просмотра картинки
    
handleCardClick = () => {
    const imagePopup = new PopupWithImage(popupView, this._name, this._link);
       imagePopup.openPopup(this._name, this._link);
       imagePopup.setEventListeners(popupView);
};

// Устанавливаем слушатели
    _setEventListeners() {
        this._cardElement.querySelector('.card__image').addEventListener('click', () => {
           this.handleCardClick(this._name, this._link);
        });
        this._cardElement.querySelector('.card__heart').addEventListener('click', () => {
        this._handleHeartActiv ();
      });

        this._cardElement.querySelector('.card__delete').addEventListener('click', () => {
        this._handleDelete ();
      });
    }




    
// ставим лайк
    _handleHeartActiv () {
        this._cardElement.querySelector('.card__heart').classList.toggle('card__heart_activ');
    }
// нажатие на корзину
    _handleDelete () {
        this._cardElement.remove();
        this._cardElement = null;
    }
};