import {popupImage, popupView, popupImageName, openPopup} from './index.js';

export class Card {
    constructor (name, link) {
      this._name = name;
      this._link = link;
    }
    
      _getTemplate() {
        const cardElement = document
          .querySelector('#element-card')
          .content
          .querySelector('.card')
          .cloneNode(true);
    
        return cardElement;
      }


      generateCard() {
       
        this._cardElement = this._getTemplate();
        this._setEventListeners();    
        this._cardElement.querySelector('.card__image').src = this._link;
        this._cardElement.querySelector('.card__name').textContent = this._name;

        return this._cardElement;
      }   

      _handleOpenPopup () {
        console.log('попап появись');
        console.log(this._link, this.name);
        popupImage.src = this._link;
        
      //  popupImageName.textContent = this.name;
        popupImage.alt = this.name;
        openPopup(popupView);
    
    //    popupElement.classList.add('popup_is-opend');
      }
     _setEventListeners() {
      this._cardElement.querySelector('.card__image').addEventListener('click', () => {
       this._handleOpenPopup ();
      });

      this._cardElement.querySelector('.card__heart').addEventListener('click', () => {
        console.log('aaaaaa');
        
      });
      this._cardElement.querySelector('.card__delete').addEventListener('click', () => {
        console.log('fffffffffff');
      });
    }


    /*  _setEventListeners() {
        this._heart.addEventListener('click', () => {
          console.log('Сердце работает');
        this._handleOpenPopup ();// откройте попап
      });*/

    // добавить карточку в дом
}

/*function createCard (name, link) {
   // const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  //  const elementImage = cardElement.querySelector('.element__image');
    const elementName = cardElement.querySelector('.element__name');
    const elementHeart = cardElement.querySelector('.element__heart');
    const elementDelete = cardElement.querySelector('.element__delete');
    
    elementName.textContent = name;
    elementImage.src = link;
    elementImage.alt = name;
    
    elementHeart.addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__heart_activ');
    });

    elementDelete.addEventListener('click', (evt) => {
      evt.target.closest('.element').remove();
    });

    elementImage.addEventListener ('click', veiwImage );

    return cardElement
  */