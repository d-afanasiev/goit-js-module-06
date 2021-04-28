// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find((option) => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find((option) => option.label === "white"); // undefined

const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
];
const BOOK_TITLE = "Сон смешного человека";
const AUTHOR = "Роберт Шекли";
// Пиши код ниже этой строки

const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE);
const bookByAuthor = books.find(({ author }) => author === AUTHOR);

console.log(bookByAuthor, bookWithTitle);
