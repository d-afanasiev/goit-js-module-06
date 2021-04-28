function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки

  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] > value) {
  //     filteredNumbers.push(numbers[i]);
  //   }
  // }

  numbers.forEach((element) => {
    if (element > value) {
      filteredNumbers.push(element);
    }
  });

  // Пиши код выше этой строки
  console.log(filteredNumbers);
  return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3);
