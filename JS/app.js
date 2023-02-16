// slice, splice, concat, reverse

const roles = ['user', 'admin', 'manager', 'superuser'];

// slice

const res = roles.slice(2);
console.log(roles); // slice не модифицировал исходный массив
console.log(res); // slice(2) взял элемент со второго до конца и выдал результат. отрезал кусок начиная со 2

const res2 = roles.slice(2, 3); // взял элемент с 2 по 3, НЕ ВКЛЮЧАЯ второй аргумент(3)
console.log(res2); // manager

const res3 = roles.slice(-1); // берет последний элемент массива
console.log(res3); // superuser

const res4 = roles.slice(1, -1); // от 1 до -1 (не включая второй аргумент)
console.log(res4); // admin, manager

// splice

// const res5 = roles.splice(2);
// console.log(res5); // manager, superuser
// console.log(roles); // splice модифицировал исходный массив!

// const res6 = roles.splice(2,2);
// console.log(res6); // manager, superuser
// console.log(roles);

// reverse

const res7 = roles.reverse(); // переворачивает массив и также модифицирует исходный массив
console.log(res7);

// concat

const newRoles = ['sysadmin', 'developer']
const res8 = roles.concat(newRoles);
console.log(res8);
