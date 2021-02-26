function Counter() {
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

o3.notify = function (a) {
    console.log(a);
}

o3.inc();