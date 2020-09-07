export default class CheckMailInputs{
    init() {
        const txtInputs = document.querySelectorAll('[type="email"]');

        txtInputs.forEach(input => {
            input.addEventListener('keypress', function (e) {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            });
        });
    }
}