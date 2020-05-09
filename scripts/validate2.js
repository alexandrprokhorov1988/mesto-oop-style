const validation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
};

function showInputError(formElement, inputElement, message) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = message;
  errorElement.classList.add('form__input-error_visible');
}

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_visible');
  errorElement.textContent = '';
}

function checkInputValidity(formElement, inputElement) {
  console.log(inputElement.validationMessage);//todo
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

function hasValidInput(inputs) {
  return inputs.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputs, submitButton) {
  if (hasValidInput(inputs)) {
    submitButton.classList.add('form__submit-button_inactive');
  } else {
    submitButton.classList.remove('form__submit-button_inactive');
  }
}

function setEventListeners(formElement, inputs, submitButton) {
  inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputs, submitButton);
    });
  });
}

function enableValidation(obj) {
  const forms = Array.from(document.querySelectorAll(obj['formSelector']));
  forms.forEach((formElement) => {
    const inputs = Array.from(formElement.querySelectorAll(obj['inputSelector']));
    const submitButton = formElement.querySelector(obj['submitButtonSelector']);
    setEventListeners(formElement, inputs, submitButton);
    formElement.addEventListener('submit', function () {
      toggleButtonState(inputs, submitButton);
    });
  });
}

enableValidation(validation);





