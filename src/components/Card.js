export default class Card {
  constructor({cardSelectorsObj, cardItemObj, handleCardClick}) {
    this._card = cardSelectorsObj.cardSelector;
    this._cardTitleClass = cardSelectorsObj.cardTitleClass;
    this._cardImgClass = cardSelectorsObj.cardImgClass;
    this._cardDeleteButtonClass = cardSelectorsObj.cardDeleteButtonClass;
    this._cardLikeButtonClass = cardSelectorsObj.cardLikeButtonClass;
    this._cardLikeActiveClass = cardSelectorsObj.cardLikeActiveClass;
    this._name = cardItemObj.name || cardItemObj.imgName;
    this._link = cardItemObj.link;
    this._alt = cardItemObj.alt || 'Картинка.';
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(`#${this._card}`).content;
    return cardTemplate.querySelector(`.${this._card}`).cloneNode(true);
  };

  _deleteEvent(event) {
    event.target.closest(`.${this._card}`).remove();
    this._card = null;
  };

  _likeEvent(event) {
    event.target.classList.toggle(`${this._cardLikeActiveClass}`);
  };

  _setEvents() {
    this._like = this._element.querySelector(`.${this._cardLikeButtonClass}`);
    this._like.addEventListener('click', (event) => {
      this._likeEvent(event);
    });
    this._delete = this._element.querySelector(`.${this._cardDeleteButtonClass}`);
    this._delete.addEventListener('click', (event) => {
      this._deleteEvent(event);
    });
    this._element.querySelector(`.${this._cardImgClass}`).addEventListener('click', this._handleCardClick);
  };

  _setAttributes() {
    const cardImg = this._element.querySelector(`.${this._cardImgClass}`);
    const cardTitle = this._element.querySelector(`.${this._cardTitleClass}`);
    cardImg.src = this._link;
    cardImg.alt = this._alt;
    cardTitle.textContent = this._name;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setAttributes();
    this._setEvents();
    return this._element;
  }
}