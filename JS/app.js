// Поиск элемента

const roles = ['user', 'admin', 'manager'];

const elIndex = roles.indexOf('admin');
console.log(elIndex);

const elIndex2 = roles.indexOf('superuser'); // несуществующий элемент показывается как -1
console.log(elIndex2);

if (roles.indexOf('admin') >= 0) {  // любой элемент (если он есть) будет положительным или 0
    console.log('Доступ есть');
}

console.log(roles.includes('admin')); // includes возвращается булевое значение 
console.log(roles.includes('superuser'));

if (roles.includes('admin')) {
    console.log('Доступ есть');
}