export default class UserInfo {
    constructor({ name, job }) {
        this._userName = document.querySelector(name);
        this._userJob = document.querySelector(job);
       

    };
    getUserInfo() {
        const lastName = this._userName.textContent;
        const lastJob = this._userJob.textContent;
     
        return {lastName, lastJob};
        
    };

    // Добавляем данные пользователя на страницу
    setUserInfo = ( {userName, userJob} ) => {
        console.log({userName, userJob});
         this._userName.textContent = userName;
         this._userJob.textContent = userJob;
        
    };
    
};
