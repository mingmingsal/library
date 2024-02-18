const myLibrary = [];
    const shelf = document.querySelector("#shelfUI");
    const destroyBook = document.querySelector("#delete");
    const loginForm = document.querySelector("#loginForm");
    destroyBook.addEventListener('click', (a) =>deleteBook(a));
    loginForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        const read = JSON.parse(document.querySelector("#read").value); 
        console.log (title + author  + pages + read)
        const newBook = new Book(title,author,pages,read)
        addBookToLibrary(newBook);
    })
    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        
    }
    Book.prototype.info = function () {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "has been read" : "not read yet"}`
        }
        
    //Delete all Children and Add all Books in Library to Shelf
    function addBookToLibrary(book){
        myLibrary.push(book);
        renderShelf();
    }
    function renderShelf(){
        clearShelf(shelf);
        for (let i = 0; i<myLibrary.length;i++){
            let visual = document.createElement("li");
            visual.dataset.index = i;
            visual.textContent = myLibrary[i].title;
            shelf.append(visual);
        }
    }
    function clearShelf(parent){
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    function deleteBook(a){
            myLibrary.splice(a,1);
            renderShelf();
    }
    const harryPotter = new Book("The Hobbit", "Hrr ccx", "23", true);

    
    addBookToLibrary(harryPotter);
    addBookToLibrary(harryPotter);
    addBookToLibrary(harryPotter);
    addBookToLibrary(harryPotter);
    addBookToLibrary(harryPotter);
    addBookToLibrary(harryPotter);
    addBookToLibrary(harryPotter);
    addBookToLibrary(harryPotter);
    renderShelf();