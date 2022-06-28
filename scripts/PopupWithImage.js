

import Popup from "./Popup.js";
//console.log('Импорт')
export default class PopupWithImage extends Popup {
    constructor (popupSelector, cardName, cardLink) {
        console.log(popupSelector);
        super (popupSelector);
        this._link = cardLink;
        this._name = cardName;

    }

    openPopup = () => {
        console.log('knlhkugjf');
        super.openPopup();
      }

      
}