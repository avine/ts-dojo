
class ManageList<T extends Validable> {
    list: Array<T>;

    constructor(list: T[]) {
        this.list = list;
    }

    view() {
        this.list.forEach(function (item: T) {
            if (item.isValid()) {
                console.log(item);
            }
        });
    }
}

interface Validable {
    isValid(): boolean;
}

class Num implements Validable {
    data: number;
    constructor(data: number) {
        this.data = data;
    }

    isValid(): boolean {
        return typeof this.data === 'number';
    }
}

class Str implements Validable {
    data: string;
    constructor(data: string) {
        this.data = data;
    }

    isValid(): boolean {
        return typeof this.data === 'string';
    }
}

var n = new ManageList([new Num(1), new Num(2)]);
n.view();

var s = new ManageList([new Str('a'), new Str('b')]);
s.view();
