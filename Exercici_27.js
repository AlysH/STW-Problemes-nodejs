let fs = require('fs');

let callbackToPromise = function (f) {
    return (function (file) {
        return new Promise((resolve, reject) => {
            f(file, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    });
};

let readToPromise2 = callbackToPromise(fs.readFile);

readToPromise2("a1.txt")
    .then(x => console.log("Contents: ", x))
    .catch(x => console.log("Error: ", x));