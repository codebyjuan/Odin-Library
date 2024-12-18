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

function Book(title, author, pages, haveRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.haveRead = haveRead
    this.info = function(){console.log(this.title, this.author, this.pages, this.haveRead)}
}

function addBookToLibrary(title, author, pages, haveRead) {
  
}

