var fs = require('fs');

// 비동기 방식 file 읽기 : fs.readfile
fs.readFile('./home.js', 'utf-8', function(error,data) {
    console.log(`01 readAsync ${data}`);
})



// 동기 방식 file 읽기 : fs.readfileSync
var data = fs.readFileSync('./home.js', 'utf-8');
console.log(`02 readSync ${data}`);
