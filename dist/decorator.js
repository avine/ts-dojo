"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Foo = (function () {
    function Foo() {
        this.foo = 'Foo';
    }
    Foo.prototype.bar = function (x) {
        return x;
    };
    Foo.prototype.x = function () {
        console.log('x called');
    };
    Foo.prototype.y = function () {
        console.log('y called');
    };
    return Foo;
}());
__decorate([
    M1
], Foo.prototype, "bar", null);
__decorate([
    Max(3)
], Foo.prototype, "x", null);
__decorate([
    Max(2)
], Foo.prototype, "y", null);
Foo = __decorate([
    C1,
    C2('Param')
], Foo);
// Class decorator without factory
function C1(constructor) {
    //console.log('C1', constructor);
}
// Class decorator with factory
function C2(param) {
    return function (constructor) {
        //console.log('C2', param, constructor);
    };
}
// Method decorator without factory
function M1(prototype, property, descriptor) {
    //console.log('M1', prototype);
    //console.log(property);
    //console.log(prototype[property]);
    //console.log(descriptor);
    descriptor.writable = false;
}
// Method decorator with factory
// Call the original method a maximum time...
function Max(index) {
    return function (prototype, property, descriptor) {
        var count = 0;
        var originalValue = descriptor.value;
        descriptor.value = function () {
            if (count < index) {
                originalValue.apply(this, arguments);
                count++;
            }
            else {
                console.log('Finish after ', property, index);
            }
            ;
        };
        return descriptor;
    };
}
