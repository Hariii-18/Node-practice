import fs from 'fs/promises'

let a = await fs.readFile("hari.txt")
let b = await fs.writeFile("hari.txt","this is a promises method")
console.log(a.toString(),b)