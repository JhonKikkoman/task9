/* eslint-disable no-underscore-dangle */
export default class CalculateDamage {
  constructor(distance) {
    this.distance = distance;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    let calc = this._attack - (this._attack * ((this.distance - 1) / 10));
    if (this.stoned) {
      calc -= Math.log2(this.distance) * 5;
    }
    this._attack = calc > 0 ? Math.floor(calc) : 0;
    return this._attack;
  }

  set attack(value) {
    this._attack = value;
  }
}
