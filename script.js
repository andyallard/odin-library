const myLibrary = [];

function Book(title, author, imageLink, pages, read=false) {
    this.title = title;
    this.author = author;
    this.imageLink = imageLink;
    this.pages = pages;
    this.read = read;

    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read ? 'already read' : 'not read yet '}`;
    };
}

function addBookToLibrary(title, author, imageLink, pages, read=false) {
    if (!title) {
        newBook = new Book(window.prompt('Enter a book title: '));
    } else {
        newBook = new Book(title, author, imageLink, pages, read);
    }
    myLibrary.push(newBook);
}

function showLibrary(library) {
    for (let book of library) {

        console.log(`book = ${book}`);
        console.log(book.info());
        createBookCard(book);
    }
}

function createBookCard(book) {
    library = document.querySelector('.library');
    library.classList.add('card-group');

    divCard = document.createElement('div');
    divCard.classList.add('card', 'text-center', 'border-info');

    image = document.createElement('img');
    image.classList.add('card-img-top');
    image.setAttribute('src', book.imageLink);
    image.setAttribute('alt', `cover of ${book.title}`);

    divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');
    title = document.createElement('h3');
    title.classList.add('card-title');
    title.textContent = book.title
    author = document.createElement('h4');
    author.classList.add('card-subtitle', 'author');
    author.textContent = book.author

    list = document.createElement('ul');
    list.classList.add('list-group', 'list-group-flush');
    pages = document.createElement('li');
    pages.classList.add('list-group-item');
    pages.textContent = `${book.pages} pages`;

    read = document.createElement('li');
    read.classList.add('form-check');
    readInput = document.createElement('input');
    readInput.classList.add('form-check-input');
    readInput.setAttribute('type', 'checkbox');
    readInput.setAttribute('value', '');
    readLabel = document.createElement('label');
    readLabel.classList.add('form-check-label');
    readLabel.textContent = 'read';
    if (book.read) {
        readInput.setAttribute('id', 'flexCheckChecked');
        readInput.setAttribute('checked', true);
        readLabel.setAttribute('for', 'flexCheckChecked');
    } else {
        readInput.setAttribute('id', 'flexCheckDefault');
        readLabel.setAttribute('for', 'flexCheckDefault');
    }

    library.appendChild(divCard);
    divCard.appendChild(image);
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(title);
    divCardBody.appendChild(author);
    divCard.appendChild(list);
    list.appendChild(pages);
    list.appendChild(read);
    read.appendChild(readInput);
    read.appendChild(readLabel);
}

addBookToLibrary();
addBookToLibrary('Windup Girl', 'Paolo Bacigalupi', 'https://upload.wikimedia.org/wikipedia/en/0/05/The_Windup_Girl_%28Paolo_Bacigalupi_novel_-_cover_art%29.jpg', 361, true);
addBookToLibrary('La belle et la bête', 'unknown' ,'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Crane_beauty5.jpg/330px-Crane_beauty5.jpg', 'variable', false);
addBookToLibrary('Мастер и Маргарита', 'Михаил Афанасьевич Булгаков', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/MasterandMargaritaFirstEdition.jpg/330px-MasterandMargaritaFirstEdition.jpg', 372, true);

console.table(myLibrary);

showLibrary(myLibrary);