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
  let bookCardsClone;

  let books = JSON.parse(localStorage.books);

  let neededTiles = 0;

  if(books.length > bookCards.length) {
    neededTiles = books.length - bookCards.length;
  }
  
  for(let i = 1; i <= neededTiles; i++) {
    bookCardsClone =  bookCard.cloneNode(true);
    booksGrid.appendChild(bookCardsClone); 
  }

  bookCards = document.querySelectorAll('.books');

  for(let i = 0; i < bookCards.length; i++) {
      let currentBookTile = bookCards[i];
      let title = currentBookTile.querySelector('.title');
      let author = currentBookTile.querySelector('.author');
      let pages = currentBookTile.querySelector('.pages');
      let language = currentBookTile.querySelector('.language');
      let published = currentBookTile.querySelector('.published');
      let readToggle = currentBookTile.querySelector('#read-toggle');
      let currentBook;

      for(let j = 0; j < books.length; j++) {
          currentBook = books[i];
          if(currentBook) {
              title.textContent = currentBook.title;
              author.textContent = `By: ${currentBook.author}`;
              pages.textContent = `Number of pages: ${currentBook.pages}`;
              language.textContent = `Language: ${currentBook.language}`;
              published.textContent = `Published: ${currentBook.published}`;

              if(currentBook.bookStatus == 'Read') {
                readToggle.checked = true;
              } else if(currentBook.bookStatus == 'Not read') {
                readToggle.checked = false;
              }
              
          }  
      }

      readToggle.addEventListener('click', function() {
        if(currentBook.bookStatus == 'Read') {
          currentBook.bookStatus = 'Not Read';
          localStorage.setItem('books', JSON.stringify(books));
          window.location.reload();
        } else if(currentBook.bookStatus == 'Not Read') {
          currentBook.bookStatus = 'Read';
          localStorage.setItem('books', JSON.stringify(books));
          window.location.reload();
        }
      });

      let deleteBookBtn = currentBookTile.querySelector('.delete-book');
      deleteBookBtn.addEventListener('click', function() {
        const index = books.indexOf(currentBook);
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        window.location.reload();
      });
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


window.onload = function() {
    document.getElementById('book-form').onsubmit = storeBook;
    // document.getElementById('form-btn').onclick = displayBooks;
    displayBooks();
}






 