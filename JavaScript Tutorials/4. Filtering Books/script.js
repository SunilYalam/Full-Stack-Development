// Sample list of books with authors and publication years
const books = [
    { title: 'Book1', author: 'author1', year: 2005 },
    { title: 'Book2', author: 'author2', year: 2012 },
    { title: 'Book3', author: 'author3', year: 2008 },
    { title: 'Book4', author: 'author4', year: 2015 },
    
];

function filterAndCapitalize(booksList) {
    return booksList
        .filter(book => book.year >= 2010)
        .map(book => {
            return {
                title: book.title,
                author: book.author.toUpperCase(), 
                year: book.year,
            };
        });
}

const filteredAndCapitalizedBooks = filterAndCapitalize(books);

console.log("Original Books:", books);
console.log("Filtered and Capitalized Books:", filteredAndCapitalizedBooks);
