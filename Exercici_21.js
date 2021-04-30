let composer = function (f1, f2) {
    return (function (a) {
        return f1(f2(a));
    });
};

let f1 = function (a) { return a + 1; };
let f3 = composer(f1, f1);

console.log(f3(3));

let f4 = function (a) { return a * 3; };
let f5 = composer(f3, f4);

console.log(f5(3));