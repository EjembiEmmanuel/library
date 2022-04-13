let myLibrary = [];

let books = document.querySelectorAll('.books');


function Book(title, author, pages, language, published) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.language = language;
    this.published = published;
}


const book1 = new Book("Digital Fortress", "Dan Brown", 350, "English", "1998");
const book2 = new Book("Deception Point", "Dan Brown", 300, "English", "2001");
const book3 = new Book("Angel & Demons", "Dan Brown", 400, "English", "2000");
const book4 = new Book("The Davinci Code", "Dan Brown", 500, "English", "2003");
const book5 = new Book("The Lost Symbol", "Dan Brown", 550, "English", "2009");
const book6 = new Book("Inferno", "Dan Brown", 450, "English", "2013");


function addBookToLibrary() {
    myLibrary.push(book1);
    myLibrary.push(book2);
    myLibrary.push(book3);
    myLibrary.push(book4);
    myLibrary.push(book5);
    myLibrary.push(book6);
}

addBookToLibrary()

for(let i = 0; i < books.length; i++) {
    let currentBookTile = books[i];
    let title= currentBookTile.querySelector('.title');
    let author = currentBookTile.querySelector('.author');
    let pages = currentBookTile.querySelector('.pages');
    let language = currentBookTile.querySelector('.language');
    let published = currentBookTile.querySelector('.published');
    for(let j = 0; j < myLibrary.length; j++) {
        let currentBook = myLibrary[i];
        title.textContent = currentBook.title;
        author.textContent = `By: ${currentBook.author}`;
        pages.textContent = `Number of pages: ${currentBook.pages}`;
        language.textContent = `Language: ${currentBook.language}`;
        published.textContent = `Published: ${currentBook.published}`;
    }
}

