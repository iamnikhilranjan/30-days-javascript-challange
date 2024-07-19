//Day-07 (19/07/20204) @iamnikhilranjan
//1.Object creation and Access
const book = {
    title: 'Atomic Habits',
    author: 'James Clear',
    Year: 2015
};
console.log(book);

console.log(`Title: ${book.title}, Author: ${book.author}`);

//2.Objects Methods

book.printDetatils = function(){
    console.log(`Title: ${book.title}, Author: ${book.author}`);
}

book.printDetatils();
console.log(book);

book.updateYear = function(year) {
    this.Year = year;
  };
book.updateYear(2019);
console.log(book);

//3. Nested Objects
const library = {
    name: 'City library',
    books: [
        {
         title: 'Subtle Art',
         Author: 'Mark Manson'
        },
        {
            title: "Atomic habits",
            Author: 'James Clear'
        }
    ]
}
console.log(library);

console.log("Library Name: ",library.name);
console.log("Book titles: ");
library.books.forEach(book => {
    console.log(book.title);
});

book.aboutBook = function(){
    console.log(`Titlle: ${this.title}, Year: ${this.Year}`);
}
book.aboutBook();

library.books.forEach((book, index) => {
    console.log(`Book ${index + 1}:`);
    for (let property in book){
        if(book.hasOwnProperty(property)){
            console.log(`${property}: ${book[property]}`);
        }
    }
    console.log('---');
});

library.books.forEach((book, index) => {
    console.log(`Book ${index+1}:`);

    console.log("keys:", Object.keys(book));
    console.log("values:",Object.values(book));

    console.log("---");
})