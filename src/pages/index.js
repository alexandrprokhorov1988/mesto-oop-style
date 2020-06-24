import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
  cardSelectorsObj,
  initialCards,
  jobInput,
  nameInput,
  options,
  popupAddButton,
  popupEditButton,
  popupImgObj,
  sectionElement,
  userAvatarSelector,
  userInfoSelector,
  userNameSelector,
  validation
} from '../utils/constants.js';

const api = new Api(options);

const popImg = new PopupWithImage(popupImgObj);

api.getInitialCards()
  .then((result) => {
    const defaultCardList = new Section(
      {
        itemsObj: result,
        rendererFunction: (cardItemObj) => {
          const card = new Card(
            {
              cardSelectorsObj: cardSelectorsObj,
              cardItemObj: cardItemObj,
              handleCardClick: (e) => {
                popImg.open(e);
              }
            });
          const cardElement = card.generateCard();
          defaultCardList.addItem(cardElement);
        }
      }, sectionElement);
    defaultCardList.renderer();
  })
  .catch((err) => {
    console.log(err);
  });

const userInfo = new UserInfo(userNameSelector, userInfoSelector, userAvatarSelector, jobInput, nameInput);

const editPopup = new PopupWithForm(
  {
    popupSelector: '#editPopup',
    formSelector: '#editForm',
    formInputSelector: '.form__input',
    submitFormFunction: (userObj) => {
      // userInfo.setUserInfo(userObj);//todo
      api.setUserInfo(userObj);
      api.getUserInfo()
        .then(res => {
          userInfo.setUserInfo(res);
        })
        .catch(err => console.log(err));
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


popImg.setEvents();
editPopup.setEvents();
addPopup.setEvents();
// defaultCardList.renderer();
popupEditButton.addEventListener('click', () => {
  userInfo.setUserInfoToForm(userInfo.getUserInfo());
  editPopup.open();
});
popupAddButton.addEventListener('click', () => {
  addPopup.open();
});
runValidation(validation);


api.getUserInfo()
  .then(res => {
    userInfo.setUserInfo(res);
  })
  .catch(err => console.log(err));


api.setNewCard('счмчс', 'https://pbs.twimg.com/profile_images/703895598190047232/N4njoMMW_400x400.jpg')
  .then(res => {
      console.log(res);
  })
  .catch(err => console.log(err));