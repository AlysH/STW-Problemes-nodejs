let f4 = function (a, b) {
    return (a + b);
};

let llistaA = [1,2,3,4];
let llistaB = llistaA.map((x) => f4(x,23));

console.log(llistaB);