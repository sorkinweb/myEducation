/*
    Пользователь:
    -Возраст
    -Наличие работы
    -Деньги
    Нужно проверить может ли он купить новый Macbook за 2000$?
    Он может брать не только свои деньги, но и взять кредит.
    Ему дадут 500$, только если ему больше 24х-лет и он
    имеет работу, 100 если ему просто больше 24х-лет и 0 в ином случае.
    Напишите функцию, которая принимает данные пользователя и товара
    и возвращает true или false;
*/

 // Мой вариант

 function creditOpportunity(age1, employment = false) {
    if ((age1 >= 24) && employment) {
        return 500;
    } else if (age1 >= 24) {
        return 100;
    } else {
        return 0;
    }
 }

 function canBuy1 (productPrice, age1, money, employment = false) {
    const creditMoney = creditOpportunity(age1, employment);
    return productPrice <= money + creditMoney;
}

console.log(canBuy1(2000,24,1900, true));

// Код Антона

function computeCredit(age, hasJob = false) {
    switch(true) {
        case age >= 24 && hasJob:
            return 500;
        case age >= 24:
            return 100;
        default:
            return 0;
    }
}
function canBuy(productPrice, age, money, hasJob = false) {
    const creditMoney = computeCredit(age, hasJob);
    return productPrice <= money + creditMoney;
}

console.log(canBuy(2000,24,1700, true));