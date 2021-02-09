function createObject(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

createObject.prototype.showNaG = function () {
  return `Имя: ${this.name} Пол: ${this.gender}`;
};

let m = new createObject("Milk", 1, "male");
let w = new createObject("Water", 1000, "female");
let b = new createObject("Blood", 3, "neutral");

function sayHi() {
  console.log(`${this.name} says Hi!!!`);
}

sayHi.call(m);

let man = sayHi.bind(w);
let man2 = sayHi.apply(b);

man();

console.log(man);
console.log(man2);
