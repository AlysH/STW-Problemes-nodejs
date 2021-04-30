let antipromise = function (promise) {
    return new Promise((resolve, reject) => {
        promise.then((x) => {
            reject(x);
        }).catch((x) => {
            resolve(x);
        });
    });
};

antipromise(Promise.reject(0))
    .then((x) =>{ console.log("Antipromise resolved, x = " + x) });
antipromise(Promise.resolve(1))
    .catch((x) => { console.log("Antipromise rejected, x = " + x) });