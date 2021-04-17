const fs = require('fs');

function asyncMap(list, f, callback_final) {
    let resultList = [];
    let counter = 0;
    let callback_error = false;

    list.map((file, index) => f('./' + file, 'utf8', (err, data) => {
        if (err && !callback_error) {
            callback_final(err, null);
            callback_error = true;
            throw err;
        } else {
            resultList[index] = data;
            counter++;

            if (counter === list.length) {
                callback_final(resultList);
            }
        }
    }));
}

asyncMap(['a1.txt'], fs.readFile, function (a) { console.log(a) });