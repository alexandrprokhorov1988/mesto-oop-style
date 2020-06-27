import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, formSelector, formInputSelector, submitFormFunction}) {
    super(popupSelector);
    this._element = document.querySelector(`${formSelector}`);
    this._formSubmitFunction = submitFormFunction;
    this._formInputSelector = formInputSelector;
    this._oldValue = this._element.querySelector('.form__submit-button').value;
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
      this.popupButtonLoadingText(true);
      this._formSubmitFunction(this._getInputValues());
      this.close();
    });
  };

  close() {
    this._element.reset();
    super.close();
  }


  popupButtonLoadingText(isLoading) {
    if (isLoading) {
      this._element.querySelector('.form__submit-button').value = 'Сохранение...';
    } else {
      this._element.querySelector('.form__submit-button').value = this._oldValue;
    }
  }
}