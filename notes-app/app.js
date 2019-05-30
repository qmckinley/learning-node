// const validator = require('validator');
// const chalk = require('chalk');
// const getNotes = require('./notes');

const command = process.argv[2];

console.log(process.argv) // node app.js add --title="This is my title"

if (command === 'add') {
  console.log('Adding note!');
} else if (command === 'remove') {
  console.log('Removing note!');
}

// const msg = getNotes();
// console.log(msg);

// // console.log(validator.isEmail('andrew@example.com'))
// // console.log(validator.isURL('https://mead.io'))

// const chalkMsg = chalk.green.bold.inverse('Success!');
// const chalkError = chalk.bgRed.bold('Error!');
// console.log(chalkMsg);
// console.log(chalkError);

// console.log(process.argv);