const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-popup');
let popupNameEdit = document.querySelector('.popup__input_type_name');
let popupJobEdit = document.querySelector('.popup__input_type_job');
let form = document.querySelector ('.form');

function openPopup () {
    popup.classList.add('popup_opened');
    popupNameEdit.value = nameInput.textContent;
   popupJobEdit.value = jobInput.textContent;
}

function closePopup () {
    popup.classList.remove('popup_opened');
    
}
popupOpenButton.addEventListener ('click', openPopup )
 
popupCloseButton.addEventListener ('click', closePopup )

let nameInput = document.querySelector ('.profile__name');
let jobInput = document.querySelector ('.profile__profession');

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.textContent = popupNameEdit.value;
    jobInput.textContent = popupJobEdit.value;
    closePopup ();
}

form.addEventListener ('submit', formSubmitHandler );



