const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  inputErrorSelector: '.popup__input-error',
}

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
  };
  
  const hideInputError = (formElement, inputElement, inputErrorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
      
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    // Если есть хотя бы один невалидный инпут
    
    if (hasInvalidInput(inputList, buttonElement, inactiveButtonClass)) {
      // сделай кнопку неактивной
      buttonElement.classList.add(inactiveButtonClass);
      formAdd.removeEventListener('submit', submitAddHandler);
      formEdit.removeEventListener('submit', submitFormHandler );
    } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove(inactiveButtonClass);
      formAdd.addEventListener('submit', submitAddHandler);
      formEdit.addEventListener ('submit', submitFormHandler );
    }
  }; 
  
  const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
   
    toggleButtonState(inputList, buttonElement, inputSelector, inactiveButtonClass);
   
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });
  };
  
  const enableValidation = ({ formSelector, ...rest }) => {
    
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
        setEventListeners(formElement, rest);
    });
  };
  
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      
      return !inputElement.validity.valid;
   })
  };

  enableValidation(config);
 