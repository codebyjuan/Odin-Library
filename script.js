const modal = document.querySelector('.modal')
const openModal = document.querySelector('.add-book')
const closeModal = document.querySelector('.x')
const bookForm = document.querySelector('.add-book-form')

openModal.addEventListener('click', () => {modal.showModal();})
closeModal.addEventListener('click', () => {modal.close();})



const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const pages = document.getElementById("pages").value;
const haveRead = document.getElementById("haveRead").checked;

const myLibrary = [];

bookForm.addEventListener('submit', (event) => {
    // Prevent the form from refreshing
    event.preventDefault();

    // Get values from the form
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const haveRead = document.getElementById("haveRead").checked;

    // Call the addBookToLibrary function with the form values
    addBookToLibrary(title, author, pages, haveRead);

    // Reset the form
    bookForm.reset();

    // Close the modal
    modal.close();
});

function renderBook(book) {
    // Create a new div for the book
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    // Add book details to the div
    bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.haveRead ? 'Yes' : 'No'}</p>
    `;

    // Find the library container
    const libraryContainer = document.querySelector('.books');
    
    // Add the book to the container
    libraryContainer.appendChild(bookCard);
}

function Book(title, author, pages, haveRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.haveRead = haveRead
    this.info = function(){console.log(this.title, this.author, this.pages, this.haveRead)}
}

function addBookToLibrary(title, author, pages, haveRead) {
    const newBook = new Book(title, author, pages, haveRead);
    myLibrary.push(newBook)
    renderBook(newBook);
}

