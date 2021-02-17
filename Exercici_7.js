console.printaki2 = (function () {
    let count = 0;
    return (function () {
        count++;
        console.log("aqui " + count);
    });
})();

console.printaki2();
console.printaki2();