export const initialCards = [
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
export const validation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
};
export const cardSelectorsObj = {
  cardSelector: 'card',
  cardTitleClass: 'card__title',
  cardImgClass: 'card__img',
  cardDeleteButtonClass: 'card__delete',
  cardLikeButtonClass: 'card__like',
  cardLikeActiveClass: 'card__like_active',
};

export const popupImgObj = {
  cardClass: 'card',
  cardTitleClass: 'card__title',
  cardImgClass: 'card__img',
  popupSelector: '#imgPopup',
  popupImg: 'popup__image',
  popupTitle: 'popup__image-title'
};


export const popupEditButton = document.querySelector('.profile__edit-button');
export const popupAddButton = document.querySelector('.profile__add-button');
export const nameInput = document.querySelector('[name=name]');
export const jobInput = document.querySelector('[name=profession]');
// export const imgInput = document.querySelector('[name=imgName]');
// export const linkInput = document.querySelector('[name=link]');
// export const nameField = document.querySelector('.profile__user-name');
// export const jobField = document.querySelector('.profile__user-profession');
export const userNameSelector = document.querySelector('.profile__user-name');
export const userInfoSelector = document.querySelector('.profile__user-profession');
// export const editForm = document.querySelector('#editForm');
// export const addForm = document.querySelector('#addForm');
// export const editPopup = document.querySelector('#editPopup');
// export const addPopup = document.querySelector('#addPopup');
// export const imgPopup = document.querySelector('#imgPopup');
// export const img = imgPopup.querySelector('.popup__image');
// export const imgTitle = imgPopup.querySelector('.popup__image-title');
// export const allPopups = Array.from(document.querySelectorAll('.popup'));
// export const popupOpenClass = 'popup_opened';
// export const popupNameClass = 'popup';
// export const closeIconClass = 'popup__close-icon';
// export const cardClass = 'card';
export const sectionElement = '.elements';