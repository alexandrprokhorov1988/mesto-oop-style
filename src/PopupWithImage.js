import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({cardClass, cardTitleClass, popupSelector, cardImgClass, popupImg, popupTitle}) {
    super(popupSelector);
    this._cardClass = cardClass;
    this._cardImgClass = cardImgClass;
    this._cardTitleClass = cardTitleClass;
    this._img = document.querySelector(`.${popupImg}`);
    this._title = document.querySelector(`.${popupTitle}`);
  }

  open = (event) => {
    if (event.target.classList.contains(this._cardImgClass)) {
      this._img.src = event.target.src;
      this._title.textContent = event.target.closest(`.${this._cardClass}`).querySelector(`.${this._cardTitleClass}`).textContent;
      this._img.alt = event.target.alt;
      super.open();
      super._setEventListeners();
    }
  };
}