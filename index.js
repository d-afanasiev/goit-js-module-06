// // Все элементы больше либо равны нулю? - да
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true

// // Все элементы больше либо равны нулю? - нет
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(
  (element) => element % 2 === 0
);
const eachElementInFirstIsOdd = firstArray.every(
  (element) => element % 2 !== 0
);

const eachElementInSecondIsEven = secondArray.every(
  (element) => element % 2 === 0
);
const eachElementInSecondIsOdd = secondArray.every(
  (element) => element % 2 !== 0
);

const eachElementInThirdIsEven = thirdArray.every(
  (element) => element % 2 === 0
);
const eachElementInThirdIsOdd = thirdArray.every(
  (element) => element % 2 !== 0
);

console.log(eachElementInFirstIsEven);
