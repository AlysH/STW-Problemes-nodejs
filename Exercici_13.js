o2 = (function () {
    let count = 1;
    let notify = null;

    function setNotify (f) {
        notify = f
    };

    function increment () {
        count++;

        if ((notify !== null) && (notify instanceof Function)) {
            notify(count);
        }
    }

    return {
        inc: increment,
        setNotify: setNotify
    }
})();

o2.setNotify(function (a) { console.log(a) });

o2.inc();