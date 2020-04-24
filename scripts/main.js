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

function changeLike() {
  this.classList.toggle("card__like_active");
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
    showImg(cardImg.src, cardTitle.textContent);
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
  editPopup.classList.remove("popup_opened");
}

function formSubmitHandlerAdd(event) {
  event.preventDefault();
  cloneCards(imgInput.value, linkInput.value);
  imgInput.value = '';
  linkInput.value = '';
  addPopup.classList.remove("popup_opened");
}

function showImg(link, title) {
  const imgPopup = document.querySelector('.card__high-img-background');
  const img = imgPopup.querySelector('.card__high-image');
  const imgTitle = imgPopup.querySelector('.card__high-image-title');
  img.src = link;
  imgTitle.textContent = title;
  imgPopup.classList.add("card__high-img-background_show");
  imgPopup.addEventListener('click', function () {
    imgPopup.classList.remove("card__high-img-background_show");
  });
}

popupEditButton.addEventListener("click", function () {
  togglePopup(editPopup);
  addTextFromDOMtoInput();
});
popupAddButton.addEventListener("click", function () {
  togglePopup(addPopup);
});
editForm.addEventListener('submit', formSubmitHandlerEdit);
addForm.addEventListener('submit', formSubmitHandlerAdd);
initialCards.forEach(element => {
  cloneCards(element['name'], element['link'], element['alt'])
});

popups.forEach(function (element) {
  element.addEventListener('click', function (event) {
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close-icon')) {
      element.classList.remove("popup_opened");
    }
  })
});


