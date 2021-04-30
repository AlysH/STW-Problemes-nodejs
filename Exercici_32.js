let promiseBarrier = function(x) {
    let list = [];
    let counter = 0;
    let params = [];
    let executedFunctions = [];

    for (let i = 0; i < x; i++) {
        list[i] = function (n) {

            return new Promise((resolve) => {
                counter++;
                executedFunctions[i] = resolve;
                params[i] = n;

                if (counter === x) {
                    for(let j = 0; j < x; j++) {
                        executedFunctions[j](params[j]);
                    }
                }
            });
        };
    }

    return list;
};

let test1 = function () {
    let [f1, f2, f3] = promiseBarrier(3);

    Promise.resolve(0)
        .then(x => { console.log("c1 s1"); return x; })
        .then(x => { console.log("c1 s2"); return x; })
        .then(x => { console.log("c1 s3"); return x; })
        .then(f1)
        .then(x => { console.log("c1 s4"); return x; })
    Promise.resolve(0)
        .then(x => { console.log("c2 s1"); return x; })
        .then(f2)
        .then(x => { console.log("c2 s2"); return x; })
    Promise.resolve(0)
        .then(f3)
        .then(x => { console.log("c3 s1"); return x; })
        .then(x => { console.log("c3 s2"); return x; })
        .then(x => { console.log("c3 s3"); return x; })
};

let test2 = function () {
    let [f4, f5] = promiseBarrier(2);
    Promise.resolve(1).then(f4).then(console.log);
    Promise.resolve(2).then(f5).then(console.log);
};

test1();
//test2();