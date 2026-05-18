const fs = require('fs')
// console.log(fs)

fs.writeFileSync("hari.txt","IGNORE ME ,Hey this txt file is created by fs  module")
fs.writeFile("hari2.txt", "IGNORE ME ,hey this is another text using arrow function to print something on the terminal", () => {
    console.log("printed")
})
fs.readFile("./fs and path modules/hari.txt", (err, data) => {
    console.log(err + data.toString())
})
