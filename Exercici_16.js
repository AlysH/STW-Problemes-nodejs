const fs = require('fs');

function aFuture (data) {
    this.result = ((data === undefined) || (data === null))? null:data;
    this.isDone = this.result !== null;

    return {
        isDone: this.isDone,
        result: this.result
    }
}

let future = null;

function readIntoFuture(filename) {
    fs.readFile('./' + filename, 'utf-8', function (err, data) {
        if (err) {
            throw err;
        }
        future = new aFuture(data);
    });

    return new aFuture();
}

future = readIntoFuture('a1.txt');
console.log(future);

setTimeout(function () {
    console.log(future);
}, 1000);