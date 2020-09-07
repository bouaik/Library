(function () {

    let myLibrary = [];

    const submit = document.querySelector('.submitBtn')

    submit.addEventListener('click', addBookToLibrary)

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    function addBookToLibrary(e) {
        e.preventDefault() 
        let res
        const title = document.querySelector('.title').value
        const author = document.querySelector('.author').value
        const pages = document.querySelector('.pages').value
        const read = document.getElementsByName('customRadioInline1'); 
        read.forEach( (ele) => {
            if(ele.checked) {
                res = ele.value
            }  
        })

        const book = new Book(title, author, pages, res)
        display(book)
    }


    myLibrary.forEach( book => display(book))

    function display(book) {
        const bookList = document.querySelector('.book-list')
        const bookDisplay = document.createElement('div')
        bookDisplay.classList.add('col-11', 'mx-auto', 'col-md-6', 'col-lg-4', 'my-3')
        bookDisplay.innerHTML = `<div class="card text-left">
                            <div class="card-body">
                                <h6 class="text-capitalize "><span class="badge badge-warning mr-2">title :</span><span
                                        id="book-title">${book.title}</span></h6>
                                <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">author
                                        :</span><span id="book-author">
                                        ${book.author}
                                    </span></h6>
                                <h6 class="text-capitalize"><span class="badge badge-danger mr-2">number of pages
                                        :</span><span id="book-pages">${book.pages}</span></h6>
                                <h6 class="text-capitalize"><span class="badge badge-info mr-2">Read ?
                                    :</span><span id="book-red">${book.read}</span></h6>
                            </div>
                        </div>`

        bookList.appendChild(bookDisplay)
    }
    


})();