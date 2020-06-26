import './index.css';
import Card from '../components/Card.js';
import Popup from '../components/Popup.js';
import Section from '../components/Section.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
  cardSelectorsObj,
  jobInput,
  nameInput,
  options,
  popupAddButton,
  popupAvatarEditButton,
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

const userInfo = new UserInfo(userNameSelector, userInfoSelector, userAvatarSelector, jobInput, nameInput);

const editPopup = new PopupWithForm(
  {
    popupSelector: '#editPopup',
    formSelector: '#editForm',
    formInputSelector: '.form__input',
    submitFormFunction: (userObj) => {
      api.setUserInfo(userObj)
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
      api.setNewCard(itemObj)
        .then(result => {
          const item = new Section({
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
              item.addItem(cardElement);
            }
          }, sectionElement);
          item.renderer();
        })
        .catch(err => console.log(err));
    }
  });

const editAvatarPopup = new PopupWithForm(
  {
    popupSelector: '#editAvatarPopup',
    formSelector: '#editAvatarForm',
    formInputSelector: '.form__input',
    submitFormFunction: (itemObj) => {
      api.setUserAvatar(itemObj)
        .then(res => {
          userInfo.setUserInfo(res);
        })
        .catch(err => console.log(err));
    }
  });

const deletePopup = new Popup('#deletePopup');


const runValidation = ({formSelector}) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((formElement) => {
    new FormValidator(validation, formElement).enableValidation();
  });
};

api.getInitialCards()
  .then((result) => {
    const defaultCardList = new Section({
      itemsObj: result,
      rendererFunction: (cardItemObj) => {
        const card = new Card(
          {
            cardSelectorsObj: cardSelectorsObj,
            cardItemObj: cardItemObj,
            handleCardClick: (e) => {
              popImg.open(e);
            },
            handleCardDeleteClick: (e) => {
              deletePopup.open();
              // api.deleteCard(e);
            },
            handleLikeDeleteClick: (e) => {
              api.likeCard(e, true)
                .then(res => {
                  card.setLikes(res);
                })
                .catch(err => console.log(err));
            },
            handleLikeSetClick: (e) => {
              api.likeCard(e, false)
                .then(res => {
                  card.setLikes(res);
                })
                .catch(err => console.log(err));
            },
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

popImg.setEvents();
editPopup.setEvents();
addPopup.setEvents();
editAvatarPopup.setEvents();
deletePopup.setEvents();
// deletePopup.setButtonEvent();
popupEditButton.addEventListener('click', () => {
  userInfo.setUserInfoToForm(userInfo.getUserInfo());
  editPopup.open();
});
popupAddButton.addEventListener('click', () => {
  addPopup.open();
});
popupAvatarEditButton.addEventListener('click', () => {
  editAvatarPopup.open();
});


runValidation(validation);

api.getUserInfo()
  .then(res => {
    userInfo.setUserInfo(res);
  })
  .catch(err => console.log(err));