export class Book {
    private title: string;
    private author: string;
    private year: number;

    constructor(title: string, author: string, year: number) {
        this.setTitle(title);
        this.setAuthor(author);
        this.setYear(year);
    }
    public getTitle() {
        return this.title;
    }
    public getAuthor() {
        return this.author;
    }
    public getYear() {
        return this.year;
    }
    public setTitle(title: string) {
        this.title = title;
    }
    public setAuthor(author: string) {
        this.author = author;
    }
    public setYear(year: number) {
        this.year = year;
    }
}