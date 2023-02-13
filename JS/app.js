// Анонимные функции

function powerOfTwo (num) {
    return num * num;
}
console.log(powerOfTwo (5));


const poft = function (num) { // анонимная функция
    return num * num;
}

console.log(poft(6)); // функцию можно положить в константу / положить ее как аргумент другой функции и т.д.

// Стрелочные функции

function powerOfThree(num) {
    console.log(num);
    return num * num * num;
}

console.log(powerOfThree(5));

const pof3 = (num) => { // стрелочная функция
    console.log(num);
    return num * num * num;
};

console.log(pof3(6));