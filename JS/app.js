/*
    Задача вывести в консоль строчку "Я люблю JS !" из массива,
    проходя циклом в обратном порядке, не используя метод reverse.

*/

const arr = ['!', 'JS', 'люблю', 'Я'];
const resultArray = [];

for(let el = arr.length - 1; el >= 0; el --) {
    resultArray.push(arr[el]);
}
console.log(resultArray.join(' '));

// через reverse

console.log(arr.reverse().join(' '));