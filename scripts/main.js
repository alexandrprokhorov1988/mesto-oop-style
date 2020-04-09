const popupEditButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const nameInput = document.querySelector('[name=name]');
const jobInput = document.querySelector('[name=profession]');
const nameField = document.querySelector(".profile__user-name");
const jobField = document.querySelector(".profile__user-profession");
const formElement = document.querySelector(".form");
const popupCloseIcon = document.querySelector(".popup__close-icon");

function togglePopup() {
    popup.classList.toggle("popup_opened");
    nameInput.value = nameField.textContent;
    jobInput.value = jobField.textContent;
}

function closePopup(event) {
    if (event.target === popup || event.target === popupCloseIcon) {
        popup.classList.toggle("popup_opened");
    }
}

function formSubmitHandler(event) {
    event.preventDefault();
    nameField.textContent = nameInput.value;
    jobField.textContent = jobInput.value;
    popup.classList.toggle("popup_opened");
}

popupEditButton.addEventListener("click", togglePopup);
popup.addEventListener("click", closePopup);
formElement.addEventListener('submit', formSubmitHandler);