let p;

// a
p = Promise.resolve(0).then(x => x + 1).then(x => x + 2).then(x => x + 4);
p.then((x) => { console.log("a: " + x) });
// b
p = Promise.reject(0).then(x => x + 1).catch(x => x + 2).then(x => x + 4);
p.then((x) => { console.log("b: " + x) });
// c
p = Promise.resolve(0).then(x => x + 1).then(x => x + 2).catch(x => x + 4).then(x => x + 8);
p.then((x) => { console.log("c: " + x) });
// d
p = Promise.reject(0).then(x => x + 1).then(x => x + 2).catch(x => x + 4).then(x => x + 8);
p.then((x) => { console.log("d: " + x) });
// e
p = Promise.reject(0).then(x => x + 1, null).catch(x => x + 2).catch(x => x + 4);
p.then((x) => { console.log("e: " + x) });