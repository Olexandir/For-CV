const users = ["Владимир", "Михаил", "Вадим"];

let administrator = undefined;

const people = ["Саша", "Влад", "Юля", "Андрей", "Богдан"];

const people1 = ["Саша", "Влад", "Юля"];

const people2 = [
  "Саша",
  "Влад",
  "Юля",
  "Андрей",
  "Богдан",
  "Максим",
  "Василий",
];

const numberOfUsers = {
  id1: 5,
  id2: 3,
  id3: 7,
};

let person = {
  name: undefined,
  group: undefined,
  role: undefined,
  id: undefined,
};

async function setName(smb) {
  setTimeout(() => {
    smb.name = "Stephen";
    console.log(smb);
  }, 1000);
}

async function setCity(smb) {
  setTimeout(() => {
    smb.group = people1;
    console.log(smb);
  }, 2000);
}

async function setRole(smb) {
  setTimeout(() => {
    smb.role = "admin";
    console.log(smb);
  }, 3000);
}

async function setId(smb) {
  setTimeout(() => {
    smb.id = numberOfUsers.id2;
    console.log(smb);
  }, 4000);
}

async function check(smb) {
  setTimeout(() => {
    if (person.group.length !== person.id) {
      throw new Error("Группа не собралась / пересобралась");
    } else {
      console.log("Все собраны");
    }
  }, 6000);
}

/* setName(person);
setCity(person);
setRole(person);
setId(person); */

async function setPerson(smb) {
  await setName(smb);
  await setCity(smb);
  await setRole(smb);
  await setId(smb);
  await check(smb);
  return smb;
}

try {
  setPerson(person);
} catch (e) {
  console.error("Стивен умер");
}
