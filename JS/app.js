// Упражнение. Упрощение функции

function toPower(num, power) {
    const res = num ** power;
    return res;
}

console.log(toPower (2, 3));

// Переписать в стрелочную функцию.
// Мой вариант

const toPowerArrow = (num, power) => {
    return num ** power;
}

console.log(toPowerArrow(2, 3));

// Вариант Антона

const toPowerArrow1 = (num, power) => num ** power;
console.log(toPowerArrow1(2, 3));