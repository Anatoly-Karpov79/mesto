import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor ({popupSelector, submitFormHandler}) {
        super (popupSelector);
        this._element = document.querySelector('.popup__form');
        this._inputList = this._element.querySelectorAll('.popup__input');
        this._submitFormHandler = submitFormHandler;
        
    };

    getInputValues = () => {
        this._formValues = {};
            this._inputList.forEach(input => {
                this._formValues[input.name] = input.value;
            });
            console.log(this._formValues)
            return this._formValues;

    }
    setEventListeners() {
        this._element.addEventListener('submit', (evt) => {
              evt.preventDefault();
              this._submitFormHandler(this.getInputValues());
              console.log(FormData);
        });
        super.setEventListeners();
    };        
    
    setInputValues(data) {
        this._inputList.forEach((input) => {
          input.value = data[input.name];
        });
      };

    openPopup = () => {
        super.openPopup();
    }

    closePopup = () => {
        super.closePopup();
        this._element.reset();
    }
}