//sortings
const books = [
    { title: "Book A", year: 2010 },
    { title: "Book B", year: 2005 },
    { title: "Book C", year: 2018 },
];

const booksSortedByYearAsc = books.sort((a, b) => a.year - b.year);