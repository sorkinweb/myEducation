// Параметры по умолчанию

function toPower(num, power = 2) {
    const res = num ** power;
    return res;
}

console.log(toPower(2, 3));
console.log(toPower(2));

// Условия в функциях

function canAccesWebsite(age) {
    if (age < 18) {
        return 'Нет';
    }
        return 'Да';
}

console.log(canAccesWebsite(16));

const canAccesWebsite2 = age => age < 18 ? 'Нет' : 'Да';
console.log(canAccesWebsite2(16));

// Функции в функциях

const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
    return present * KG_IN_USD;
}

function calculateKm( distance) {
    return  distance * KM_IN_USD;
}

function getExchangePrice(present1, present2, distance) {
    const price1 = calculateW(present1);
    const price2 = calculateW(present2);
    const distancePrice = calculateKm(distance)
    return price1 + price2 + distancePrice;
}

console.log(getExchangePrice(1,2,10));