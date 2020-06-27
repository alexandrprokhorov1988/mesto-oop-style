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
      console.log('click');
      this._confirmFunction(this._id);
      this.close();
    });
  };

  open(id) {
    this._id = id;
  super.open();
    return new Promise ((resolve, reject) => {

    });

  }

  confirm(){

  }
}