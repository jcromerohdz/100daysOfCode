console.log('Staring app.js.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');


//Getting input from the user
const argv = yargs.argv;
let command = process.argv[2]
console.log('Command: ', command);
console.log('Process', process.argv);
console.log("Yargs", argv);

if (command === "add") {
  console.log("Adding new note");
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
  console.log("Listing all notes");
  notes.getAll();
} else if (command == "read") {
  console.log("Reading the note");
  notes.getNote(argv.title);
} else if (command == "remove") {
  console.log("Remove the note");
  notes.removeNote(argv.title);
} else{
    console.log("Command not recognized");
}



// console.log(_.isString(true));
// console.log(_.isString('Christian'));

// let filteredArray = _.uniq(["Chris", "Chris", 1, 2, 2, 4, 5]);
// console.log(filteredArray);

// var  res = notes.addNote();
// console.log(res);

// let add_res = notes.add(5,5);
// console.log(`Result: ${add_res}`);

// var user = os.userInfo();
// console.log(user);


//fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
// console.log(`Hello ${user.username}! you are ${notes.age}`);