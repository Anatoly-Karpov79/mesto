const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const addButton = document.querySelector('.profile__add-button');
const popupNameEdit = document.querySelector('.popup__input_type_name');
const popupJobEdit = document.querySelector('.popup__input_type_job');
const formEdit = document.querySelector ('.form');
const formAdd = document.querySelector('#form__add');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
export const popupView = document.querySelector('.popup_view');
const popups = document.querySelectorAll('.popup')
const nameInput = document.querySelector ('.profile__name');
const jobInput = document.querySelector ('.profile__profession');
const cardNameAdd = document.querySelector('.popup__input_add_name');
const cardImageAdd = document.querySelector('.popup__input_add_link');
const elements = document.querySelector('.elements');
export const popupImage = document.querySelector('.popup__view-img');
export const popupImageName = document.querySelector('.popup__view-name');
const popupAddSubmitBtn = document.querySelector('#popup__button-add');

import { Card } from './card.js';
import { initialCards } from './cards.js';
import { config } from './validate.js';
 import { FormValidator } from './formValidator.js'

const closePopupEsc = (evt, popup) => {
   if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened')
    closePopup(popup)
      
      }
   }

const disableAddSubmitBtn = () => {
    popupAddSubmitBtn.classList.add('popup__button_disabled');
    popupAddSubmitBtn.disabled = true;
}

export function openPopup (popup) {
  popup.classList.add('popup_opened');
 document.addEventListener('keydown', closePopupEsc);
 
}
const openPopupAdd = () => {
  openPopup(popupAdd);
  disableAddSubmitBtn();
}
function closePopup (event) {
    event.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
    
}

function editProfile () {
  openPopup(popupEdit);
    popupNameEdit.value = nameInput.textContent;
    popupJobEdit.value = jobInput.textContent;
}

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
     if (evt.target.classList.contains('popup__button-close')) {
        closePopup(popup)
     }
     })
  
       document.addEventListener('click', function (evt) {
       if (evt.target === popup) {
        closePopup(popup)
           }
        })
      })

popupOpenButton.addEventListener ('click', editProfile );

addButton.addEventListener ('click', () => openPopupAdd());



function submitFormHandler (evt) {
    evt.preventDefault();
    nameInput.textContent = popupNameEdit.value;
    jobInput.textContent = popupJobEdit.value;
    closePopup(popupEdit);
}

formEdit.addEventListener ('submit', submitFormHandler );
 

  const insertCard = (cardElement) => {
   document.querySelector('.elements').prepend(cardElement);
 }
 
function submitAddHandler (evt) {
    evt.preventDefault();
   
    const name = cardNameAdd.value;
    const link = cardImageAdd.value;
    const alt = cardNameAdd.value;
    
    const card = new Card(name, link, alt);
    const cardElement = card.generateCard();
    insertCard(cardElement);
    closePopup(popupAdd);
    formAdd.reset();
  }

   formAdd.addEventListener ('submit', submitAddHandler );
  
 initialCards.forEach(({name, link}) => {
    const card = new Card(name, link);
    const cardElement = card.generateCard();
    insertCard (cardElement);
  });


  const formEditValidate = new FormValidator(formEdit, config);
  formEditValidate.enableValidation();

  const formAddValidate = new FormValidator(formAdd, config);
  formAddValidate.enableValidation();
    


  
  
  
 





    


