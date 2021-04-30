let p;

/**
 * Apartat 'a'
 *
 * La promessa 'p' es resol amb x = 0;
 * Al primer 'then', tenim que 'x' ens arriba a 0 i fem:
 * x = x + 1 = 1
 * Al segon 'then' fem:
 * x = x + 2 = 3
 * Al tercer 'then' fem:
 * x = x + 4 = 7
 * Es finalitza l'execusió i es printa el valor de 'x' (x = 7);
 */
p = Promise.resolve(0).then(x => x + 1).then(x => x + 2).then(x => x + 4);
p.then((x) => { console.log("a: " + x) });
/**
 * Apartat 'b'
 *
 * La promesa 'p' es rebutja amb x = 0;
 * Al primer 'then' tenim que, com s'ha rebutjat la promesa, ens el saltem
 * i anem al 'catch'.
 * Al 'catch' tenim que ens arriba 'x' amb valor 0 i fem:
 * x = x + 2 = 2
 * Al segon 'then' entrem perque ja hem fet un 'catch' i aquest 'then' s'ha
 * d'executar a continuació. Fem:
 * x = x + 4 = 6
 * Es finalitza l'execusió i es printa el valor de 'x' (x = 6);
 */
p = Promise.reject(0).then(x => x + 1).catch(x => x + 2).then(x => x + 4);
p.then((x) => { console.log("b: " + x) });
/**
 * Apartat 'c'
 *
 * La promessa 'p' es resol amb x = 0;
 * Al primer 'then', tenim que 'x' ens arriba a 0 i fem:
 * x = x + 1 = 1
 * Al segon 'then' fem:
 * x = x + 2 = 3
 * El 'catch' no s'execute perque no ha hagut 'reject'.
 * Al tercer 'then', tenim que 'x' ens arriba a 3 i fem:
 * x = x + 8 = 11
 * Es finalitza l'execusió i es printa el valor de 'x' (x = 11);
 */
p = Promise.resolve(0).then(x => x + 1).then(x => x + 2).catch(x => x + 4).then(x => x + 8);
p.then((x) => { console.log("c: " + x) });
/**
 * La promesa 'p' es rebutja amb x = 0;
 * Ni el primer 'then' ni el segon s'executen;
 * Al 'catch' tenim que x = 0 i fem:
 * x = x + 4;
 * Al tercer 'then' tenim que 'x' ens arriba a 4 i fem:
 * x = x + 8 = 12;
 * Es finalitza l'execusió i es printa el valor de 'x' (x = 12);
 */
p = Promise.reject(0).then(x => x + 1).then(x => x + 2).catch(x => x + 4).then(x => x + 8);
p.then((x) => { console.log("d: " + x) });
/**
 * La promesa 'p' es rebutja amb x = 0;
 * Al primer 'then' fem una operació 'null' per promessa rebutjada, eś a dir, no fem res;
 * En aquest moment tenim que x = null;
 * Al primer 'catch' fem:
 * x = x + 2 = null + 2 = 2;
 * El segon 'catch' ens el saltem;
 * Es finalitza l'execusió i es printa el valor de 'x' (x = 2);
 */
p = Promise.reject(0).then(x => x + 1, null).catch(x => x + 2).catch(x => x + 4);
p.then((x) => { console.log("e: " + x) });