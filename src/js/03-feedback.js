import throttle from 'lodash.throttle';

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  feedbackFormEmail: document.querySelector('input'),
  feedbackFormMessage: document.querySelector('textarea'),
};

refs.feedbackForm.addEventListener('submit', handleOnForm);
refs.feedbackFormMessage.addEventListener(
  'input',
  throttle(handleOnMessage, 500)
);
refs.feedbackForm.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  console.log(formData);
});

const formData = {};
populateTextarea();

function handleOnForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function handleOnMessage(e) {
  const value = e.target.value;
  localStorage.setItem('feedback-form-state', value);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem('feedback-form-state');

  if (savedMessage) {
    refs.feedbackFormMessage.value = savedMessage;
  }
}
