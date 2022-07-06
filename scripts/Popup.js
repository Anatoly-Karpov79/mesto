//import {popupCloseBtn} from './data.js'
export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
        this._popupCloseBtn = this._popupSelector.querySelector('.popup__close-popup');
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    };

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    };

    _handleEscClose = (event) => {
        if (event.key === 'Escape') {
          this.closePopup();
            };
    }

     
    setEventListeners () {
       this._popupCloseBtn.addEventListener('click', () => {
           this.close();
        });
        document.addEventListener('mousedown', (evt) => {
            if (evt.target === this._popupSelector)
            this.close();
        });
    }

    
          
   
        
}