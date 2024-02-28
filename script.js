const myLibrary = [];

function Book(title, author, pages, read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read ? 'already read' : 'not read yet '}`;
    };
}

hobbit = new Book('The Hobbit', 'Tolkien');

console.log(hobbit.info())

function addBookToLibrary(title) {
    if (!title) {
        newBook = new Book(window.prompt('Enter a book title: '));
    } else {
        newBook = new Book(title);
    }
    myLibrary.push(newBook);
}

function showLibrary() {
    for (let book in myLibrary) {
        showBook(book);
    }
}

function showBook(book) {
    
}

addBookToLibrary();
addBookToLibrary('Windup Girl');
addBookToLibrary('La belle et la bête');
addBookToLibrary('Master and Marguerita');

showLibrary();