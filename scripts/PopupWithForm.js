import Popup from "./Popup.js";
import { FormValidator } from "./formValidator.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitFormHandler }) {
    super(popupSelector);
    this._element = this._popup.querySelector(".popup__form");
    this._inputList = this._element.querySelectorAll(".popup__input");
    this._submitFormHandler = submitFormHandler;
  }

  _getInputValues = () => {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  };
  setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFormHandler(this._getInputValues());
    });
    super.setEventListeners();
  }

  open = () => {
    super.open();
    
  };

  close = () => {
    super.close();
    this._element.reset();
  };
}
