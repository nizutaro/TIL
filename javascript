#標準出力テンプレ

process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line',(line) => {
    lines.push(line);
});
reader.on('close',() => {
    console.log(lines[0]);
    console.log(lines[1]);
    console.log(lines[2]);
})
