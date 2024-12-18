const modal = document.querySelector('.modal')
const openModal = document.querySelector('.add-book')
const closeModal = document.querySelector('.x')
const bookForm = document.querySelector('.add-book-form')
const main = document.querySelector('.books')


openModal.addEventListener('click', () => {modal.showModal();})
closeModal.addEventListener('click', () => {modal.close();})



const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const pages = document.getElementById("pages").value;
const haveRead = document.getElementById("haveRead").checked;

const myLibrary = [ { title: "1984", author: "George Orwell", pages: 328, haveRead: false },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, haveRead: false },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, haveRead: false }
];

bookForm.addEventListener('submit', (event) => {
    event.preventDefault;


    // Get input values dynamically
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const haveRead = document.getElementById("haveRead").checked;

    addBookToLibrary(title, author, pages, haveRead);

    bookForm.reset(); // Reset the form after submission
    
    modal.close(); // Close the modal
});
 
function renderBook(title, author, pages, haveRead){
    bookObj = document.createElement("div");
    bookObj.innerHTML = `<p>Title: ${title}</p>
    <p>Author: ${author}</p>
    <p>pages: ${pages}</p>
    <p>Read?</p>`
    bookObj.className = "book";
    main.appendChild(bookObj);
   

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
    renderBook(title, author, pages, haveRead);
    console.log("pushing book!")
}

