const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const mybook = input.value;
    if (mybook.trim() == '') {
        alert('Add a book and a chapter before adding.');
        return
    }

    input.value = '';
    
    const book = document.createElement('li');
    const text = document.createElement('span');
    const deleteBtn = document.createElement('button');

    book.appendChild(text);
    text.textContent = mybook;
    book.appendChild(deleteBtn);
    deleteBtn.textContent = '❌';
    list.appendChild(book);

    deleteBtn.addEventListener('click', () => {
        list.removeChild(book);
    });

    input.focus();

});