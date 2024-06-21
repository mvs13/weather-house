class randomClass {
  // Возвращает случайное целое число в интервале от first до last
  beetween(first, last) {
    return Math.floor(Math.random() * (last - first + 1) + first);
  }
  // Возвращает массив целых чисел длиной len из массива целых чисел от first до last(не включаяя).
  // Числа в результирующем массиве не повторяются
  uniqueArray(first, last, len) {
    let result = [];
    if (first < last && len <= last - first) {
      let source = [];
      for (let i = first; i < last; i++) {
        source.push(i);
      }
      for (let i = 0; i < len; i++) {
        let index = this.beetween(0, source.length - 1);
        result.push(source[index]);
        source.splice(index, 1);
      }
    }
    return result;
  }
  // Возвращает массив целых чисел длиной len из массива целых чисел от first до last(не включаяя).
  // Уникальность чисел зависит от параметра isUnique
  makeArray(first, last, len, isUnique = false) {
    let result = [];
    if (first < last && len <= last - first) {
      let source = [];
      for (let i = first; i < last; i++) {
        source.push(i);
      }
      for (let i = 0; i < len; i++) {
        let index = this.beetween(0, source.length - 1);
        result.push(source[index]);
        if (isUnique) {
          source.splice(index, 1);
        }
      }
    }
    return result;
  }

  // Перетасовывает массив методом Фишера-Йетса
  shuffleByFisherYets(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let k = array[i];
      array[i] = array[j];
      array[j] = k;
    }
    return array;
  }

  plusORminus() {
    if (Math.random() < 0.5) {
      return -1;
    } else {
      return 1;
    }
  }

  trueORfalse() {
    if (Math.random() < 0.5) {
      return true;
    } else {
      return false;
    }
  }
}
export default new randomClass();
