import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor({ popupSelector, submitFormHandler }) {
      super(popupSelector);
      this._element = this._popup.querySelector(".popup__form");
      this._submitFormHandler = submitFormHandler;
      this._submitFormButton = this._element.querySelector('.popup__button');
    }
    setEventListeners() {
        this._element.addEventListener("submit", (evt) => {
          evt.preventDefault();
          this._submitFormHandler(this);
        });
        super.setEventListeners();
      }
   
   
      handleDeleteCard(deleteFunction) {
        this._submitFormHandler = deleteFunction;
    }
}