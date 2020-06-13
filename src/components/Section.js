export default class Section {
  constructor({itemsObj, rendererFunction}, containerSelector) {
    this._itemsObj = itemsObj;
    this._rendererFunction = rendererFunction;
    this._containerSelector = containerSelector;
  }

  addItem(element) {
    document.querySelector(this._containerSelector).prepend(element);
  }

  renderer() {
    this._itemsObj.forEach(item => {
      this._rendererFunction(item);
    });
  }
}