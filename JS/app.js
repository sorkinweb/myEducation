// break и continue

const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

for(let i = 0; i < tasks.length; i ++) {
    if (tasks[i] === 'Задача 2') {
        continue; // цикл начинается заново и не выводит в консоль 'Задача 2'
    }
    console.log(tasks[i]);
}

console.log('------')

for(let i = 0; i < tasks.length; i ++) {
    if (tasks[i] === 'Задача 2') {
        break; // полностью прекращает цикл
    }
    console.log(tasks[i]);
}