const myLibrary = [];
const shelf = document.getElementById("shelfUI");
const loginForm = document.getElementById("loginForm");
const bookView = document.getElementById("bookView")
const deleteBtn = bookView.querySelector(".delete");
deleteBtn.addEventListener('click',  function(e){
    deleteBook(bookView.dataset.index);
} );
const readBtn = bookView.querySelector(".toggleRead");
readBtn.addEventListener('click',  function(e){
    toggleRead(bookView.dataset.index);
} );
//Add Library Book
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = JSON.parse(document.querySelector("#read").value);
    console.log(title + author + pages + read)
    const newBook = new Book(title, author, pages, read)
    addBookToLibrary(newBook);
    closeForm();
})
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}
function openForm(){
    loginForm.parentNode.showModal();
}
function closeForm(){
    loginForm.parentNode.close();
}
Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "has been read" : "not read yet"}`
}

//Delete all Children
function addBookToLibrary(book) {
    myLibrary.push(book);
    renderShelf();
}
// and Add all Books in Library to Shelf
function renderShelf() {
    clearShelf(shelf);
    for (let i = 0; i < myLibrary.length; i++) {
        //Create Book Card
        let visual = document.createElement("li");
        visual.className = "book";
        let title = document.createElement("p");
        title.textContent = myLibrary[i].title;
        visual.append(title);
        shelf.append(visual);

        //Render View Button
        let viewBtn = document.createElement("button");
        viewBtn.textContent = "View";
        viewBtn.addEventListener('click', () => viewBook(i));
        visual.append(viewBtn);

        //Render Delete Button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', () => deleteBook(i));
        visual.append(deleteBtn);
    }
}

function viewBook(index) {
    bookView.querySelector(".title").textContent = myLibrary[index].title;
    bookView.querySelector(".author").textContent = myLibrary[index].author;
    bookView.querySelector(".pages").textContent = myLibrary[index].pages;
    bookView.querySelector(".read").textContent = myLibrary[index].read ? "Yes" : "No";
    
    bookView.dataset.index = index;
    
    bookView.showModal();
    
}
function closeBook(){
    bookView.close();
}
function toggleRead(index){
    myLibrary[index].read = !myLibrary[index].read;
    bookView.querySelector(".read").textContent = myLibrary[index].read ? "Yes" : "No";
}
function clearShelf(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function deleteBook(a) {
    myLibrary.splice(a, 1);
    closeBook();
    renderShelf();
}
const harryPotter = new Book("The Hobbit", "JRR Tolkien", "23", true);
const harryPotter2 = new Book("The Prisoner", "JK Rownlin'", "54", true);
const harryPotter3 = new Book("The Askaban", "JRR Rowling", "12", false);
const harryPotter4 = new Book("The Chamber", "JRK Rowkien", "44", true);
addBookToLibrary(harryPotter);
addBookToLibrary(harryPotter2);
addBookToLibrary(harryPotter3);
addBookToLibrary(harryPotter4);

renderShelf();