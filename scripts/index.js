// Импортируем данные из модулей

import { Card } from "./card.js";
import { initialCards, config } from "./data.js";
import { FormValidator } from "./formValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import {
  popupOpenButton,
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
  popupAddSubmitBtn,
} from "./data.js";
import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";



const profileInfo = new UserInfo({
  name: ".profile__name",
  job: ".profile__profession",
});



const editProfile = new PopupWithForm({
  popupSelector: '.popup_edit',

  submitFormHandler: (data) => {
    
    profileInfo.setUserInfo(data)

    editProfile.close();
  },
});


editProfile.setEventListeners();

// Слушатели на кнопки открытия попапов
popupOpenButton.addEventListener("click", () => {
  const { lastName, lastJob } = profileInfo.getUserInfo();
  popupNameEdit.value = lastName;
  popupJobEdit.value = lastJob;

  editProfile.open();
}); 




const addCardPopup = new PopupWithForm({
  popupSelector: '.popup_add',

  submitFormHandler: (data) => {

    cardList.addItem(creatCard(data))
//  console.log(data)

   addCardPopup.close();
  },
});


addButton.addEventListener ('click', () => {
  addCardPopup.open()
 
} );



addCardPopup.setEventListeners();


// Создание новой карточки
const creatCard = (item) => {
  const card = new Card({data: item}, "#element-card");
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: creatCard,
  },
  elements
);

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
/*


/*
// Создаем карточки из массива и вставляем в DOM
initialCards.forEach(({name, link}) => {
     insertCard (name, link);
}); */

/*

// Включаем валидацию для попапов
const formEditValidate = new FormValidator(formEdit, config);
formEditValidate.enableValidation();

const formAddValidate = new FormValidator(formAdd, config);
formAddValidate.enableValidation();
*/
/*

// Открытие попапа добавить картинку
const openPopupAdd = () => {
  openPopup(popupAdd);
  formAddValidate.disableAddSubmitBtn();
}
*/
