function Counter (){
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

function DecreasingCounter () {
    this.inc = function () {
        this.a--;

        if (this.notify !== null) {
            this.notify(this.a);
        }
    };
}
DecreasingCounter.prototype = new Counter();

let o4 = new DecreasingCounter();

o4.notify = console.log;

o4.inc();