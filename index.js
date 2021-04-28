function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки

  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  console.log(commonElements);
  return commonElements;
  // Пиши код выше этой строки
}

getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
