let myLibrary = [];


function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const book1 = new Book("Deception Point", "Dan Brown", 300);

function addBookToLibrary() {
    myLibrary.push(book1);
}

addBookToLibrary()

console.log(myLibrary[0]);