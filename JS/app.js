// Упражнение. Расчет итогового баланса

/*
    Есть выгрузка операций пользователя
    const operations = [1000, -700, 300, -500, 10000];
    а так же начальный баланс в 100$
    Необходимо сделать функции расчета:
    - Итогового баланса
    - Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
    - Расчета среднего расхода и среднего дохода  
*/

const operations = [1000, -700, 300, -500, 10000];
const startingBalance = 100;

// Итоговый баланс
function getBalance(arrayofOperations, initialBalance) {
    let balance = initialBalance; 
    for (const element of arrayofOperations) {
        balance += element;
    }
        return balance;
}

console.log(getBalance(operations, startingBalance)); // 10200

// Наличие отрицательного баланса

function checkOperations(arrayofOperations, initialBalance) {
    let balance = initialBalance;
    let isOk = true;
    for (const element of arrayofOperations) {
        balance += element;
        if (balance < 0) {
            isOk = false;
            break;
        }
    }
    return isOk;
}

console.log(checkOperations(operations, startingBalance)); // true


// Расчет среднего дохода / расхода

function avarageOperations (arrayofOperations) {
    let positiveCount = 0;
    let positiveSum = 0;
    let negativeCount = 0;
    let negativeSum = 0;
    for (const element of arrayofOperations) {
        if (element > 0) {
            positiveCount ++;
            positiveSum += element;
        }
                if (element < 0) {
            negativeCount ++;
            negativeSum += element;
        }
    }
    return [positiveSum / positiveCount, negativeSum / negativeCount];
}

console.log(avarageOperations(operations));