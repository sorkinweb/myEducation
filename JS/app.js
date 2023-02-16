// Управление элементами массива

const users = ['Аня', 'Вика', 'Катя'];
console.log(users);
users[2] = 'Кристина';
console.log(users);

const arrLenght = users.push('Никита');
console.log(users); // возвращает длину массива (так работает функция push).
console.log(arrLenght);  // добавляет элемент в конец массива


users.unshift('Вася');
console.log(users); // unshift добавляет элемент в начало массива

const el = users.pop();
console.log(el); // pop возвращает удаленный элемент
console.log(users); // pop удаляет последний элемент массива

const el2 =users.shift();
console.log(el2); // shift возвращает удаленный элемент
console.log(users); // shift удаляет нулевой элемент массива

