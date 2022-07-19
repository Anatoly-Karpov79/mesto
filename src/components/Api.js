export default class Api {
    constructor({headers}) {
        this.headers = headers
      // тело конструктора
    }
    getProfile() {
      return fetch(`https://mesto.nomoreparties.co/v1/cohort-45/users/me`, {
           
           headers: this._headers

         })
         .then(res => {
             if (res.ok) {
               return res.json();
             }
             // если ошибка, отклоняем промис
         return Promise.reject(`Ошибка хрень какая-то: ${res.status}`);
     });
       
   }

    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-45/cards', {
          headers: this.headers
          
        })
          .then(res => {
            if (res.ok) {
              return res.json();
              
            }
          
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
          });
          
      } 
      
      
  
    // другие методы работы с API
  }