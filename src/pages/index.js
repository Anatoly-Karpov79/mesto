// Импортируем данные из модулей
import './index.css';


import { Card } from "../scripts/card.js";
import { initialCards, config } from "../scripts/data.js";
import { FormValidator } from "../scripts/formValidator.js";
import Section from "../scripts/Section.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import {
  popupOpenButton,
  addButton,
  popupNameEdit,
  popupJobEdit,
  formEdit,
  formAdd,
  popupView,
} from "../scripts/data.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import UserInfo from "../scripts/UserInfo.js";

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
