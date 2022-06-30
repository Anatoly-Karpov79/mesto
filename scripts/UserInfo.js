export default class UserInfo {
    constructor({ name, job }) {
        this._userName = document.querySelector(name);
        this._userJob = document.querySelector(job);
       

    };
    getUserInfo() {
        const name = this._userName.textContent;
        const job = this._userJob.textContent;
      
        return {name, job};
        
    };

    // Добавляем данные пользователя на страницу
    setUserInfo = ({ name, job }) => {
        if(name) {this._name.textContent = name;};
        if(job) {this._job.textContent = job;};
    };
};
