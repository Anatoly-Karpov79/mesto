


export class FormValidator {
    constructor (formElement, config) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
      };

      enableValidation() {
        this._formElement.addEventListener('submit', (event) => {
          event.preventDefault();
        });
        this._setEventListeners();
      }

      _showInputError (inputElement) {
        
        const _errorElement = this._formElement.querySelector (`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        _errorElement.textContent  = inputElement.validationMessage;
      };
      
      _hideInputError (inputElement) {
        const _errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        _errorElement.textContent = ' ';
      };
      
      _checkInputValidity (inputElement)  {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement, inputElement.validationMessage);
          
        } else {
          this._hideInputError(inputElement);
        }
      };

      _toggleButtonState ()  {
                
        if (this._hasInvalidInput()) {
          // сделай кнопку неактивной
          this._buttonElement.classList.add(this._inactiveButtonClass);
          this._buttonElement.disabled = true;
        } else {
          // иначе сделай кнопку активной

          this._buttonElement.classList.remove(this._inactiveButtonClass);
          this._buttonElement.disabled = false;
        }
      }; 
      
      _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
          });
        });
      }
      
      
      _hasInvalidInput () {
        return this._inputList.some((inputElement) => {
          
          return !inputElement.validity.valid;
       })
      };
 } 



