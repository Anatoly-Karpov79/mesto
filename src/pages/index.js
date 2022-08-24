// Импортируем данные из модулей
import "./index.css";

import Api from "../components/Api";
import { Card } from "../components/Card.js";
import { config } from "../utils/data.js";
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

const api = new Api({
  baseUrl: `https://mesto.nomoreparties.co/v1/cohort-45`,
  headers: {
    authorization: "c04a1622-0598-4071-90e7-6743c1c11c46",
    "Content-Type": "application/json",
  },
});

avatarImage.addEventListener("click", () => {
  editAvatar.open();
});
const editAvatar = new PopupWithForm({
  popupSelector: ".popup_avatar",

  submitFormHandler: (data) => {
    editAvatar.isSaving(true);
      api.changeAvatar(data)
        .then(res => {
        profileInfo.setUserInfo(res);
         editAvatar.close()
      })
   
    .catch((err) => console.log(err))
    .finally(() => {
      editAvatar.isSaving(false);
    });
  },
});
editAvatar.setEventListeners();

const profileInfo = new UserInfo({
  name: ".profile__name",
  about: ".profile__profession",
  avatar: ".profile__avatar-image",
});

const editProfile = new PopupWithForm({
  popupSelector: ".popup_edit",

  submitFormHandler: (data) => {
    editProfile.isSaving(true);
      api.changeProfile(data.name, data.about)

      .then(res => {
  profileInfo.setUserInfo(res);
        editProfile.close()
      })
      .catch((err) => console.log(err))
      .finally(() => {
        editProfile.isSaving(false);
      });
 
  },
});

editProfile.setEventListeners();

// Попап подтверждения удаления
//const confirmDelete = new Popup ('.popup_confirm')

//confirmDelete.setEventListeners();

const confirmDelete = new PopupWithForm({
  popupSelector: ".popup_confirm",

  submitFormHandler: () => {
    console.log(this._cardElement);
    // profileInfo.setUserInfo(data);
    confirmDelete.close();
  },
});
confirmDelete.setEventListeners();

// Слушатели на кнопки открытия попапов
popupOpenButton.addEventListener("click", () => {
  const { name, about } = profileInfo.getUserInfo();
  popupNameEdit.value = name;
  popupJobEdit.value = about;

  editProfile.open();
});

const addCardPopup = new PopupWithForm({
  popupSelector: '.popup_add',
  submitFormHandler: (data) => {
    addCardPopup.isSaving(true);
    api.addCard(data)
      .then((data) => {
        cardList.addNewItem(creatCard(data, data.owner._id));
        
        addCardPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      })
      .finally(() => {
        addCardPopup.isSaving(false);
      });
  }
});

addButton.addEventListener("click", () => {
  addCardPopup.open();
  formAddValidate.disableAddSubmitBtn();
});

addCardPopup.setEventListeners();

const imagePopup = new PopupWithImage(".popup_view");

imagePopup.setEventListeners(popupView);

// Создание новой карточки
const creatCard = (item, userId) => {
  const card = new Card(
    {
      data: item,
    //  userId: currentUserId,
    
      handleCardClick: () => {
        imagePopup.open(item);
      },
      hendleDelete: () => {
        confirmDelete.open();
      },
     
      handleCardLikeSetting: (cardId) => {
        api.setLike(cardId)
          .then((data) => {
          card.updateLikes(data);
          })
          .catch((err) => {
            console.log(`Ошибка ${err}`);
          });
      },
      handleCardLikeRemoving: (cardId) => {
        api.removeLike(cardId)
          .then((data) => {
            card.updateLikes(data);
          })
          .catch((err) => {
            console.log(`Ошибка ${err}`);
          });
      }
    },
    "#element-card"
  ); 
  return card.generateCard();
};
let currentUserId = null;

Promise.all([api.getInitialCards(), api.getProfile()])
  .then(([cards, user]) => {
   // currentUserId = user._id;
    cardList.renderItems(cards, user._id);
    profileInfo.setUserInfo(user);
  })
  .catch((err) => {
    console.log(err);
  });

const cardList = new Section(
  {
    renderer: (item, userId) => {
      cardList.addItem(creatCard(item, userId));
    },
  },
  ".elements"
);
function statusLike(id, status) {
  if (status === 'true') {
      api.setLike(id)
          .catch((err) => {
              console.log(err);
          })
  } else {
      api.removeLike(id)
          .catch((err) => {
              console.log(err);
          })
  };
};

// Включаем валидацию для попапов
const formEditValidate = new FormValidator(formEdit, config);
formEditValidate.enableValidation();

const formAddValidate = new FormValidator(formAdd, config);
formAddValidate.enableValidation();

const formAvatarValidate = new FormValidator(formAvatar, config);
formAvatarValidate.enableValidation();
