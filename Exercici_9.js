const fs = require('fs');

let f6 = function (llista, callback_final) {
    let fileContents = [];

    let readFiles = new Promise((resolve, reject) => {
        llista.forEach((element, index, array) => fs.readFile('./' + element, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            fileContents.splice(index, 0, data);

            if (index === (array.length - 1)) {
                resolve();
            }
        }));
    });

    readFiles.then(() => {
        callback_final(fileContents);
    });
};

let llista_arxius = ['a1.txt','a2.txt'];

f6(llista_arxius, function (res) {
    console.log(res);
});