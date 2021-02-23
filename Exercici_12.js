let o = class  {
    constructor() {
        this.count = 0;
        this.notify = null;
    }

    inc() {
        this.count++;

        if ((this.notify !== null) && (this.notify instanceof Function)) {
            this.notify(this.count);
        }
    }
}

let o1 = new o();

o1.count = 1;

o1.notify = function (a) {
    console.log(a);
};

o1.inc();