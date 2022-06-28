

// Импортируем данные из модулей

import { Card } from './card.js';
import { initialCards, config } from './data.js';
import { FormValidator } from './formValidator.js'
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import { popupOpenButton,
  addButton,
  popupNameEdit,
  popupJobEdit,
  formEdit,
  formAdd,
  popupEdit,
  popupAdd,
  popupView,
  popups,
  nameInput,
  cardNameAdd,
  cardImageAdd,
  elements,
  jobInput,
  popupImage,
  popupImageName,
  popupAddSubmitBtn
} from './data.js'
import Popup from './Popup.js';





// Открытие попапа редактирование профиля
function editProfile () {
const newOpenPopup = new Popup (popupEdit);
newOpenPopup.openPopup(popupEdit);
newOpenPopup.setEventListeners(popupEdit);
//  openPopup(popupEdit);
    popupNameEdit.value = nameInput.textContent;
    popupJobEdit.value = jobInput.textContent;
}

// Редактирование профиля
function submitFormHandler (evt) {
  evt.preventDefault();
  nameInput.textContent = popupNameEdit.value;
  jobInput.textContent = popupJobEdit.value;
  closePopup(popupEdit);
}
/*
// Слушатель на все крестики для закрытия попапа
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
     if (evt.target.classList.contains('popup__button-close')) {
        closePopup(popup)
     }
   });
  
  document.addEventListener('click', function (evt) {
     if (evt.target === popup) {
        closePopup(popup)
     }
   });
});
*/
// Слушатели на кнопки открытия попапов
popupOpenButton.addEventListener ('click', editProfile );
addButton.addEventListener ('click', () => openPopupAdd());

// Слушатели на кнопки Сохранить в попапах
formEdit.addEventListener ('submit', submitFormHandler );
formAdd.addEventListener ('submit', submitAddHandler );


// Создание новой карточки
const creatCard  = (item) => {
    const card = new Card(item, '#element-card');
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
  }



const cardList = new Section ( {
  items: initialCards,
  renderer: creatCard,
}, elements);

cardList.renderItems();


/*
const addNewCard = new Section ( {
  items: newPopupCard,
  renderer: (item) => {
    const card = new Card(item, '#element-card');

    const cardElement = card.generateCard();

    cardList.addItem(cardElement);
  }
}, elements);
*/

/*
// Вставляем карточку
const insertCard = (name, link) => {
   elements.prepend(creatCard(name, link));

}
*/
// Создаем и вставляем новую карточку из попапа Добавить
function submitAddHandler (evt) {
    evt.preventDefault();
    const name = cardNameAdd.value;
    const link = cardImageAdd.value;
    const alt = cardNameAdd.value;
    
    creatCard(name, link)
    insertCard (name, link);
    closePopup(popupAdd);
    formAdd.reset();
}


/*
// Создаем карточки из массива и вставляем в DOM
initialCards.forEach(({name, link}) => {
     insertCard (name, link);
}); */

// Включаем валидацию для попапов
const formEditValidate = new FormValidator(formEdit, config);
formEditValidate.enableValidation();

const formAddValidate = new FormValidator(formAdd, config);
formAddValidate.enableValidation();
/*
// Открытие попапа добавить картинку
const openPopupAdd = () => {
  openPopup(popupAdd);
  formAddValidate.disableAddSubmitBtn();
}
*/
