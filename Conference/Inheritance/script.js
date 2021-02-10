// Прототипное насследование

const Human = function (options) {
  this.name = options.name;
  this.age = options.age;
  this.city = options.city;
};

Human.prototype.canFart = function () {
  console.log(this.name + " can fart!!!");
};

Human.prototype.canLaugh = function () {
  console.log(this.name + " can laugh!!!");
};

Human.prototype.canCum = function () {
  console.log(this.name + " can cum!!!");
};

const Mike = new Human({ name: "Mike", age: 25, city: "Homel" });
console.log(Mike);

Mike.canLaugh();
Mike.canFart();
Mike.canCum();

const Superhuman = function (ability) {
  Human.apply(this, arguments); // Перенос полей через this & arguments & .apply
  this.superAb = ability.superAb;
  this.cankill = ability.cankill;
};

Superhuman.prototype = Object.create(Human.prototype);

const Liza = new Superhuman({
  name: "Liza",
  age: 107,
  city: "Detroit",
  superAb: "Shit Cast",
  cankill: true,
});
console.log(Liza);

// Классовое наседование

class Animal {
  constructor(options) {
    this.kind = options.kind;
    this.age = options.age;
    this.hasPaws = options.hasPaws;
  }
  canSwim() {
    console.log(this.kind + " can swim");
  }
  hasItPaws() {
    console.log(this.hasPaws);
  }
}

const dog = new Animal({ kind: "Dog", age: 365, hasPaws: true });
console.log(dog);

dog.canSwim();

class Bird extends Animal {
  constructor(options) {
    super(options);
  }
  canSwim() {
    /*    super.canSwim(); */
    console.log(this.kind + " can't swim");
  }
}

const bird = new Bird({
  kind: "bird",
  age: 0.5,
  hasPaws: false,
});

console.log(bird);

bird.canSwim();
