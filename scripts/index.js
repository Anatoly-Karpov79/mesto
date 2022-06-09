const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const addButton = document.querySelector('.profile__add-button');
const popupNameEdit = document.querySelector('.popup__input_type_name');
const popupJobEdit = document.querySelector('.popup__input_type_job');
const formEdit = document.querySelector ('.form');
const formAdd = document.querySelector('#form__add');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupView = document.querySelector('.popup_view');
const popups = document.querySelectorAll('.popup')
const nameInput = document.querySelector ('.profile__name');
const jobInput = document.querySelector ('.profile__profession');
const cardNameAdd = document.querySelector('.popup__input_add_name');
const cardImageAdd = document.querySelector('.popup__input_add_link');
//const cardTemplate = document.querySelector('#element').content;
const elements = document.querySelector('.elements');
const popupImage = document.querySelector('.popup__view-img');
const popupImageName = document.querySelector('.popup__view-name');
const popupAddSubmitBtn = document.querySelector('#popup__button-add');

import { Card } from './card.js';

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

function openPopup (popup) {
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
 
  function veiwImage (evt) {
    popupImage.src = evt.target.src;
    popupImageName.textContent = evt.target.alt;
    popupImage.alt = evt.target.alt
    openPopup(popupView);
  
  }
 
  function createCard (item) {
    const card = new Card(item.name, item.link, item.image);
    const cardElement = card.generateCard();
    return cardElement;
  }

function submitAddHandler (evt) {
    evt.preventDefault();
   
    const name = cardNameAdd.value;
    const link = cardImageAdd.value;
    const alt = cardNameAdd.value;

    insertCard(elements, createCard (item.name, item.link));

   closePopup(popupAdd);
   formAdd.reset();
   
   
  
  }

    

   formAdd.addEventListener ('submit', submitAddHandler );
  
const insertCard = (elements, cardElement) => {
    elements.prepend(cardElement);
  }
 
  initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, item.image, item.heart);
    const cardElement = card.generateCard();
    document.querySelector('.elements').append(cardElement);
  });

//initialCards.forEach (({name, link}) => {
 // insertCard(elements, createCard (name, link) )
//})







    


