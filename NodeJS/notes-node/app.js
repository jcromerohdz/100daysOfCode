console.log('Staring app.js.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');


var  res = notes.addNote();
console.log(res);

let add_res = notes.add(5,5);
console.log(`Result: ${add_res}`);

var user = os.userInfo();
// console.log(user);


//fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
console.log(`Hello ${user.username}! you are ${notes.age}`);