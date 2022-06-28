

import Popup from "./Popup.js";
import { popupImage, popupImageName } from "./data.js";

export default class PopupWithImage extends Popup {
    constructor (popupSelector, name, link) {
        super (popupSelector);
        this._link = link;
        this._name = name;
        }

    openPopup = (name, link) => {
        this._name = name;
        this._link = link;
        popupImage.src = this._link;
        popupImage.alt = this._name;
        popupImageName.textContent = this._name;
        super.openPopup();
      }

      
}