/* eslint-disable no-undef */
import CalculateDamage from '../calculatedamage';
import ArrayBufferConverter from '../arrayBufferConverter';
import getBuffer from '../getBuffer';

describe('check in methods class CalculateDamage', () => {
  //   beforeEach(() => {
  //     const damage = new CalculateDamage(5);
  //     return damage;
  //   });
  test('check in method set stoned', () => {
    const damage = new CalculateDamage(5);
    damage.stoned = true;
    const receiver = damage.stoned;
    expect(receiver).toBe(true);
  });
  test('check in method set attack', () => {
    const damage = new CalculateDamage(5);
    damage.attack = 40;
    const receiver = damage.attack;
    expect(receiver).toBe(24);
  });
  test('check in method set attack options', () => {
    const damage = new CalculateDamage(5);
    damage.stoned = true;
    damage.attack = 40;
    const receiver = damage.attack;
    expect(receiver).toBe(12);
  });
  test('method set attack options, attack has zero equal', () => {
    const damage = new CalculateDamage(5);
    damage.attack = -40;
    const receiver = damage.attack;
    expect(receiver).toBe(0);
  });
});

describe('check in methods class ArrayBufferConverter', () => {
  test('check in method load', () => {
    const obj = new ArrayBufferConverter();
    const receiver = obj.load(getBuffer);
    const result = getBuffer();
    expect(receiver).toEqual(result);
  });
  test('check in method toString', () => {
    const obj = new ArrayBufferConverter();
    const loadedBuffer = obj.load(getBuffer);
    const receiver = obj.toString(loadedBuffer);
    const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(receiver).toEqual(result);
  });
});
