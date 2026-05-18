console.log("Hello World!");

function test(a,b){
    console.log(a + b);
}
test(2,8);

// let http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'text/plain'});
//     res.end('Hello Worlddd!!!')
// }).listen(8080);

const os = require('os');
console.log(os.platform());

const fs = require('fs');
fs.readFile('myFile.txt',('utf') ,(err,data) => {
    if (err){
        console.log("Error Loading File: " + err);
        return;
    }
    console.log('File content: ' + data);
});

console.log('Reading file...');