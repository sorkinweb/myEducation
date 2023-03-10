// Возврат фунции

// function power(pow) {
//     return function (num) {
//         return num ** pow;
//     }
// }

// Переписали в стрелочную функцию

const power = pow => num => num ** pow;


const powerOfTwo = power(2);
console.log(powerOfTwo(5));

const powerOfThree = power(3);
console.log(powerOfThree(5));

console.log(power(5)(4));
