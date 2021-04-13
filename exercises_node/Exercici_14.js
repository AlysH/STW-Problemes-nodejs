function Counter () {
    this.a = 1;
    this.inc = function () {
        this.a++;

        if (this.notify !== null) {
            this.notify(this.a);
        }
    };
    this.count = function () { return this.a };
    this.notify = null;
}

let o3 = new Counter();

o3.notify = console.log;

o3.inc();