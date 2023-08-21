//types of functions\



function regularfunc() {
  return 8;
}

const advancedfunc = function () {
  return 6;
};

const arrowfunc = () => {
  return 5;
};

const arrowfunc2 = (param) => {
  return 2 + 4;
};

() => {
  //basic structure of an arrow function you can pass this direcctly into a function parameter
  //but to use it on its own  to be able to be called use a name//
  const name = () => {};
};

//can also be written as
const arrowfunc3 = (param) => 2 + 3;
console.log(arrowfunc3());

console.log(regularfunc());
console.log(advancedfunc());
console.log(arrowfunc());


[`make dinner`, `wash dinners`, `catch bug`].forEach(function (value, index) {
  console.log(value);
  console.log(index);
});

let ourarray = [`make dinner`, `wash dinners`, `catch bug`];
ourarray.forEach((value, index) => {
  if (value === `make dinner`) {
    return;
  }
  console.log(value);
});
