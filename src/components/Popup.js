export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(`${popupSelector}`);
  }

  close() {
    this._popup.classList.remove('popup_opened');
  };

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  };

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', (event) => {
      this._handleEscClose(event);
    }, {once: true});
  }

  _overlayCloseEvent(event) {
    if (event.target.classList.contains('popup')) {
      this.close();
    }
  };

  _iconCloseEvent(event) {
    if (event.target.classList.contains('popup__close-icon')) {
      this.close();
    }
  };

  _setEventListeners() {
    this._popup.addEventListener('click', (event) => {
      this._overlayCloseEvent(event);
    });
    this._popup.addEventListener('click', (event) => {
      this._iconCloseEvent(event);
    });
  }
}