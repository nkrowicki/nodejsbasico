const fs = require('fs')
const ops = require('./src/fileops');

let incValue;

fs.readFile('./resources/number.txt', 'utf8', (err, text) => {
    if (err) throw err;
    const number = text.split('\n').map(n => Number(n));
    console.log('-----------------')
    console.log(typeof number + ' number');
    console.log(number);
    incValue = ops.incrementValues(number);
    console.log('-----------------')

    fs.writeFile('./resources/numbernew.txt', incValue.join('\n'), (err, result) => {
        if (err) throw err;
    
    })
    
});




console.log('aca');