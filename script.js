let myLibrary = [];

function Book(title, author, pages, language, published, bookStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.language = language;
    this.published = published;
    this.bookStatus = bookStatus;
}

function storeBook() {
  let title = document.getElementById('book-title').value;
  let author = document.getElementById('book-author').value;
  let pages = document.getElementById('no-pages').value;
  let language = document.getElementById('book-language').value;
  let datePublished = document.getElementById('publish-date').value;
  let bookStatus = document.getElementById('book-status').value;

  let newBook = new Book(title, author, pages, language, datePublished, bookStatus);

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

  let books = JSON.parse(localStorage.books);

  let neededTiles = 0;
  if(books.length > bookCards.length) {
    neededTiles = books.length - bookCards.length;
  }
  
  for(let i = 1; i <= neededTiles; i++) {
    let bookCardsClone =  bookCard.cloneNode(true);
    booksGrid.appendChild(bookCardsClone); 
  }

  bookCards = document.querySelectorAll('.books');
  for(let i = 0; i < bookCards.length; i++) {
    let currentBookTile = bookCards[i];

    let title = currentBookTile.querySelector('#title-text');
    let author = currentBookTile.querySelector('.author');
    let pages = currentBookTile.querySelector('.pages');
    let language = currentBookTile.querySelector('.language');
    let published = currentBookTile.querySelector('.published');
    let readToggle = currentBookTile.querySelector('.read-toggle')
    
    let currentBook = books[i];
    title.textContent = currentBook.title;
    author.textContent = `By: ${currentBook.author}`;
    pages.textContent = `Number of pages: ${currentBook.pages}`;
    language.textContent = `Language: ${currentBook.language}`;
    published.textContent = `Published: ${currentBook.published}`;

    if(currentBook.bookStatus == 'Read') {
      readToggle.checked = true;
      currentBookTile.classList.remove('not-read-book');
    } else if(currentBook.bookStatus == 'Not read') {
      readToggle.checked = false;
      currentBookTile.classList.add('not-read-book');
      
    }
  }

  let readToggles = document.querySelectorAll('.read-toggle');
  readToggles.forEach(readToggle => readToggle.addEventListener('click', function() {
    const index = Array.from(readToggles).indexOf(readToggle);
    if(books[index].bookStatus == 'Read') {
      books[index].bookStatus = 'Not read';
      localStorage.setItem('books', JSON.stringify(books));
      window.location.reload();
    } else if(books[index].bookStatus == 'Not read') {
      books[index].bookStatus = 'Read';
      localStorage.setItem('books', JSON.stringify(books));
      window.location.reload();
    }
  }));

  let deleteBookBtns = document.querySelectorAll('.delete-book');
  deleteBookBtns.forEach(deleteBookBtn => deleteBookBtn.addEventListener('click', function() {
    const index = Array.from(deleteBookBtns).indexOf(deleteBookBtn);
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    window.location.reload();
  }));

  let totalBooks = document.querySelector('.total-books');
  totalBooks.textContent = `Total Books: ${books.length}`;

  let numberOfReadBooks = 0;
  let numberOfUnreadBooks = 0;
  for(let i = 0; i < books.length; i++) {
    if(books[i].bookStatus == 'Read') {
      numberOfReadBooks++;
    } else if(books[i].bookStatus == 'Not read') {
      numberOfUnreadBooks++;
    }
  }

  let readText = document.querySelector('#read-text');
  let notReadText = document.querySelector('#not-read-text');
  readText.textContent = `Read: ${numberOfReadBooks}`;
  notReadText.textContent = `Not Read: ${numberOfUnreadBooks}`;

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


window.onload = function() {
    document.getElementById('book-form').onsubmit = storeBook;
    // document.getElementById('form-btn').onclick = displayBooks;
    displayBooks();
}






 