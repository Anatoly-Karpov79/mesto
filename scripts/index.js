const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-popup');
const popupSubmitBtn = document.querySelector ('.popup__button');

function openPopup () {
    popup.classList.toggle('popup_opened');
}

popupOpenButton.addEventListener('click', function (event){
   openPopup ();
   popupNameEdit.value = nameInput.textContent;
   popupJobEdit.value = jobInput.textContent;

})

popupCloseButton.addEventListener('click', function (event) {
    openPopup ();
})

let formElement = document.querySelector ('.profile__info');
let nameInput = document.querySelector ('.profile__name');
let jobInput = document.querySelector ('.profile__profession');
let popupNameEdit = document.querySelector('.popup__input_type_name');
let popupJobEdit = document.querySelector('.popup__input_type_job');
let newName = 

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.value = document.getElementById('name').value;
    nameInput.textContent = nameInput.value;
    jobInput.value = document.getElementById('job').value;
    jobInput.textContent = jobInput.value;
    popup.classList.toggle('popup_opened');
}

popupSubmitBtn.addEventListener('click', formSubmitHandler);

