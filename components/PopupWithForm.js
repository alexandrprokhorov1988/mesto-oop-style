import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, formSelector, formInputSelector, submitFormFunction}) {
    super(popupSelector);
    this._element = document.querySelector(`${formSelector}`);
    this._formSubmitFunction = submitFormFunction;
    this._formInputSelector = formInputSelector;
  }

  _getInputValues = () => {
    this._inputList = this._element.querySelectorAll(`${this._formInputSelector}`);
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  };

  _setEventListeners = () => {
    super._setEventListeners();
    this._element.addEventListener('submit', (event) => {
      event.preventDefault();
      this._formSubmitFunction([this._getInputValues()]);
      this.close();
    });
  };

  close() {
    this._element.reset();
    super.close();
  }

  setEvents = () => {
    this._setEventListeners();
  };
}