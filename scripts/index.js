const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-popup');
const popupForm = document.querySelector ('.profile-info');
let popupNameEdit = document.querySelector('.popup__input_type_name');
let popupJobEdit = document.querySelector('.popup__input_type_job');

function openPopup () {
    popup.classList.toggle('popup_opened');
    popupNameEdit.value = nameInput.textContent;
   popupJobEdit.value = jobInput.textContent;
}

popupOpenButton.addEventListener ('click', openPopup )
   
   



popupCloseButton.addEventListener ('click', openPopup )


/*let formElement = document.querySelector ('.profile__info');*/
let nameInput = document.querySelector ('.profile__name');
let jobInput = document.querySelector ('.profile__profession');

/*let newName = document.getElementById('name');
let newJob = document.getElementById ('job');*/

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.textContent = popupNameEdit.value;
    jobInput.textContent = popupJobEdit.value;
    openPopup ();
}

form.addEventListener ('submit', formSubmitHandler);


