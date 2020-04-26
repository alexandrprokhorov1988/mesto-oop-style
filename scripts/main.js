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
  }
];

const popupEditButton = document.querySelector(".profile__edit-button");
const popupAddButton = document.querySelector(".profile__add-button");
const popups = document.querySelectorAll('.popup');
const nameInput = document.querySelector('[name=name]');
const jobInput = document.querySelector('[name=profession]');
const imgInput = document.querySelector('[name=imgName]');
const linkInput = document.querySelector('[name=link]');
const nameField = document.querySelector(".profile__user-name");
const jobField = document.querySelector(".profile__user-profession");
const editForm = document.querySelector("#editForm");
const addForm = document.querySelector("#addForm");
const editPopup = document.querySelector("#editPopup");
const addPopup = document.querySelector("#addPopup");
const sectionElements = document.querySelector('.elements');
const imgPopup = document.querySelector('#imgPopup');
const img = imgPopup.querySelector('.popup__image');
const imgTitle = imgPopup.querySelector('.popup__image-title');

function changeLike() {
  this.classList.toggle("card__like_active");
}

function showImgPopup(link, title) {
  img.src = link;
  imgTitle.textContent = title;
  togglePopup(imgPopup);
}

function removeCard() {
  this.closest('.card').remove();
}

function cloneCards(name, link, alt = 'Картинка.') {
  const card = document.querySelector('#card').content;
  const cardElement = card.cloneNode(true);
  const cardImg = cardElement.querySelector('.card__img');
  const cardTitle = cardElement.querySelector('.card__title');
  const buttonCardLike = cardElement.querySelector('.card__like');
  const cardDeleteButton = cardElement.querySelector('.card__delete');
  cardImg.src = link;
  cardImg.alt = alt;
  cardTitle.textContent = name;
  sectionElements.prepend(cardElement);
  buttonCardLike.addEventListener("click", changeLike);
  cardImg.addEventListener('click', function () {
    showImgPopup(cardImg.src, cardTitle.textContent);
  });
  cardDeleteButton.addEventListener('click', removeCard);
}

function addTextFromDOMtoInput() {
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
}

function togglePopup(element) {
  element.classList.toggle("popup_opened");
}

function formSubmitHandlerEdit(event) {
  event.preventDefault();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  togglePopup(editPopup);
}

function formSubmitHandlerAdd(event) {
  event.preventDefault();
  cloneCards(imgInput.value, linkInput.value);
  imgInput.value = '';
  linkInput.value = '';
  togglePopup(addPopup);
}

function closePopup(event, element) {
  if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close-icon')) {
    element.classList.remove("popup_opened");
  }
}

initialCards.forEach(element => {
  cloneCards(element['name'], element['link'], element['alt'])
});
imgPopup.addEventListener('click', function () {
  togglePopup(imgPopup);
});
popupEditButton.addEventListener("click", function () {
  togglePopup(editPopup);
  addTextFromDOMtoInput();
});
popupAddButton.addEventListener("click", function () {
  togglePopup(addPopup);
});
editForm.addEventListener('submit', formSubmitHandlerEdit);
addForm.addEventListener('submit', formSubmitHandlerAdd);
popups.forEach(function (element) {
  element.addEventListener('click', function (event) {
    closePopup(event, element);
  })
});


