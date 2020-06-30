import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, formSelector, formInputSelector, submitFormFunction}) {
    super(popupSelector);
    this._element = document.querySelector(`${formSelector}`);
    this._formSubmitFunction = submitFormFunction;
    this._formInputSelector = formInputSelector;
    this._button = this._element.querySelector('.form__submit-button');
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll(`${this._formInputSelector}`);
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  };

  _setEventListeners() {
    super._setEventListeners();
    this._element.addEventListener('submit', (event) => {
      event.preventDefault();
      this._button.disabled = true;
      this.popupButtonLoadingText(true);
      this._formSubmitFunction(this._getInputValues());
    });
  };

  close() {
    this._element.reset();
    super.close();
  }

  popupButtonLoadingText(isLoading) {
    this._newButton = this._element.querySelector('.form__submit-button');
    if (isLoading) {
      this._newButton.value = 'Сохранение...';
    } else {
      this._newButton.value = this._button.value;
    }
  }
}