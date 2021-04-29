const fs = require('fs');

let when = function (f) {
    this.promises = [];
    let err1;
    let err2;
    let res1;
    let res2;

    this.promises.push(new Promise((resolve) => {
        f((error, result) => {
            err1 = error;
            res1 = result;

            resolve();
        });
    }));

    this.and = function (g) {

        this.promises.push(new Promise((resolve) => {
            g((error, result) => {
                err2 = error;
                res2 = result;

                resolve();
            });
        }));

        return this;
    };

    this.do = function (h) {
        Promise.all(this.promises).then(() => {
            h(err1, err2, res1, res2);
        });
    };

    return this;
};

let f1 = function (callback) { fs.readFile('a1.txt', 'utf-8', callback) };
let f2 = function (callback) { fs.readFile('a2.txt', 'utf-8', callback) };
let f3 = function (err1, err2, res1, res2) { console.log(res1, res2) };

when(f1).and(f2).do(f3);