

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
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';


const profileInfo = new UserInfo({
  name: '.profile__name',
  job: '.profile__profession'
})


// Открытие попапа редактирование профиля
function openEditPopup () {
const editProfile = new PopupWithForm (popupEdit);
const userData = profileInfo.getUserInfo();
console.log(profileInfo.getUserInfo())
popupNameEdit.value = nameInput.textContent;
popupJobEdit.value = userData.job;


  
  editProfile.open();
}
//newOpenPopup.openPopup(popupEdit);
//newOpenPopup.setEventListeners(popupEdit);
//const profile = UserInfo.getUserInfo();

//newOpenPopup.setInputValues(profile);

/*
//  openPopup(popupEdit);
 //   
 //   popupJobEdit.value = jobInput.textContent;
}
*/
/*
function openProfile() {
 // formValidators[formProfileElement.getAttribute('name')].resetValidation();
  const profile = userInfo.getUserInfo();
  formProfileUser.setInputValues(profile);
  formProfileUser.open();
};*/
/*
// Редактирование профиля
const formProfileUser = new PopupWithForm({
  popupSelector: ('.popup_profile'),
  handleFormSubmit: (item) => {
      userInfo.setUserInfo(item);
  }
});*/
/*
function submitFormHandler (evt) {
  evt.preventDefault();
  nameInput.textContent = popupNameEdit.value;
  jobInput.textContent = popupJobEdit.value;

 // closePopup(popupEdit);
}*/

// Слушатели на кнопки открытия попапов
popupOpenButton.addEventListener ('click', () => openEditPopup());
//addButton.addEventListener ('click', () => openPopupAdd());

// Слушатели на кнопки Сохранить в попапах
//formEdit.addEventListener ('submit', submitFormHandler );
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
