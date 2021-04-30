const fs = require('fs');

function asyncToEnhancedFuture (f) {
    return (function (file) {
        let callback = null;
        let future = {
            isDone: false,
            result: null,
            registerCallback: function (cb) {
                if (future.isDone) {
                    cb(future);
                } else {
                    callback = cb;
                }
            }
        };


        f("./" + file, "utf-8", function (err, data) {
            if (err) {
                throw err;
            } else {
                future.result = data;
                future.isDone = true;

                if (callback != null) {
                    callback(future);
                }
            }
        });

        return future;
    });
}

let enhancedFutureToPromise = function (enhancedFuture) {
    return new Promise((resolve, reject) => {
        enhancedFuture.registerCallback((future) => {
            resolve(future.result);
        });
    });
};

readIntoEnhancedFuture = asyncToEnhancedFuture(fs.readFile);
let enhancedFuture = readIntoEnhancedFuture('a1.txt');
let promise = enhancedFutureToPromise(enhancedFuture);
promise.then(console.log);