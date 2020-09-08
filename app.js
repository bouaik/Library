(function library() {
  const submit = document.querySelector('.submitBtn');
  const bookList = document.querySelector('.book-list');

  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  function clearfields() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    document.querySelector('.pages').value = '';
    const read = document.getElementsByName('customRadioInline1');
    read.forEach((ele) => {
      ele.checked = false;
    });
  }

  function display(book) {
    const bookDisplay = document.createElement('div');
    bookDisplay.classList.add('col-11', 'mx-auto', 'col-md-6', 'col-lg-4', 'my-3');
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
                                    :</span><span id="book-red" class="border bg-secondary px-2 py-1 book-read">${book.read}</span></h6>
                                <a class="text-center delete-link d-block"><i class="far fa-trash-alt"></i></a>
                            </div>
                        </div>`;

    bookList.appendChild(bookDisplay);
    clearfields();

    bookDisplay.addEventListener('click', e => {
      if (e.target.textContent === 'yes') {
        e.target.innerHTML = 'no';
      } else if (e.target.textContent === 'no') {
        e.target.innerHTML = 'yes';
      }
    });
  }

  function displaystorage() {
    const exists = localStorage.getItem('bookList');

    if (exists) {
      const storageItems = JSON.parse(localStorage.getItem('bookList'));

      storageItems.forEach((element) => {
        display(element);
      });
    }
  }


  document.addEventListener('DOMContentLoaded', displaystorage);


  function updateStorage(book) {
    const bookList = localStorage.getItem('bookList') ? JSON.parse(localStorage.getItem('bookList')) : [];
    bookList.push(book);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

  function addBookToLibrary(e) {
    e.preventDefault();
    let res;
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const pages = document.querySelector('.pages').value;
    const read = document.getElementsByName('customRadioInline1');
    read.forEach((ele) => {
      if (ele.checked) {
        res = ele.value;
      }
    });


    const book = new Book(title, author, pages, res);
    display(book);
    updateStorage(book);
  }


  submit.addEventListener('click', addBookToLibrary);

  function removeItem(e) {
    e.preventDefault();
    const link = e.target.parentElement;
    if (link.classList.contains('delete-link')) {
      const book = link.parentElement.parentElement.parentElement;
      bookList.removeChild(book);
    }
  }


  bookList.addEventListener('click', removeItem);
}());