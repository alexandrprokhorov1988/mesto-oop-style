export {Card};

class Card {
  constructor({cardSelector, cardTitleClass, cardImgClass, cardDeleteButtonClass, cardLikeButtonClass, cardLikeActiveClass}, {name, link, alt = 'Картинка.'}) {
    this._card = cardSelector;
    this._cardTitleClass = cardTitleClass;
    this._cardImgClass = cardImgClass;
    this._name = name;
    this._link = link;
    this._alt = alt;
    this._cardDeleteButtonClass = cardDeleteButtonClass;
    this._cardLikeButtonClass = cardLikeButtonClass;
    this._cardLikeActiveClass = cardLikeActiveClass;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(`#${this._card}`);
    const cardElement = cardTemplate.content.querySelector(`.${this._card}`).cloneNode(true);
    const cardImg = cardElement.querySelector(`.${this._cardImgClass}`);
    const cardTitle = cardElement.querySelector(`.${this._cardTitleClass}`);
    cardImg.src = this._link;
    cardImg.alt = this._alt;
    cardTitle.textContent = this._name;
    return cardElement;
  };

  _setDeleteEvents = (e) => {
    e.target.closest(`.${this._card}`).remove();
  };

  _setLikeEvents = (e) => {
    e.target.classList.toggle(`${this._cardLikeActiveClass}`);
  };

  _setEvents = () => {
    this._like = this._element.querySelector(`.${this._cardLikeButtonClass}`);
    this._like.addEventListener('click', this._setLikeEvents);
    this._delete = this._element.querySelector(`.${this._cardDeleteButtonClass}`);
    this._delete.addEventListener('click', this._setDeleteEvents);
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setEvents();
    return this._element;
  }
}