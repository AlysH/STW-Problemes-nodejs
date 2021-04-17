const fs = require('fs');

let EnhancedFuture = (function () {
    let singleInstance = null;
    let callback = null;

    return (function (data) {
        this.isDone = false;
        this.result = null;
        this.registerCallback = (function (f) {
            callback = f;

            if (this.result) {
                f(singleInstance);
            }
        });

        if (data) {
            this.result = data;
            this.isDone = true;

            singleInstance = this;

            if (this.result && (typeof callback === 'function')) {
                console.log("dataEnhancedFuture: " + this.result);
                callback(singleInstance);
            }
        }

        singleInstance = this;

        if (singleInstance) {
            return singleInstance;
        }
    });
})();

let enhancedFuture = new EnhancedFuture();

function asyncToEnhancedFuture (f) {
    return (function (filename) {
        f("./" + filename, "utf-8", function (err, data) {
            if (err) {
                throw err;
            }
            enhancedFuture = new EnhancedFuture(data);
        });

        return new EnhancedFuture();
    });
}

let readIntoEnhancedFuture = asyncToEnhancedFuture(fs.readFile);
enhancedFuture = readIntoEnhancedFuture('a1.txt');
enhancedFuture.registerCallback(console.log);