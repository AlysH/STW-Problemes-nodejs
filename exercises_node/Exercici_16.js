const fs = require('fs');

let future = { isDone: false, result: null };

function readIntoFuture(filename) {
    fs.readFile('./' + filename, 'utf-8', () => {

    })
}