import road from '../images/card-winter-6.jpg';
import home from '../images/card-winter-5.jpg';
import three from '../images/card-winter-4.jpg';
import pond from '../images/card-winter-3.jpg';
import sun from '../images/card-winter-2.jpg';
import gate from '../images/card-winter-1.jpg';

export const initialCards = [
  {
    name: 'Дорога',
    link: road,
    alt: 'Дорога.',
  },
  {
    name: 'Дом',
    link: home,
    alt: 'Дом.',
  },
  {
    name: 'Деревья',
    link: three,
    alt: 'Деревья.',
  },
  {
    name: 'Пруд',
    link: pond,
    alt: 'Пруд под снегом.',
  },
  {
    name: 'Солнце',
    link: sun,
    alt: 'Дорога в снегу.',
  },
  {
    name: 'Калитка',
    link: gate,
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
export const userNameSelector = document.querySelector('.profile__user-name');
export const userInfoSelector = document.querySelector('.profile__user-profession');
export const sectionElement = '.elements';