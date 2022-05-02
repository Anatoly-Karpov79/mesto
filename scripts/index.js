const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupForm = document.querySelector ('.profile-info');

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

let nameInput = document.querySelector ('.profile__name');
let jobInput = document.querySelector ('.profile__profession');
let popupNameEdit = document.querySelector('.popup__input_type_name');
let popupJobEdit = document.querySelector('.popup__input_type_job');
let newName = document.getElementById('name');
let newJob = document.getElementById ('job');

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.textContent = newName.value;
    jobInput.textContent = newJob.value;
    openPopup ();
}

popupForm.addEventListener ('submit', formSubmitHandler);

