import {popupCloseBtn} from './data.js'
export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
       // this._popup = document.querySelector(this.popupSelector);
        this._popupCloseBtn = this._popupSelector.querySelector('.popup__close-popup');
    }

    openPopup () {
        this._popupSelector.classList.add('popup_opened');
        console.log(this._popupSelector)
        console.log(this._popupCloseBtn)
        document.addEventListener('keydown', this._handleEscClose);
    };

    closePopup () {
        this._popupSelector.classList.remove('popup_opened');

    };

    _handleEscClose = (event) => {
                
        if (event.key === 'Escape') {
          this.closePopup();
            };
    }

     
    setEventListeners () {
        this._popupCloseBtn.addEventListener('click', () => {
            this.closePopup();
        });
        this._popupSelector.addEventListener('mousedown', () => {
            this.closePopup();
        });
    }
          
   
        
}