const fs = require('fs');

function asyncMap(list, f, callback2) {
    let resultList = [];

    let callback1 = function (err, data) {
        if (err) {
            callback2(err);
            throw err;
        }

        resultList.push(data);

        if (resultList.length === list.length) {
            callback2(resultList);
        }
    };

    list.map((file, index, array) => f('./' + file, 'utf8', (err, data) => callback1(err, data)));
}

asyncMap(['a1.txt'], fs.readFile, function (a) { console.log(a) });