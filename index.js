// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((firstEl, lastEl) =>
  firstEl.author.localeCompare(lastEl.author)
);

const sortedByReversedAuthorName = [...books].sort((firstEl, lastEl) =>
  lastEl.author.localeCompare(firstEl.author)
);

const sortedByAscendingRating = [...books].sort(
  (firstEl, lastEl) => firstEl.rating - lastEl.rating
);

const sortedByDescentingRating = [...books].sort(
  (firstEl, lastEl) => lastEl.rating - firstEl.rating
);
