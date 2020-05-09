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
const allPopups = Array.from(document.querySelectorAll('.popup'));
const card = document.querySelector('#card').content;


const togglePopup = (element) => {
  element.classList.toggle("popup_opened");
};
const removeCloseEvents = () => {
  document.removeEventListener('keydown', closePopupKey);
};
const setCloseEvents = () => {
  document.addEventListener('keydown', closePopupKey);
};

const closePopup = () => {
  const openedPopup = document.querySelector('.popup_opened');
  togglePopup(openedPopup);
  removeCloseEvents();
};


const closePopupOverlay = (e) => {
  if (e.target.classList.contains('popup') || e.target.classList.contains('popup__close-icon')) {
    closePopup();
  }
};

const setButtonCloseEvents = () => {
  allPopups.forEach((elem) => {
    elem.addEventListener('click', closePopupOverlay);
  });
};

setButtonCloseEvents();
const closePopupKey = (event) => {
  if (event.key === "Escape") {
    closePopup();
  }
};


const showImgPopup = (e) => {
  if (e.target.classList.contains('card__img')) {
    img.src = e.target.src;
    imgTitle.textContent = e.target.closest('.card').querySelector('.card__title').textContent;
    img.alt = e.target.alt;
    togglePopup(imgPopup);
    setCloseEvents();
  }
};


const addTextFromDOMtoInput = () => {
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
};
const formSubmitHandlerEdit = (event) => {
  event.preventDefault();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  // togglePopup(editPopup);
  closePopup();
};
const formSubmitHandlerAdd = (event) => {
  event.preventDefault();
  renderCard(sectionElement, cloneCards(imgInput.value, linkInput.value));
  imgInput.value = '';
  linkInput.value = '';
  // togglePopup(addPopup);
  closePopup();
};
// imgPopup.addEventListener('click', (e) => {
//   // togglePopup(imgPopup);
//   // closePopup();
//   // removeCloseEvents();
// });
const cloneCards = (name, link, alt = 'Картинка.') => {
  const cardElement = card.cloneNode(true);
  const cardImg = cardElement.querySelector('.card__img');
  const cardTitle = cardElement.querySelector('.card__title');
  cardImg.src = link;
  cardImg.alt = alt;
  cardTitle.textContent = name;
  return cardElement;
};
const removeCard = (e) => {
  if (e.target.classList.contains('card__delete')) {
    e.target.closest('.card').remove();
  }
};
const changeLike = (e) => {
  if (e.target.classList.contains('card__like')) {
    e.target.classList.toggle('card__like_active');
  }
};
const renderCard = (parentNode, childNode) => {
  parentNode.prepend(childNode);
};
const showCards = () => {
  initialCards.forEach(({name, link, alt}) => {
    renderCard(sectionElement, cloneCards(name, link, alt));
  });
};
showCards();


popupEditButton.addEventListener("click", () => {
  addTextFromDOMtoInput();
  togglePopup(editPopup);
  setCloseEvents();
});
popupAddButton.addEventListener("click", () => {
  togglePopup(addPopup);
  setCloseEvents();
});
editForm.addEventListener('submit', formSubmitHandlerEdit);
addForm.addEventListener('submit', formSubmitHandlerAdd);
sectionElement.addEventListener('click', changeLike);
sectionElement.addEventListener('click', removeCard);
sectionElement.addEventListener('click', showImgPopup);