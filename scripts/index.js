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

const popups = document.querySelectorAll('.popup')

      popups.forEach((popup) => {
          popup.addEventListener('click', (evt) => {
             if (evt.target.classList.contains('popup__button-close')) {
                closePopup(popup)
              }
          })
          document.addEventListener('keydown', function (evt) {
            if (evt.key === 'Escape') {
              closePopup(popup)
            }
          })
       /*   document.addEventListener('musedown', function (evt) {
            if (evt.target !== popups) {
              closePopup(popup)
              console.log('Работает')
         }
        })*/
      })
function closePopupOverlay () {
  document.addEventListener('click', function (evt) {
    if (evt.target !== popups) {
      closePopup(popup)
      console.log('Работает')
 }
})
}



popupOpenButton.addEventListener ('click', editProfile );

addButton.addEventListener ('click', () => openPopup(popupAdd));

const nameInput = document.querySelector ('.profile__name');
const jobInput = document.querySelector ('.profile__profession');


function submitFormHandler (evt) {
    evt.preventDefault();
    nameInput.textContent = popupNameEdit.value;
    jobInput.textContent = popupJobEdit.value;
    
    closePopup(popupEdit);
}

formEdit.addEventListener ('submit', submitFormHandler );
  

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
    popupImage.src = evt.target.src;
    popupImageName.textContent = evt.target.alt;
    popupImage.alt = evt.target.alt
    openPopup(popupView);
    
    
  }

  function createCard (name, link, alt) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const elementImage = cardElement.querySelector('.element__image');
    const elementName = cardElement.querySelector('.element__name');
    const elementHeart = cardElement.querySelector('.element__heart');
    const elementDelete = cardElement.querySelector('.element__delete');
    
    elementName.textContent = name;
    elementImage.src = link;
    elementImage.alt = name;
    
    elementHeart.addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__heart_activ');
    });

    elementDelete.addEventListener('click', (evt) => {
      evt.target.closest('.element').remove();
    });

    elementImage.addEventListener ('click', veiwImage );

    return cardElement
  }

   

  const cardNameAdd = document.querySelector('.popup__input_add_name');
  const cardImageAdd = document.querySelector('.popup__input_add_link');

  
  function submitAddHandler (evt) {
    evt.preventDefault();
   
    const name = cardNameAdd.value;
    const link = cardImageAdd.value;
    const alt = cardNameAdd.value;

    insertCard(elements, createCard (name, link, alt));

   closePopup(popupAdd);
   formAdd.reset();
  }
    

   formAdd.addEventListener ('submit', submitAddHandler );
  
   const insertCard = (elements, cardElement) => {
    elements.prepend(cardElement);
  }
 

initialCards.forEach (({name, link, alt}) => {
  insertCard(elements, createCard (name, link, alt) )
})







    


