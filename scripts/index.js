const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-popup');
let popupNameEdit = document.querySelector('.popup__input_type_name');
let popupJobEdit = document.querySelector('.popup__input_type_job');
let formElement = document.querySelector ('.profile-form');

function openPopup () {
    popup.classList.toggle('popup_opened');
    popupNameEdit.value = nameInput.textContent;
   popupJobEdit.value = jobInput.textContent;
}

popupOpenButton.addEventListener ('click', openPopup )
 
popupCloseButton.addEventListener ('click', openPopup )

let nameInput = document.querySelector ('.profile__name');
let jobInput = document.querySelector ('.profile__profession');

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.textContent = popupNameEdit.value;
    jobInput.textContent = popupJobEdit.value;
    openPopup ();
}

form.addEventListener ('submit', formSubmitHandler );


