var o2 = (function () {
    this.count = 1;
    this.notify = null;

    this.setNotify = function (f) {
        notify = f
    };

    this.increment = function () {
        count++;

        if ((notify !== null) && (notify instanceof Function)) {
            notify(count);
        }
    }

    this.getCount = function () {
        return count;
    };

    return {
        inc: increment,
        count: getCount,
        setNotify: setNotify
    }
})();

o2.setNotify(function (a) { console.log(a) });

o2.inc();