let parallelPromise = function (promise1, promise2) {
    return new Promise((resolve) => {
        Promise.all([promise1, promise2]).then((results) => {
            resolve(results);
        });
    });
};

let p1 = parallelPromise(Promise.resolve(0), Promise.resolve(1));

p1.then(console.log);

let plast = new Promise((resolve) => {
    setTimeout(() => { resolve(0) }, 200);
});

let pfirst = new Promise((resolve) => {
    setTimeout(() => { resolve(1) }, 100);
});

let p2 = parallelPromise(plast, pfirst);

p2.then(console.log);