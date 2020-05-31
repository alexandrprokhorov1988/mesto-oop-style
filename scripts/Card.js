export {Card};

class Card {
  constructor(cardObj, itemObj) {
    this._card = cardObj.cardSelector;
    this._cardTitleClass = cardObj.cardTitleClass;
    this._cardImgClass = cardObj.cardImgClass;
    this._cardDeleteButtonClass = cardObj.cardDeleteButtonClass;
    this._cardLikeButtonClass = cardObj.cardLikeButtonClass;
    this._cardLikeActiveClass = cardObj.cardLikeActiveClass;
    this._name = itemObj.name;
    this._link = itemObj.link;
    this._alt = itemObj.alt || 'Картинка.';
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(`#${this._card}`).content;
    return cardTemplate.querySelector(`.${this._card}`).cloneNode(true);
  };

  _deleteEvent = (e) => {
    e.target.closest(`.${this._card}`).remove();
  };

  _likeEvent = (e) => {
    e.target.classList.toggle(`${this._cardLikeActiveClass}`);
  };

  _setEvents = () => {
    this._like = this._element.querySelector(`.${this._cardLikeButtonClass}`);
    this._like.addEventListener('click', this._likeEvent);
    this._delete = this._element.querySelector(`.${this._cardDeleteButtonClass}`);
    this._delete.addEventListener('click', this._deleteEvent);
  };

  _setAttributes = () => {
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