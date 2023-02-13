/*
    Упражнение (проверка прав)
    Пользователь хочет приобрести игру в магазине.
    Он может это сделать только если:
    -Его баланс больше 1000 (balance) 
    или его число бонусов больше 100 (bonuceBalance)
    -Он не забанен (isBanned)
    -Игра не куплена (isExist)
    -Игра в продаже (isSelling)
    Напишите условие для покупки и выведите в консоль результат
*/

// Мое решение

const balance = 1001;
const bonuceBalance = 101;
const isBanned = false;
const isExist = false;
const isSelling = true;
const canBuy = (balance > 1000 || bonuceBalance > 100) && (!isBanned && !isExist) && isSelling; 
console.log(`Могу ли я купить игру? ${canBuy ? 'Да' : 'Нет'}`); 

// Решение Антона (примерно тоже самое)