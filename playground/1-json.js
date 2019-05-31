const fs = require('fs')
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// {"title":"Ego is the Enemy","author":"Ryan Holiday"}
// fs.writeFileSync('1-json.json', bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)
// Ryan Holiday

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)
// Ego is the Enemy

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = 'Gunther';
user.age = 54

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON)