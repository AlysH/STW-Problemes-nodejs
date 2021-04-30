let functionPromiseComposer = function (f1, f2) {
    return function (x) {
        return new Promise((resolve, reject) => {
            f2(x).then((res) => {
                f1(res).then(resolve).catch(reject);
            }).catch(reject);
        });
    };
};

let f1 = x => new Promise((resolve, reject) =>
    resolve(x + 1));
let f2 = x => new Promise((resolve, reject) =>
    reject('always fails'));
let f3 = x => new Promise((resolve, reject) =>
    setTimeout(() => resolve(x * 2), 500));

functionPromiseComposer(f1, f1)(3).then(console.log);
functionPromiseComposer(f1, f2)(3).catch(console.log);
functionPromiseComposer(f1, f3)(3).then(console.log);