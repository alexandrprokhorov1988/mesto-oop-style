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
    name: 'Калитка',
    link: 'images/card-winter-1.jpg',
    alt: 'Калитка.',
  }
];

const popupEditButton = document.querySelector(".profile__edit-button");
const popupAddButton = document.querySelector(".profile__add-button");
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
const sectionElement = document.querySelector('.elements');
const imgPopup = document.querySelector('#imgPopup');
const img = imgPopup.querySelector('.popup__image');
const imgTitle = imgPopup.querySelector('.popup__image-title');

const changeLike = function (e) {
  if (e.target.classList.contains('card__like')) {
    e.target.classList.toggle('card__like_active');
  }
};

const showImgPopup = function (e) {
  if (e.target.classList.contains('card__img')) {
    img.src = e.target.src;
    imgTitle.textContent = e.target.title;
    console.log(e.target);
    togglePopup(imgPopup);
  }
};

const removeCard = function (e) {
  if (e.target.classList.contains('card__delete')) {
    e.target.closest('.card').remove();
  }
};

const cloneCards = function (name, link, alt = 'Картинка.') {
  const card = document.querySelector('#card').content;
  const cardElement = card.cloneNode(true);
  const cardImg = cardElement.querySelector('.card__img');
  const cardTitle = cardElement.querySelector('.card__title');
  cardImg.src = link;
  cardImg.alt = alt;
  cardTitle.textContent = name;
  return cardElement;
};

const addTextFromDOMtoInput = function () {
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
};

const togglePopup = function (element) {
  element.classList.toggle("popup_opened");
};

const formSubmitHandlerEdit = function (event) {
  event.preventDefault();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  togglePopup(editPopup);
};

const insertPrependInDom = function (parentNode, childNode) {
  parentNode.prepend(childNode);
};

const formSubmitHandlerAdd = function (event) {
  event.preventDefault();
  insertPrependInDom(sectionElement, cloneCards(imgInput.value, linkInput.value));
  imgInput.value = '';
  linkInput.value = '';
  togglePopup(addPopup);
};

function showCards() {
  initialCards.forEach(element => {
    insertPrependInDom(sectionElement, cloneCards(element['name'], element['link'], element['alt']));
  });
}

const closePopup = function (event) {
  if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close-icon')) {
    event.target.closest('.popup').classList.remove("popup_opened");
  }
};

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

showCards();

sectionElement.addEventListener('click', changeLike);
sectionElement.addEventListener('click', removeCard);
sectionElement.addEventListener('click', showImgPopup);
document.addEventListener('click', closePopup);