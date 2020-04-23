const initialCards = [
  {
    name: 'Дорога',
    link: 'images/card-winter-6.jpg',
    alt: 'Дорога.',
  },
  {
    name: 'Дом',
    link: 'images/card-winter-5.jpg',
    alt: 'Дом.',
  },
  {
    name: 'Деревья',
    link: 'images/card-winter-4.jpg',
    alt: 'Деревья.',
  },
  {
    name: 'Пруд',
    link: 'images/card-winter-3.jpg',
    alt: 'Пруд под снегом.',
  },
  {
    name: 'Солнце',
    link: 'images/card-winter-2.jpg',
    alt: 'Дорога в снегу.',
  },
  {
    name: 'Открытая калитка',
    link: 'images/card-winter-1.jpg',
    alt: 'Открытая калитка.',
  },
];

const popupEditButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupCloseIcon = document.querySelector(".popup__close-icon");
const nameInput = document.querySelector('[name=name]');
const jobInput = document.querySelector('[name=profession]');
const nameField = document.querySelector(".profile__user-name");
const jobField = document.querySelector(".profile__user-profession");
const formElement = document.querySelector(".form");
const card = document.querySelector('#card').content;
const sectionElements = document.querySelector('.elements');

function cloneCards(name, link, alt = 'Картинка.') {
  const cardElement = card.cloneNode(true);
  const cardImg = cardElement.querySelector('.card__img');
  const cardTitle = cardElement.querySelector('.card__title');
  cardImg.src = link;
  cardImg.alt = alt;
  cardTitle.textContent = name;
  sectionElements.prepend(cardElement);
}

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

initialCards.forEach(element => {
  cloneCards(element['name'], element['link'], element['alt'])
});