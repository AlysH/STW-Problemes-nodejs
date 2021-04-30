const fs = require('fs');

let f7 = function (llista, callback_final) {
    let resultat = [];

    llista.forEach((element, index, array) =>
        fs.readFile('./' + element, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        resultat.splice(index, 0, data);

        if (resultat.length === llista.length) {
            callback_final(resultat);
        }
    }));
};

let llista_arxius = ['a1.txt','a2.txt'];

f7(llista_arxius, function (res) {console.log(res);});