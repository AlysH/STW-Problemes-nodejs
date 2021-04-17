let f3 = function (llista) {
    let llista2 = llista.map((x) => x + 23);
    return llista2;
};

let llista2 = f3([1,2,3]);
console.log(llista2);