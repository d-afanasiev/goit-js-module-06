// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  console.log(commonElements);
  // Пиши код выше этой строки
  return commonElements;
};

getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
