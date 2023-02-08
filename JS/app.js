const fordFocusPrice = 100000;
const budjet = 20000;

let message;
if (budjet > fordFocusPrice) {
    message = 'Ford';
} else {
    message = 'Велосипед';
}

console.log(`Я хочу купить ${budjet > fordFocusPrice ? 'Ford' : 'Велосипед'}`);

// Суть такова, что есть короткая запись наших else / if называющаяся тернарный оператор
// Лучше не вкладывать один тернарный оператор в другой, т.к. читаются очень плохо

10 > 0 ? console.log('Больше 0') : console.log('Не больше'); //Эта запись равносильна записи ниже

if (10>0) {
    console.log('Больше 0');
} else {
    console.log('Не больше');
}