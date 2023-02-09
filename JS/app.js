/*
    Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15". 
    Если ответ верен выведите в консоль "Успех", если нет - "Вы робот!", а если он введет
    "Я не робот", то тоже "Успех".
*/

// Мой вариант
const answer = prompt ('Сколько будет 7 + или - 15');
switch(true) { //через switch(true)!
    case answer === 'Я не робот':
    case Number(answer) === -8: //Главное типизировать данные. Тип(переменная) === нужный результат:
    case Number(answer) === 22:
        console.log('Успех'); 
        break;
    default:
        console.log ('Вы робот!')
}

// Вариант Антона
const res = prompt ('Сколько будет 7 + или - 15');
switch(true) {
    case res === 'Я не робот':
    case Number(res) === 22:
    case Number(res) === -8:
        console.log ('Успех');
        break;
    default:
        console.log ('Вы робот!');
}

const res1 = prompt ('Сколько будет 7 + или - 15');
if (res1 === 'Я не робот') {
    console.log('Успех');
} else {
    const res1Num = Number(res1);
    switch (res1Num) {
        case 22:
        case -8:
            console.log('Успех');
            break;
        default:
            console.log('Вы робот!');
    }
}