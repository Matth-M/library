export class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
	info() {
		if (this.read) {
			return `${this.title} by ${this.author}, ${this.pages} pages, read.`;
		} else {
			return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`;
		}
	}
}
