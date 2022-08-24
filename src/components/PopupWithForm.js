import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitFormHandler }) {
    super(popupSelector);
    this._element = this._popup.querySelector(".popup__form");
    this._inputList = this._element.querySelectorAll(".popup__input");
    this._submitFormHandler = submitFormHandler;
    this._submitFormButton = this._element.querySelector('.popup__button');
  }

  _getInputValues = () => {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    console.log(this._formValues)
    return this._formValues;
  };
  setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFormHandler(this._getInputValues());
    });
    super.setEventListeners();
  }

  isSaving(saving) {
    if (saving) {
      this._submitFormButton.textContent = 'Сохранение...';
    } else {
      this._submitFormButton.textContent = 'Сохранить';
    }
  }
 


  open () {
    super.open();
    
  };

  close = () => {
    super.close();
    this._element.reset();
  };
}
