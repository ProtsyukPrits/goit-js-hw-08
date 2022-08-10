import throttle from 'lodash.throttle';

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  feedbackFormEmail: document.querySelector('input'),
  feedbackFormMessage: document.querySelector('textarea'),
};

  refs.feedbackForm.addEventListener('submit', handleOnForm);
  refs.feedbackForm.addEventListener(
    'input',
    throttle(handleOnMessage, 500)
  );

  const STORAGE_KEY = 'feedback-form-state';

if (localStorage.getItem(STORAGE_KEY)) {
  populateTextarea();
}

function handleOnForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function handleOnMessage(e) {
  let savedMessage = (localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    savedMessage = JSON.parse(savedMessage);
  } else {
    savedMessage = {};
  }

  savedMessage[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedMessage));
  console.log(savedMessage)
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage.email) {
    refs.feedbackFormEmail.value = savedMessage.email;
  }

  if (savedMessage.message) {
    refs.feedbackFormMessage.value = savedMessage.message;
  }
}
