import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');

const formData = {};

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onTextareaInput, 500));

onGetFormData();

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function onTextareaInput(e) {
  formData.email = feedbackForm.email.value;
  formData.message = feedbackForm.message.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onGetFormData() {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saveData) {
    feedbackForm.email.value = saveData.email;
    feedbackForm.message.value = saveData.message;
  }
}
