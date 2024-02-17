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

    function addBookToLibrary(book){
        myLibrary.push(book);
        addBookToShelf(book);
    }
    function addBookToShelf(book){

    }
    function renderShelf(){
        
        for (let i = 0; i<myLibrary.length;i++){
            let visual = document.createElement("li");
            visual.dataset.index = i;
            visual.textContent = myLibrary[i].title;
            shelf.append(visual);
        }
    }
    function clearShelf(){
        
    }
    //Destroy book at index and shift, update data attributes of books in DOM
    function deleteBook(a){
            console.log(`Deleting book at ${a}`);
            delete myLibrary[a];
            for(let i = a;i<myLibrary.length;i++){
                myLibrary[i]=myLibrary[i+1];
                shelf.children[i].dataset.index = i-1;
                
            }
            shelf.removeChild(shelf.children[a]);
            myLibrary.pop();
        
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
    renderLibrary();