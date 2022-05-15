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
const popupViewCloseBtn = document.querySelector('.popup__view-close');

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
popupViewCloseBtn.addEventListener ('click', () => closePopup(popupView));

let nameInput = document.querySelector ('.profile__name');
let jobInput = document.querySelector ('.profile__profession');


function submitFormHandler (evt) {
    evt.preventDefault();
    nameInput.textContent = popupNameEdit.value;
    jobInput.textContent = popupJobEdit.value;
    
    closePopup(popupEdit);
}

form.addEventListener ('submit', submitFormHandler );
  

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
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

  const cardTemplate = document.querySelector('#element').content;
  const elements = document.querySelector('.elements');
  const popupImage = document.querySelector('.popup__view-img');
  const popupImageName = document.querySelector('.popup__view-name');
  
  
  function veiwImage (evt) {
    console.dir(evt.target)
    popupImage.src = evt.target.src;
    popupImageName.textContent = evt.target.alt;
    popupImage.alt = evt.target.alt
    openPopup(popupView);
    
    
  }

  function createCard (name, link, alt) {
    const element = cardTemplate.querySelector('.element').cloneNode(true);
    const elementImage = element.querySelector('.element__image');
    const elementName = element.querySelector('.element__name');
    const elementHeart = element.querySelector('.element__heart');
    const elementDelete = element.querySelector('.element__delete');
    
    elementName.textContent = name;
    elementImage.src = link;
    elementImage.alt = name;
    
    elementHeart.addEventListener('click', (evt) => {
      evt.target.classList.add('element__heart_activ');
    });

    elementDelete.addEventListener('click', (evt) => {
      evt.target.closest('.element').remove();
    });

    elementImage.addEventListener ('click', veiwImage );

    elements.prepend(element);
       
  }

  initialCards.forEach (({name, link, alt}) => createCard(name, link, alt));
   
  const cardNameAdd = document.querySelector('.popup__input_add_name');
  const cardImageAdd = document.querySelector('.popup__input_add_link');

  
  function submitAddHandler (evt) {
    evt.preventDefault();
   
    const name = cardNameAdd.value;
    const link = cardImageAdd.value;
    const alt = cardNameAdd.value;

    createCard(name,link,alt);

   closePopup(popupAdd);
   formAdd.reset();
  }
    

   formAdd.addEventListener ('submit', submitAddHandler );
  
   








    


