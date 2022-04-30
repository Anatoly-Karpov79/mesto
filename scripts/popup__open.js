const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-popup');
const popupSubmitBtn = document.querySelector ('.popup__button');

popupOpenButton.addEventListener('click', function (){
    popup.classList.toggle('popup_opened');
})

popupCloseButton.addEventListener('click', function () {
    popup.classList.toggle('popup_opened');
})

let formElement = document.querySelector ('.profile__info');
let nameInput = document.querySelector ('.profile__name');
let jobInput = document.querySelector ('.profile__profession');


let popupNameEdit = document.querySelector('.popup__input_name');
popupNameEdit.value = nameInput.textContent;

let popupJobEdit = document.querySelector('.popup__input_job');
popupJobEdit.value = jobInput.textContent;


function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.value = document.getElementById('name').value;
    nameInput.textContent = nameInput.value;
    jobInput.value = document.getElementById('job').value;
    jobInput.textContent = jobInput.value;
    popup.classList.toggle('popup_opened');
}

popupSubmitBtn.addEventListener('click', formSubmitHandler);

