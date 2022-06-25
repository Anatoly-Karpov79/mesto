import {popupCloseBtn} from './data.js'
export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
    }

    openPopup () {
        this._popupSelector.classList.add('popup_opened');
    };

    closePopup () {
        this._popupSelector.classList.remove('popup_opened');

    };

    _handleEscClose () {

    };

    setEventListeners () {
        popupCloseBtn.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup__button-close')) {
                console.log('Меня нажали');
               this.closePopup();
            }
          });
   
        }
}