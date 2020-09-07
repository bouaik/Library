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
        myLibrary.push(book)

        
    }



})();