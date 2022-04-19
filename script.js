let myLibrary = [];


function Book(title, author, pages, language, published) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.language = language;
    this.published = published;
}


// Store book details
function storeBook() {
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let pages = document.getElementById('no-pages').value;
    let language = document.getElementById('book-language').value;
    let datePublished = document.getElementById('publish-date').value;
    let newBook = new Book(title, author, pages, language, datePublished);

    let books = JSON.parse(localStorage.getItem('books'));
    if(books == null) {
      books = [];
    }

    localStorage.setItem('book', JSON.stringify(newBook));
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));

    // return false;
}

function displayBooks() {
    let booksGrid = document.querySelector('.books-grid');
    let bookCards = document.querySelectorAll('.books');
    let bookCard = document.querySelector('.books');
    let bookCardsClone;

    let books = JSON.parse(localStorage.getItem('books'));

    let neededTiles = 0;

    if(books.length > bookCards.length) {
      neededTiles = books.length - bookCards.length;
    }

    for(let i = 1; i <= neededTiles; i++) {
      bookCardsClone =  bookCard.cloneNode(true);
      // console.log(bookCardsClone);
      booksGrid.appendChild(bookCardsClone);

      bookCards = document.querySelectorAll('.books');
    }

    for(let i = 0; i < bookCards.length; i++) {
        let currentBookTile = bookCards[i];
        let title = currentBookTile.querySelector('.title');
        let author = currentBookTile.querySelector('.author');
        let pages = currentBookTile.querySelector('.pages');
        let language = currentBookTile.querySelector('.language');
        let published = currentBookTile.querySelector('.published');
        for(let j = 0; j < books.length; j++) {
            let currentBook = books[i];
            if(currentBook) {
                title.textContent = currentBook.title;
                author.textContent = `By: ${currentBook.author}`;
                pages.textContent = `Number of pages: ${currentBook.pages}`;
                language.textContent = `Language: ${currentBook.language}`;
                published.textContent = `Published: ${currentBook.published}`;
                
            }  
        }

    }
}

let modal = document.getElementById("book-modal");
let btn = document.getElementById("modal-btn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// function add() {
//     let bookTitle = document.querySelector('#book-title');
//     let bookAuthor = document.querySelector('#book-author');
//     let numberOfPages = document.querySelector('#no-pages');
//     let bookLanguage = document.querySelector('#book-language');
//     let pusblishDate = document.querySelector('#publish-date');
//     let bookStatus = document.querySelector('#book-status');

//     let newBookTitle = persistInput(bookTitle);
//     let newBookAuthor = persistInput(bookAuthor);
//     let newNumberOfPages = persistInput(numberOfPages);
//     let newBookLanguage = persistInput(bookLanguage);
//     let newPublishDate = persistInput(pusblishDate);
//     let newBookStatus = persistInput(bookStatus);

//     let newBook = new Book(newBookTitle, newBookAuthor, newNumberOfPages, newBookLanguage, newPublishDate);
//     addBookToLibrary(newBook);

//     const booksGrid = document.querySelector('.books-grid');

//     const book = document.querySelector('.books')

//     newBookCard = book.cloneNode(true);
//     booksGrid.appendChild(newBookCard);

//     displayBooks();

//     modal.style.display = "none";    
// }

window.onload = function() {
    document.getElementById('book-form').onsubmit = storeBook;
    // document.getElementById('form-btn').onclick = displayBooks;
    displayBooks();
}



let library = JSON.parse(localStorage.getItem('books'));
// console.log(library);






 