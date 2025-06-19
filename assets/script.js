const library = [];

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

function addBookToLibrary(title, author, year, read = false){
    var book = new Book(title, author, year, read);
    library.push(book);
}

addBookToLibrary("Player Piano", "Vonnegut", 1952, true)
addBookToLibrary("The Sirens of Titan", "Vonnegut", 1959, true)
addBookToLibrary("Mother Night", "Vonnegut", 1961, true)
addBookToLibrary("God Bless You, Mr. Rosewater, or Pearls Before Swine", "Vonnegut", 1965, true)
addBookToLibrary("Slaughterhouse-Five, or The Children's Crusade: A Duty-Dance with Death", "Vonnegut", 1969, true)
addBookToLibrary("Breakfast of Champions, or Goodbye Blue Monday", "Vonnegut", 1973, true)
addBookToLibrary("Slapstick, or Lonesome No More!", "Vonnegut", 1976, false)
addBookToLibrary("Jailbird", "Vonnegut", 1979, false)
addBookToLibrary("Deadeye Dick", "Vonnegut", 1982, false)
addBookToLibrary("Galapagos", "Vonnegut", 1985, true)
addBookToLibrary("Bluebeard, the Autobiography of Rabo Karabekian (1916–1988)", "Vonnegut", 1987, true)
addBookToLibrary("Hocus Pocus", "Vonnegut", 1990, false)
addBookToLibrary("Timequake", "Vonnegut", 1997, true)
addBookToLibrary("Fight Club", "Palahniuk", 1996, true)