"use strict";
var ManageList = (function () {
    function ManageList(list) {
        this.list = list;
    }
    ManageList.prototype.view = function () {
        this.list.forEach(function (item) {
            if (item.isValid()) {
                console.log(item);
            }
        });
    };
    return ManageList;
}());
var Num = (function () {
    function Num(data) {
        this.data = data;
    }
    Num.prototype.isValid = function () {
        return typeof this.data === 'number';
    };
    return Num;
}());
var Str = (function () {
    function Str(data) {
        this.data = data;
    }
    Str.prototype.isValid = function () {
        return typeof this.data === 'string';
    };
    return Str;
}());
var n = new ManageList([new Num(1), new Num(2)]);
n.view();
var s = new ManageList([new Str('a'), new Str('b')]);
s.view();
