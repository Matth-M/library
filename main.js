let library = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.info = function() {
	if (this.read) {
		return `${this.title} by ${this.author}, ${this.pages} pages, read.`
	} else {
		return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`
	}
}

function addBookToLibrary(title, author, pages, read) {
	let newBook = new Book(title, author, pages, read);
	library.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);


const btn = document.querySelector('button');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

btn.addEventListener('click', () => {
	addBookToLibrary(title.value, author.value, pages.value, read.checked);
	// clearInput();
	displayBooks();
});

function clearInput() {
	title.value = '';
	author.value = '';
	pages.value = '';

}

function displayBooks() {
	const tbody = document.querySelector('tbody');
	//Remove all books from display
	while (tbody.firstChild) {
		tbody.removeChild(tbody.lastChild);
	}

	//Loops through all books stored and display them
	for (let i = 0; i < library.length; i++) {
		let book = library[i];
		const tRow = document.createElement("tr");
		const titleCell = document.createElement("td");
		titleCell.textContent = book.title;

		const authorCell = document.createElement("td");
		authorCell.textContent = book.author;

		const pagesCell = document.createElement("td");
		pagesCell.textContent = book.pages;

		const readCell = document.createElement("td");
		const readInput = document.createElement("input");
		readInput.type = "checkbox";
		readInput.checked = book.read;

		readCell.appendChild(readInput);

		const deleteCell = document.createElement("td");
		const deleteBtn = document.createElement('button');
		deleteBtn.type = 'button';
		deleteBtn.textContent = 'Delete';
		deleteBtn.addEventListener('click', () => {
			library.splice(i, 1);
			displayBooks();
		});
		deleteCell.append(deleteBtn);

		tRow.append(titleCell, authorCell, pagesCell, readCell, deleteCell);
		tbody.append(tRow);
	}
}

displayBooks();
