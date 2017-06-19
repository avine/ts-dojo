"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Foo2 = (function () {
    function Foo2(x) {
        this.foo = x;
    }
    Foo2.prototype.aaa = function () {
    };
    Foo2.prototype._bbb = function () {
        console.log(this);
    };
    return Foo2;
}());
var f = new Foo2('ok');
var Goo = (function (_super) {
    __extends(Goo, _super);
    function Goo() {
        var _this = _super.call(this, 'x') || this;
        _this.great = 5;
        return _this;
    }
    Goo.prototype.blup = function () {
    };
    return Goo;
}(Foo2));
