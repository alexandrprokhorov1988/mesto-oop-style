import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor({popupSelector, buttonSelector, confirmFunction}) {
    super(popupSelector);
    this._button = this._popup.querySelector(`${buttonSelector}`);
    this._confirmFunction = confirmFunction;
  }

  _setEventListeners() {
    super._setEventListeners();
    this._button.addEventListener('click', (event) => {
      event.preventDefault();
      this._confirmFunction(this._id);
      document.querySelector(`[data-id=\"${this._id}\"]`).closest(`.${this._card}`).remove();
      this._card = null;
      this.close();
    });
  };


  setId(id) {
    this._id = id;
  }

  setCard(card) {
    this._card = card;
  }
}