const popapOpenButton = document.querySelector('.profile__edit-button');
const popap = document.querySelector('.popap');
const popapCloseButton = document.querySelector('.popup__close-popup');
const popapSubmitBtn = document.querySelector ('.popup__button');

popapOpenButton.addEventListener('click', function (){
    popap.classList.toggle('popap_opened');
})

popapCloseButton.addEventListener('click', function () {
    popap.classList.toggle('popap_opened');
})

let formElement = document.querySelector ('.profile__info');
let nameInput = document.querySelector ('.profile__name');
let jobInput = document.querySelector ('.profile__profession');


let popapNameEdit = document.querySelector('.popup__input_name');
popapNameEdit.value = nameInput.textContent;

let popapJobEdit = document.querySelector('.popup__input_job');
popapJobEdit.value = jobInput.textContent;


function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.value = document.getElementById('name').value;
    nameInput.textContent = nameInput.value;
    jobInput.value = document.getElementById('job').value;
    jobInput.textContent = jobInput.value;
    popap.classList.toggle('popap_opened');
}

popapSubmitBtn.addEventListener('click', formSubmitHandler);

