// const planets = ["Земля", "Марс", "Венера", "Юпитер"];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// // Оригинальный массив не изменился
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']

const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// Пиши код ниже этой строки

const planetsLengths = planets.map((planet) => planet.length);
console.log(planetsLengths);
