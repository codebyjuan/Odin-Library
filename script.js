const myLibary = [];


function Book(title, author, pages, haveRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.haveRead = haveRead
    this.info = function(){console.log(this.title, this.author, this.pages, this.haveRead)}
}

function addBookToLibrary(title, author, pages, haveRead) {
    const newBook = new Book(title, author, pages, haveRead);
    myLibary.push(newBook)
}