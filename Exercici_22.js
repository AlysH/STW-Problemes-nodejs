let asyncComposer = function (f1, f2) {
    return function (a, b) {
        f1(a, function (error, result) {
            f2(result, function (err, res) {

                b(err, res);
            });
        });
    };
};

let f1 = function (a, callback) { callback(null, a + 1); };
let f3 = asyncComposer(f1, f1);

f3(3, function (error, result) { console.log(result) });

f1 = function (a, callback) { callback(null, a + 1) };
let f2 =  function (a, callback) { callback("error", "") };
f3 = asyncComposer(f1, f2);
f3(3, function (error, result) { console.log(error, result); });