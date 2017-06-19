
class Foo2 {
    private foo: string;

    constructor(x: string) {
        this.foo = x;
    }

    aaa() {
        
    }

    private _bbb() {
        console.log(this);
    }
}


var f = new Foo2('ok');

class Goo extends Foo2 {
    great: number;

    constructor() {
        super('x');
        this.great = 5;
    }

    blup() {

    }
}
