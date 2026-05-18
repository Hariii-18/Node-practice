const fs = require('fs')
// console.log(fs)

// Writing a File
fs.writeFileSync("hari.txt","IGNORE ME ,Hey this txt file is created by fs  module")
fs.writeFile("hari2.txt", "IGNORE ME ,hey this is another text using arrow function to print something on the terminal", () => {
    console.log("printed")
})

// Reading a File
fs.readFile("./fs and path modules/hari.txt", (err, data) => {
    console.log(err + data.toString())
})

// Appending a File
fs.appendFile("./fs and path modules/hari2.txt","this text appended using apppendFile method",(err,data) => {
    if (err) {
        console.error("error: "+ err)
        return;
    }
    console.log("Text succesfully appended!")
})


let fss = require('fs/promises')

let a = await fss.readFile("hari.txt")
let b = await fss.writeFile("hari.txt","this is a promises method")
console.log(a.toString(),b)