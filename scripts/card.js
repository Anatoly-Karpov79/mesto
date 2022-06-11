// Импортируем данные
import {popupImage, popupView, popupImageName, openPopup} from './index.js';

// Создаем класс
export class Card {
    constructor (name, link) {
      this._name = name;
      this._link = link;
      this._alt = name;
      this.selector = '#element-card'
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
        this._cardElement.querySelector('.card__image').alt = this._name;

        return this._cardElement;
    }   
// Устанавливаем слушатели
    _setEventListeners() {
        this._cardElement.querySelector('.card__image').addEventListener('click', () => {
        this._handleOpenPopup ();
      });

        this._cardElement.querySelector('.card__heart').addEventListener('click', () => {
        this._handleHeartActiv ();
      });

        this._cardElement.querySelector('.card__delete').addEventListener('click', () => {
        this._handleDelete ();
      });
    }

    _handleOpenPopup () {
        popupImage.src = this._link;
        popupImageName.textContent = this._alt;
        openPopup(popupView);
    }

    _handleHeartActiv () {
        this._cardElement.querySelector('.card__heart').classList.toggle('card__heart_activ');
    }

    _handleDelete () {
        this._cardElement.remove();
    }
};