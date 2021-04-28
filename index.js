// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  console.log(filteredNumbers);
  // Пиши код выше этой строки
  return filteredNumbers;
};

filterArray([12, 24, 8, 41, 76], 20);
