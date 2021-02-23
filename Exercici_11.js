const fs = require('fs');

function asyncMap(list, f, callback2) {
    let resultList = [];

    let myPromise = new Promise((resolve, reject) => {
        list.map((file, index, array) => f('./' + file, 'utf8', (err, data) => {
            if (err) {
                callback2(err);
                throw err;
            }

            resultList.push(data);

            if (index === (array.length - 1)) {
                resolve();
            }
        }));
    });

    myPromise.then(() => {
        callback2(resultList);
    });
}

asyncMap(['a1.txt', 'a2.txt'], fs.readFile, function (a) { console.log(a) });