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

function asyncToFuture(f) {
    return (function readIntoFuture(filename) {
        f('./' + filename, function (err, data) {
            if (err) {
                throw err;
            }
            future = new aFuture(data);
        });

        return new aFuture();
    });
}

function rIFuture2 () {
    let readIntoFuture2 = asyncToFuture(fs.readFile);

    future = readIntoFuture2('a1.txt');
    console.log("ReadIntoFuture 2: ");
    console.log(future);

    setTimeout(function () {
        console.log(future);
    }, 1000);
}

function rISFuture () {
    let statIntoFuture = asyncToFuture(fs.stat);
    future = statIntoFuture('a1.txt');

    console.log("Stat future: ");
    console.log(future);

    setTimeout(function () {
        console.log(future);
    }, 1000);
}

rIFuture2();
//rISFuture();