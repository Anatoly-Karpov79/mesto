// Импортируем данные из модулей
import './index.css';


import { Card } from "../components/Card.js";
import { initialCards, config } from "../utils/data.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {
  popupOpenButton,
  addButton,
  popupNameEdit,
  popupJobEdit,
  formEdit,
  formAdd,
  popupView,
  avatarImage,
  formAvatar,
} from "../utils/data.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Popup from "../components/Popup.js";

avatarImage.addEventListener("click", () => {
  
  editAvatar.open();
});
const editAvatar = new PopupWithForm({
  popupSelector: ".popup_avatar",

  submitFormHandler: () => {
  //  profileInfo.setUserInfo(data);
    editAvatar.close();
  },
});
editAvatar.setEventListeners();


const profileInfo = new UserInfo({
  name: ".profile__name",
  job: ".profile__profession",
});

const editProfile = new PopupWithForm({
  popupSelector: ".popup_edit",

  submitFormHandler: (data) => {
    profileInfo.setUserInfo(data);
    editProfile.close();
  },
});

editProfile.setEventListeners();

// Попап подтверждения удаления
//const confirmDelete = new Popup ('.popup_confirm')
 
//confirmDelete.setEventListeners();

const confirmDelete = new PopupWithForm({
  popupSelector: ".popup_confirm",

  submitFormHandler: () => {
    console.log(this._cardElement)
   // profileInfo.setUserInfo(data);
   confirmDelete.close();
  },
});
confirmDelete.setEventListeners();


// Слушатели на кнопки открытия попапов
popupOpenButton.addEventListener("click", () => {
  const { lastName, lastJob } = profileInfo.getUserInfo();
  popupNameEdit.value = lastName;
  popupJobEdit.value = lastJob;

  editProfile.open();
});

const addCardPopup = new PopupWithForm({
  popupSelector: ".popup_add",

  submitFormHandler: (data) => {
    cardList.addItem(creatCard(data));

    addCardPopup.close();
  },
});

addButton.addEventListener("click", () => {
  addCardPopup.open();
  formAddValidate.disableAddSubmitBtn();
});

addCardPopup.setEventListeners();

const imagePopup = new PopupWithImage(".popup_view");

imagePopup.setEventListeners(popupView);

// Создание новой карточки
const creatCard = (item) => {
  const card = new Card(
    {
      data: item,
      handleCardClick: () => {
        imagePopup.open(item);
      },
      hendleDelete: () => {
        confirmDelete.open();
      },
    },
    "#element-card"
  );
  return card.generateCard();
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(creatCard(item));
    },
  },
  ".elements"
);

cardList.renderItems();

// Включаем валидацию для попапов
const formEditValidate = new FormValidator(formEdit, config);
formEditValidate.enableValidation();

const formAddValidate = new FormValidator(formAdd, config);
formAddValidate.enableValidation();

const formAvatarValidate = new FormValidator(formAvatar, config);
formAvatarValidate.enableValidation();
