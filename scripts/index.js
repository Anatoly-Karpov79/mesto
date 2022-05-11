const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-popup');
const addButton = document.querySelector('.profile__add-button');
const popupAddCloseBtn = document.querySelector('.popup__add-close');
let popupNameEdit = document.querySelector('.popup__input_type_name');
let popupJobEdit = document.querySelector('.popup__input_type_job');
const form = document.querySelector ('.form');
const formAdd = document.querySelector('#form__add');
const popupEdit = document.querySelector('.popap__edit');
const popupAdd = document.querySelector('.popup__add');
const popupView = document.querySelector('.popup__view');
 

function openPopup (event) {
  event.classList.add('popup_opened');
}

function closePopup (event) {
    event.classList.remove('popup_opened');
}
function editProfile () {
  openPopup(popupEdit);
    popupNameEdit.value = nameInput.textContent;
    popupJobEdit.value = jobInput.textContent;
}

popupOpenButton.addEventListener ('click', editProfile );
popupCloseButton.addEventListener ('click', () => closePopup(popupEdit) );

addButton.addEventListener ('click', () => openPopup(popupAdd));
popupAddCloseBtn.addEventListener ('click', () => closePopup(popupAdd));



let nameInput = document.querySelector ('.profile__name');
let jobInput = document.querySelector ('.profile__profession');


function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.textContent = popupNameEdit.value;
    jobInput.textContent = popupJobEdit.value;
    
    closePopup(popupEdit);
}

form.addEventListener ('submit', formSubmitHandler );
  

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
  /*  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },*/
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

  const cardTemplate = document.querySelector('#element').content;
  const elements = document.querySelector('.elements')

  function createCard (name, link) {
    const element = cardTemplate.cloneNode(true);
    const elementImage = element.querySelector('.element__image');
    const elementName = element.querySelector('.element__name');
    const elementHeart = element.querySelector('.element__heart');
    elementImage.src = link;
    elementName.textContent = name;
     elements.prepend(element);

  }
  initialCards.forEach (({name,link}) => createCard(name,link));
   
  const cardNameAdd = document.querySelector('.popup__input_add_name').value;
  const cardImageAdd = document.querySelector('.popup__input_add_link').value;

  const newCard = [
    {
      name: cardNameAdd.textContent,
      link: cardImageAdd.src
    }
  ]

  function submitAddHandler (evt) {
    evt.preventDefault();
    newCard.forEach (({name,link}) => createCard(name,link));
    
      
    
    console.log ('Hello');
    

   closePopup(popupAdd);
  }
    
  

   formAdd.addEventListener ('submit', submitAddHandler );
  

  /*
  
  
  
  
  
  function addCard (evt) {
    evt.preventDefault();
    const cardElement = cardTemplate.cloneNode(true);
        cardElement.querySelector('.popup__input_add_name').textContent = element.name;
      cardElement.querySelector('.popup__input_add_link').src = element.link;
     element.name = cardNameAdd.value;
     element.link = cardImageAdd.value;
     
  
     console.log (element.name);
    console.log (element.link);
    elements.prepend(cardElement); 
    closePopupAdd ();
  }

  
  initialCards.forEach (function (element) {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.element__name').textContent = element.name;
    cardElement.querySelector('.element__image').src = element.link;
    
    elements.append(cardElement); 
  });*/









    


