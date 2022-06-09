class Card {
    // создать карточку из шаблона
    constructor (name, link)

    // наполнить карточку данными
    _getTemplate() {
        const cardElement = document
          .querySelector('.element')
          .content
          .querySelector('.card')
          .cloneNode(true);
    
        return cardElement;
      }
    // добавить карточку в дом
}

function createCard (name, link) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const elementImage = cardElement.querySelector('.element__image');
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
  }