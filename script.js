const singInBtnLink = document.querySelector('.signInBtn-link');
const singUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

function wrapperToggleVisability() {
    wrapper.classList.toggle('active');
}

singUpBtnLink.addEventListener('click', wrapperToggleVisability);
singInBtnLink.addEventListener('click', wrapperToggleVisability);