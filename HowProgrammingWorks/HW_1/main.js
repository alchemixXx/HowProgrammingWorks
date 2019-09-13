'use strict';

/*
* Identifiers
*/

// eslint-disable-next-line prefer-const
let name = 'Pavel';
const BIRTHDAY = 1991;
const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};
sayHello('string_for_test');
sayHello(name);
sayHello(BIRTHDAY);


/*
* Loops
*/

for (let i = 15; i <= 30; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

const oddNumbers = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};
oddNumbers(5, 77);

/*
* Functions
*/

const average = (a, b) => (a + b) / 2;

const square = (x) => Math.pow(x, 2);

const cube = (x) => Math.pow(x, 3);

console.log('This is result of loop with cube and square');
for (let i = 0; i <= 10; i++) {
  console.log(average(square(i), cube(i)));
}


/*
* Objects
*/

const newConstObject = {
  name: 'name',
};

let newVarObject = {
  name: 'name',
}

newConstObject[name] = 'otherName';
newVarObject[name] = 'otherName';
// newConstObject = 'string';
newVarObject = 'string';

console.log('This function returns object');
const createUser = (name, city) => {
  return {
    name,
    city,
  };
};
console.log(createUser('Marcus Aurelius', 'Roma'));


/*
Массивы
Объявите массив объектов с двумя полями: name и phone для хранения телефонной книги. 
Пример: { name: 'Marcus Aurelius', phone: '+380445554433' }
Реализуйте функцию findPhoneByName с сигнатурой findPhoneByName(name: string): string. 
Вызов функция должна находить объект, где поле name равно аргументу name и возвращать номер телефона из объекта.


Коллекции: хеш-таблицы
Задайте хеш с ключами значениями поля name (из предыдущего примера) и значениями равными полю phone.
Реализуйте функцию findPhoneByName с сигнатурой findPhoneByName(name: string): string которая находит телефон в хеше по имени и возвращает номер телефона. 
Используйте hash[key] для поиска телефона.

*/

/*
* Arrays
*/

const phoneArray = [
  {
    name: 'Marcus Aurelius',
    phone: '+380445554433',
  },
  {
    name: 'Marcus',
    phone: '+3804425664433',
  },
];

console.log('This function returns phone number');

const findPhoneByName = (name) => {
  for (const pair of phoneArray) {
    if (pair['name'] === name) {
      return pair['phone'];
    }
  }
};

console.log(findPhoneByName('Marcus'));
