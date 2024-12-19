const modal = document.querySelector('.modal')
const openModal = document.querySelector('.add-book')
const closeModal = document.querySelector('.x')
const bookForm = document.querySelector('.add-book-form')
const deleteButton = document.querySelector('.delete-book')
const main = document.querySelector('.books')


openModal.addEventListener('click', () => {modal.showModal();})
closeModal.addEventListener('click', () => {modal.close();})



const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const pages = document.getElementById("pages").value;
const haveRead = document.getElementById("haveRead").checked;

const myLibrary = [];

bookForm.addEventListener('submit', (event) => {
    event.preventDefault;


    // Get input values dynamically
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
  
    const haveReadValue = document.getElementById("haveRead").value; // "Yes" or "No"
    const haveRead = haveReadValue === "Yes";

    addBookToLibrary(title, author, pages, haveRead);

    bookForm.reset(); // Reset the form after submission
    
    modal.close(); // Close the modal
});
 
function renderBook(title, author, pages, haveRead, index){
    bookObj = document.createElement("div");
    bookObj.innerHTML = `<div class="testing"> <p>Title: ${title}</p>
    <p>Author: ${author}</p>
    <p>pages: ${pages}</p>
 <p>
                <button class="toggle-read ${haveRead ? 'read' : 'unread'}">
                    ${haveRead ? "Read" : "Not Read"}
                </button>
            </p> <!--If read is true read button else not read button-->
    <button class="delete-book"  data-index="${index}">Remove</button> </div>` //gets index from the parameter and adds it to the specific delete button
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
    renderBook(title, author, pages, haveRead, myLibrary.length - 1); //gets the index of the book to add to library
    console.log("pushing book!")
}

addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);


//event deligation to remove book
main.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-book')) {
        const index = parseInt(event.target.dataset.index);
        // Remove from array
        myLibrary.splice(index, 1);
        // Remove from DOM
        event.target.closest('.book').remove();
        
        // Refresh all indices
        const deleteButtons = document.querySelectorAll('.delete-book');
        deleteButtons.forEach((button, newIndex) => {
            button.dataset.index = newIndex;
        });
    }
});

//event deligation for toggle button 
main.addEventListener('click', (event) => {
    if (event.target.classList.contains('toggle-read')) {
        // Check the current text and toggle it
        if (event.target.textContent === "Read") {
            event.target.textContent = "Not Read";
        } else {
            event.target.textContent = "Read";
        }
    }
});