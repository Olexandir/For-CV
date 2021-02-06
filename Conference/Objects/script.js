const obj1 = {
  name: "Alex",
  age: 24,
  isdeveloper: false,
};

/* console.log(keys);
console.log(values); */

// Деструктуризация объектов

let { name, isdeveloper } = obj1;

name = "Yanka";
/* console.log(name); */

// Деструктуризация массивов
let arr1 = ["Здаров", 32, 96, false];

let [, age, , bitch] = arr1;

/* console.log(age); */

// Примерчик

let mann = "Иванов Иван Иванович";

function setName(fullName) {
  let [surname, name, secondname] = fullName.split(" ");
  let man = {
    name: `${name}`,
    surname: `${surname}`,
    secondname: `${secondname}`,
  };

  /*  console.log(man); */
}

/* setName(mann);
setName("Иванова Олеся Ивановна");
setName("Петрова Галина Петровна");
setName("Бичевва Ирина Николаевна");
setName("Лохова Марина Балвановна"); */

// Дескрипторы, динамическое определение свойства

const dog = {
  name: "Alex",
  age: 24,
  isdeveloper: false,
};

Object.defineProperty(dog, "width", {
  value: 400,
  enumerable: true,
  writable: true,
  configurable: true,
});

/* console.log(dog.hasOwnProperty("width")); */

// Геттеры и сеттеры
Object.defineProperty(dog, name, {
  get() {
    return `Господибоже`;
  },
});

/* console.log(dog.name); */

const man512 = Object.create(
  {},
  {
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear;
      },
      set(value) {},
    },
    name: {
      value: "Nick",
    },
    birthYear: {
      value: 1959,
    },
  }
);

/* console.log(man512); */

let home = {
  first: "fl",
  second: "at",
};

Object.defineProperty(home, "type", {
  get() {
    return `${this.first}${this.second}`;
  },
  set(value) {
    this.first = value;
  },
});
home.type = "bitch";
/* console.log(home.type); */

// Декораторы

/* let arr1 = [1, 2, null, '', 5, 10]; */

/* function jopa(...arr) {
  let res = Array.from(arr);
  let checkedRes = [];
  for (let i of res) {
    if (i) {
      checkedRes.push(i);
    }
  }
  return checkedRes;
} */

/* console.log(jopa(1, 2, false, 0, "", null, undefined, NaN, "жопа"));
 */