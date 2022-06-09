
export class Card {
    // создать карточку из шаблона
    constructor (name, image) {
      this._name = name;
      this._image = image;
    }
    
      _getTemplate() {
        const cardElement = document
          .querySelector('#element-card')
          .content
          .querySelector('.card')
          .cloneNode(true);
    
        return cardElement;
      }


      generateCard() {
       
        this._cardElement = this._getTemplate();
        this._setEventListeners();    
        this._cardElement.querySelector('.card__image').src = this._image;
        this._cardElement.querySelector('.card__name').textContent = this._name;

        this._heart = this._cardElement.querySelector('.card__heart');
        // this.element.querySelector('.element__delete') = this._delete;

        return this._cardElement;
      }   
    //  _handleOpenPopup () {
      //  popupImage.src = this._image;
     //   popupElement.classList.add('popup_is-opend');
     // }
     _setEventListeners() {
      this._cardElement.querySelector('.card__image').addEventListener('click', () => {
        console.log('djdjd')
       // this._handleMessageClick();
      });
    }
    /*  _setEventListeners() {
        this._heart.addEventListener('click', () => {
          console.log('Сердце работает');
        this._handleOpenPopup ();// откройте попап
      });*/

    // добавить карточку в дом
}

/*function createCard (name, link) {
   // const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  //  const elementImage = cardElement.querySelector('.element__image');
    const elementName = cardElement.querySelector('.element__name');
    const elementHeart = cardElement.querySelector('.element__heart');
    const elementDelete = cardElement.querySelector('.element__delete');
    
    elementName.textContent = name;
    elementImage.src = link;
    elementImage.alt = name;
    
    elementHeart.addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__heart_activ');
    });

    elementDelete.addEventListener('click', (evt) => {
      evt.target.closest('.element').remove();
    });

    elementImage.addEventListener ('click', veiwImage );

    return cardElement
  */