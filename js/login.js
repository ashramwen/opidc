var username = {
    group: document.getElementsByClassName('username-group')[0],
    input: document.getElementById('inputUserName'),
    touched: false
};
var password = {
    group: document.getElementsByClassName('password-group')[0],
    input: document.getElementById('inputPassword'),
    touched: false
};
var btn = document.getElementsByClassName('btn-auth')[0];

username.input.addEventListener('focus', onTouched.bind(this, username), false);
password.input.addEventListener('focus', onTouched.bind(this, password), false);
username.input.addEventListener('blur', onInput.bind(this, username), false);
password.input.addEventListener('blur', onInput.bind(this, password), false);
username.input.addEventListener('input', onInput.bind(this, username), false);
password.input.addEventListener('input', onInput.bind(this, password), false);

function onTouched(obj) {
    obj.touched = true;
}

function onInput(obj) {
    obj.group.classList.toggle('has-error', !obj.input.checkValidity() && obj.touched);
    obj.group.classList.toggle('has-success', obj.input.checkValidity() && obj.touched);

    var isInvalid = !username.input.checkValidity() || !password.input.checkValidity();
    btn.disabled = isInvalid;
}