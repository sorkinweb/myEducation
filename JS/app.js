/*
Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. 
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/


// Мой вариант
const task = 40;
const sumHour = 45;
const salaryHour = 80;
let readyForWork = sumHour >= task;
let fee = salaryHour * task;

//Результат
console.log('Возьмусь ли я за эту работу? ' + readyForWork);
console.log('За эту работу я возьму: ' + fee);

// Вариант Антона
const payRateUSD = 80;
const projectHours = 40;
const availableDays = (11 - 2) * 5;

// Результат
console.log ('Смогу ли я работать? ' + (availableDays > projectHours));
console.log ('Стоимость работ: ' + projectHours * payRateUSD);

