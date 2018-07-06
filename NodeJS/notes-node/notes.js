console.log("Starting notes.js");

// console.log(module);

// module.exports.age = 39;

// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New note';
// }

// module.exports.add = (a, b) => {
//     return a + b;
// }

let addNote = (title, body) =>{
  console.log("Adding note", title, body);  
};

let getAll = () => {
  console.log("Getting all notes");
};

let getNote = (title) => {
  console.log("Getting note: ", title);
};

let removeNote = (title) => {
  console.log("Removing note: ", title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};