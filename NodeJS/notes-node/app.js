console.log('Staring app.js.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


//Getting input from the user
let command = process.argv[2]
console.log('Command: ', command);

if (command === "add") {
  console.log("Adding new note");
} else if (command === "list") {
  console.log("Listing all notes");
} else if (command == "read") {
  console.log("Reading the note");
} else if (command == "remove") {
  console.log("Remove the note");
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