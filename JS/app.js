// Знакомство с массивами

const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];
const userinfo = ['Аня', 25];
console.log(roles);
console.log(roles[0]); // admin
console.log(roles.length); // 3
console.log(roles[roles.length - 1]); // superuser

console.log(roles.at(0)); // admin
console.log(roles.at(-1)); // superuser

const usersAge = [2040 - 2022, 20 - '6', 10 > 0 ? 5 : 0]; 
console.log(usersAge); // 18, 14, 5

const userNames = new Array('Вася', 'Петя', 'Катя');
console.log(userNames); // 'Вася', 'Петя', 'Катя'

function square (el) {
    return el * el;
}
console.log(square(5));