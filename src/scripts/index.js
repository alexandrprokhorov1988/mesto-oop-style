import '../pages/index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";

import {
  cardSelectorsObj,
  initialCards,
  jobInput,
  nameInput,
  popupAddButton,
  popupEditButton,
  popupImgObj,
  sectionElement,
  userInfoSelector,
  userNameSelector,
  validation
} from '../utils/constants.js';

const defaultCardList = new Section(
  {
    itemsObj: initialCards,
    rendererFunction: (cardItemObj) => {
      const card = new Card(
        {
          cardSelectorsObj: cardSelectorsObj,
          cardItemObj: cardItemObj,
          handleCardClick: (e) => {
            const popImg = new PopupWithImage(popupImgObj);
            popImg.open(e);
          }
        });
      const cardElement = card.generateCard();
      defaultCardList.addItem(cardElement);
    }
  }, sectionElement);

const userInfo = new UserInfo(userNameSelector, userInfoSelector, jobInput, nameInput);

const editPopup = new PopupWithForm(
  {
    popupSelector: '#editPopup',
    formSelector: '#editForm',
    formInputSelector: '.form__input',
    submitFormFunction: (userObj) => {
      userInfo.setUserInfo(userObj);
    }
  });

const addPopup = new PopupWithForm(
  {
    popupSelector: '#addPopup',
    formSelector: '#addForm',
    formInputSelector: '.form__input',
    submitFormFunction: (itemObj) => {
      const item = new Section(
        {
          itemsObj: itemObj,
          rendererFunction: (cardItemObj) => {
            const card = new Card(
              {
                cardSelectorsObj: cardSelectorsObj,
                cardItemObj: cardItemObj,
                handleCardClick: (e) => {
                  const popImg = new PopupWithImage(popupImgObj);
                  popImg.open(e);
                }
              });
            const cardElement = card.generateCard();
            item.addItem(cardElement);
          }
        }, sectionElement);
      item.renderer();
    }
  });

const runValidation = ({formSelector}) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((formElement) => {
    new FormValidator(validation, formElement).enableValidation();
  });
};

editPopup.setEvents();
addPopup.setEvents();
defaultCardList.renderer();
popupEditButton.addEventListener('click', () => {
  userInfo.setUserInfoToForm(userInfo.getUserInfo());
  editPopup.open();
});
popupAddButton.addEventListener('click', () => {
  addPopup.open();
});
runValidation(validation);