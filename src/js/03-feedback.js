import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email= document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(() => {
    localStorage.setItem("feedback-form-state", JSON.stringify({email: email.value , message: message.value}));
  }, 500));

const localFormValue = localStorage.getItem("feedback-form-state");
const formValue = JSON.parse(localFormValue);

window.addEventListener('load', onWindowLoad);

form.addEventListener('submit', onFormSubmit);

function onWindowLoad(){
    if(formValue){
        email.value = formValue.email;
        message.value = formValue.message;
    }
};

function onFormSubmit(event){
    event.preventDefault();
    const formData = {
        email: email.value,
        message: message.value,
    };
    event.target.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(formData);
};