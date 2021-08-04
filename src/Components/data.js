const BookName = document.getElementById("BookName");
const Author = document.getElementById("Author");
const ISBN = document.getElementById("ISBN");
const Price = document.getElementById("Price");

const Addbtn = document.getElementById("AddBook");

const database =addEventListener('click',(e)=>{
    e.preventDefault();
    database.ref("Books/" + id.value)({
         
        BookName:BookName.value,
        Author:Author.value,
        ISBN :ISBN.value,
        Price :Price.value
    });
});
