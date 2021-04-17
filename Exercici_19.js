const fs = require('fs');

let when = function (f) {
    this. do = function (g) {
        f(g);
    };

    return {
        do: this.do
    };
};

let f1 = function (callback) { fs.readFile('a1.txt', 'utf-8', callback) };
let f2 = function (error, result) { console.log(result) };

when(f1).do(f2);