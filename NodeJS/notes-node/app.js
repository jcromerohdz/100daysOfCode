console.log('Staring app.js.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('Christian'));

let filteredArray = _.uniq(["jose", "jose", 1, 2, 2, 4, 5]);
console.log(filteredArray);

// var  res = notes.addNote();
// console.log(res);

// let add_res = notes.add(5,5);
// console.log(`Result: ${add_res}`);

// var user = os.userInfo();
// console.log(user);


//fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
// console.log(`Hello ${user.username}! you are ${notes.age}`);