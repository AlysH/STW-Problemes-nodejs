let f2 = function (a) {
    return (a >= 0) ? (2 * a) : -1;
};

let f5 = function (a, b, c) {
  c(b(a));
};

f5(1, f2, console.log);