// Деструктуризация

const userData = ['Антон', 18, 'Москва'];

function getData() {
    return ['Антон', 18, 'Москва'];
}

// const userName = getData[0];
// const age = getData[1];
// const city = getData[2];

const [userName, age, city] = userData;

console.log(userName, age, city);

// Rest оператор

const data = [1, 2, 3, 4, 5, 6];
const [one, two, ...others] = data;
console.log(one, two, others);
