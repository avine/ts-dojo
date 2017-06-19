
@C1
@C2('Param')
class Foo {
  foo: string = 'Foo';

  constructor() {

  }

  @M1
  bar(x: any) {
    return x;
  }

  @Max(3)
  x() {
    console.log('x called');
  }

  @Max(2)
  y() {
    console.log('y called');
  }
}

// Class decorator without factory
function C1(constructor: any) {
  //console.log('C1', constructor);
}

// Class decorator with factory
function C2(param: string) {
  return function (constructor: any) {
    //console.log('C2', param, constructor);
  }
}

// Method decorator without factory
function M1(prototype: any, property: string, descriptor: PropertyDescriptor) {
  //console.log('M1', prototype);
  //console.log(property);
  //console.log(prototype[property]);
  //console.log(descriptor);
  descriptor.writable = false;
}

// Method decorator with factory
// Call the original method a maximum time...
function Max(index: number) {
  return function (prototype: any, property: string, descriptor: PropertyDescriptor) {
    var count = 0;
    var originalValue = descriptor.value;

    descriptor.value = function () {
      if (count < index) {
        originalValue.apply(this, arguments);
        count++;
      } else {
        console.log('Finish after ', property, index);
      };
    };

    return descriptor;
  }
}
