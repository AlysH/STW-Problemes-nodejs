const fs = require('fs');

let readToPromise = function (file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        });
    });
};

readToPromise("a1.txt").then(x => console.log("Contents: ", x)).catch(x => console.log("Error: ", x));
readToPromise("notfound.txt").then(x => console.log("Contents: ", x)).catch(x => console.log("Error: ", x));