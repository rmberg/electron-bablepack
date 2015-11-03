
export default class Widget {

  constructor(price, description) {
    this._price = price;
    this._description = description;
  }

  get price () {
    return this._price;
  }

  get description () {
    return this._description;
  }

  set price (value) {
    this._price = value;
  }

  set description (value) {
    this._description = value;
  }

  toString() {
    return `Price: ${this.price}, Description: ${this.description}`
  }

}
