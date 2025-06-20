const library = [];
const container = document.getElementById("container");
const addButton = document.getElementById("add");
const addPopup = document.getElementById("addPopup")
const closePopup = document.getElementById("close")
const addBookBtn = document.getElementById("addBook")
const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const read = document.getElementById("read");

function Book(title, author, year, read = false){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read; 
    this.id = crypto.randomUUID();
}

Book.prototype.isRead = function(bool){
    this.read = bool
}

function addBookToLibrary(title, author, year, read = false){
    var book = new Book(title, author, year, read);
    library.push(book);
}

function deleteBook(event){
    const parent = this.parentElement;
    parent.remove();
    removeBookFromLibrary(parent.dataset.id);
}

function removeBookFromLibrary(id){
    for (let i = 0; i < library.length; i++) {
        if (library[i].id == id) {
            library.splice(i, 1);
        }
    }
}

function readBook(event){
    const parent = this.parentElement;
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        if (book.id == parent.dataset.id){
            book.read ? book.isRead(false) :book.isRead(true);        
        }
    }
    redisplayBooks()
}


function displayBooks(){
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", book.id)
        const title = document.createElement("h3");
        title.innerText = book.title;
        const author = document.createElement("h4");
        author.innerText = book.author;
        const year = document.createElement("p");
        year.innerText = book.year;
        const read = document.createElement("p");
        read.innerText = book.read ? "Read" : "Not Read";
        const readButton = document.createElement("button");
        readButton.innerText = book.read ? "Mark Unread" : "Mark Read";
        readButton.addEventListener('click', readBook);
        const delButton = document.createElement("button");
        delButton.classList.add("delete");
        delButton.innerText = "Delete Book";
        delButton.addEventListener('click', deleteBook);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(year);
        card.appendChild(read);
        card.appendChild(readButton);
        card.appendChild(delButton)
        container.appendChild(card);
    }
/*
<div class="card">
    <h3>Title</h3>
    <h4>Author</h4>
    <p>2000</p>
    <p>Read</p>
</div>
*/
}

function redisplayBooks(){
    container.innerHTML = "";
    displayBooks()
}

function addAndDisplayBook(title, author, year, read = false){
    addBookToLibrary(title, author, year, read)
    redisplayBooks()
};

addButton.addEventListener('click', () => {
    addPopup.showModal()
}
);

closePopup.addEventListener('click', (e) => {
    addPopup.close()
    e.preventDefault();
});

addBookBtn.addEventListener('click', (e) => {
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const bookYear = year.value;
    const bookRead = read.checked;
    addAndDisplayBook(bookTitle, bookAuthor, bookYear, bookRead);
    e.preventDefault();
    addPopup.close()
    title.value = "";
    author.value = "";
    year.value = "";
    read.checked = false;
});

addBookToLibrary("Player Piano", "Vonnegut", 1952, true);
addBookToLibrary("The Sirens of Titan", "Vonnegut", 1959, true);
addBookToLibrary("Mother Night", "Vonnegut", 1961, true);
addBookToLibrary("God Bless You, Mr. Rosewater, or Pearls Before Swine", "Vonnegut", 1965, true);
addBookToLibrary("Slaughterhouse-Five, or The Children's Crusade: A Duty-Dance with Death", "Vonnegut", 1969, true);
addBookToLibrary("Breakfast of Champions, or Goodbye Blue Monday", "Vonnegut", 1973, true);
addBookToLibrary("Slapstick, or Lonesome No More!", "Vonnegut", 1976, false);
addBookToLibrary("Jailbird", "Vonnegut", 1979, false);
addBookToLibrary("Deadeye Dick", "Vonnegut", 1982, false);
addBookToLibrary("Galapagos", "Vonnegut", 1985, true);
addBookToLibrary("Bluebeard, the Autobiography of Rabo Karabekian (1916–1988)", "Vonnegut", 1987, true);
addBookToLibrary("Hocus Pocus", "Vonnegut", 1990, false);
addBookToLibrary("Timequake", "Vonnegut", 1997, true);
addBookToLibrary("Fight Club", "Palahniuk", 1996, true);

displayBooks();

addAndDisplayBook("House of Leaves", "Danielewski", 2000, true);

