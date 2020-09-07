export default class Form {
    constructor(forms){
        this.forms = document.querySelectorAll(forms);
        this.messege = {
            loading: 'Загрузка...',
            success: 'Успешно отправлено, скоро мы с Вами свяжемся.',
            failure: 'Что-то пошло не так...'
        };
        this.path = 'assets/questions.php';
        this.inputs = document.querySelectorAll('input');
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    clearInputs(){
        this.inputs.forEach(input => {
            input.value = '';
        })
    }

    init(){
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessege = document.createElement('div');
                statusMessege.style.cssText = ` 
                    margin-top: 15px;
                    font-size: 18px;
                    color: grey;
                `
                form.parentNode.appendChild(statusMessege);

                statusMessege.textContent = this.messege.loading;

                const formData = new FormData(form);
                this.postData(this.path, formData)
                    .then(res => {
                        statusMessege.textContent = this.messege.success
                        console.log(res);
                    })
                    .catch(() => {
                        statusMessege.textContent = this.messege.failure
                    })
                    .finally(() => {
                        this.clearInputs();
                        setTimeout(() => {
                            statusMessege.remove();
                        }, 3000);
                    })
            });
        });
    }
}