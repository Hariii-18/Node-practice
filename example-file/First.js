console.log("Hello World!");

function test(a,b){
    console.log(a + b);
}
test(2,8);

import http from 'http';
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello Worlddd!!!')
}).listen(8080);

import os from 'os';
console.log(os.platform());

import fs from 'fs';
fs.readFile('./example-file/myFile.txt',('utf8') ,(err,data) => {
    if (err){
        console.log("Error Loading File: " + err);
        return;
    }
    console.log('File content: ' + data);
});

console.log('Reading file...');

import slugify from 'slugify';

var a = slugify('some  string') // some-string
console.log(a)
// if you prefer something other than '-' as separator
var b = slugify('some string fkew6^%&^%@#', '_')  // some_string
console.log(b)
