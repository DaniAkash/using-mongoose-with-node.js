require("./config/mongodb");

const Author = require('./models/author');

const myFirstAuthor = new Author({
  first_name: "Isaac",
  family_name: "Newton",
  date_of_birth: new Date(1643, 1, 4),
  date_of_death: new Date(1727, 3, 31),
});

// Author.create({
//   first_name: "Isaac",
//   family_name: "Newton",
//   date_of_birth: new Date(1643, 1, 4),
//   date_of_death: new Date(1727, 3, 31),
// })

myFirstAuthor.save()
  .then(response => {
    console.log(response);
  })
  .catch(console.error)

