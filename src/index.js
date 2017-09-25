module.exports = function multiply(first, second) {
  var BASE = 10;
  var product = [];
  // Формируем массив в обратном порядке
  var firstReversed = first.split('').reverse();
  var secondReversed = second.split('').reverse();

  for (var i = 0; i < firstReversed.length; i++) {
    for (var j = 0; j < secondReversed.length; j++) {
      var ind = i + j;
      product[ind] = (product[ind] || 0) + firstReversed[i] * secondReversed[j];
      // Нормализация числа - приведение каждого разряда в соответствие с системой счисления
      // Если число больше максимального, то организовывается перенос
      if (product[ind] >= BASE) {
        product[ind + 1] = (product[ind + 1] || 0) + Math.floor(product[ind] / BASE);
        product[ind] = product[ind] % BASE;
      }
    }
  }

  // Переворачиваем содержимое массива и преобразовываем в строку
  return product.reverse().join('');
};
