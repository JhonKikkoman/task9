/* eslint-disable class-methods-use-this */
export default class ArrayBufferConverter {
  load(buffer) {
    const ArrBufferValues = buffer();
    return ArrBufferValues;
  }

  toString(arr) {
    let result = '';
    const bufferView = new Int16Array(arr);
    for (let i = 0; i < bufferView.length; i += 1) {
      result += String.fromCharCode(bufferView[i]);
    }
    return result;
  }
}
