/*
    Вася положил 12000$ на вклад 7% годовых с капитализацией 1 раз в месяц.

    Вывести в консоль, сможет ли он купить дом за 13500$ через 2 года после снятия вклада.
    И остаток после покупки.
    Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах

*/

// Мой вариант
const deposit = 12000;
const investment = deposit * (1 + 0.07/12) ** 24
const housePrice = 13500;
console.log(investment);

if (investment > housePrice) {
    console.log ('Я покупаю этот дом');
} else {
    console.log ('К сожалению, не в этот раз')
}

const balance = investment - housePrice;
console.log(balance);


// Вариант Антона
const deposit2 = 12000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;

const res = deposit2 * (1 + rate / 12) ** 24;
if (res > houseCost) {
    console.log(`Мы накопили: ${res}. Можем купить. Остаток ${res - houseCost}`);
} else {
    console.log (`Мы накопили: ${res}. Купить не сможем`);
}