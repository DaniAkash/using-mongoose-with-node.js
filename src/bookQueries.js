require("./config/mongodb");
require('./models/author');
const Book = require('./models/book');

// const opticksBook = new Book({
//   title: "Opticks",
//   author: "5decca64537b88140db610ea",
//   summary: "Opticks: or, A Treatise of the Reflexions, Refractions, Inflexions and Colours of Light is a book by English natural philosopher Isaac Newton",
//   isbn: "9781987618297"
// });

// opticksBook.save()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(console.error);

const findQuery = Book.findOne().populate("author", "first_name family_name");

findQuery.exec()
  .then(response => {
    console.log(response);
  })
  .catch(console.error);