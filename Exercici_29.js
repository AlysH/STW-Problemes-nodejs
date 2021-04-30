let mergedPromise = function (promise) {
    return new Promise((resolve) => {
        promise.then(resolve, resolve);
    });
};

mergedPromise(Promise.resolve(0)).then(console.log);
mergedPromise(Promise.reject(1)).then(console.log);