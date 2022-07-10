//import {popupCloseBtn} from './data.js'
export default class Popup {
    constructor (popupSelector) {
      
        this._popupSelector = popupSelector;
       
        this._popup = document.querySelector(this._popupSelector);
       
    
        this._popupCloseBtn = this._popup.querySelector('.popup__close-popup');

    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    };

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    };

    _handleEscClose = (event) => {
        if (event.key === 'Escape') {
          this.close();
            };
    }

     
    setEventListeners () {
       this._popupCloseBtn.addEventListener('click', () => {
           this.close();
        });
        document.addEventListener('mousedown', (evt) => {
            if (evt.target === this._popup)
            this.close();
        });
    }

    
          
   
        
}