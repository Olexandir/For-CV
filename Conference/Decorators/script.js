let fac = function f(n) {
  return n !== 1 ? f(n - 1) * n : n;
}

function bitch(func) {
  return function () {
    let result = func.apply(this, arguments);
    console.log("ко-ко-ко", result);
    return result;
  };
}

fac = bitch(fac);

fac(6);