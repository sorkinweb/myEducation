
/*
    Упражнение. Обновление списка задач
    Дан список задач
    const tasks = ['Задача 1'];
    Сделать функции:
    - Добавление задачи в конец
    - Удаление задачи по названию
    - Перенос задачи в начало списка по названию
    Всегда меняем исходный массив
*/
const tasks = ['Задача 1'];

function addTask (task) {
    tasks.push(task);
}

function deleteTask (task) {
    const index = tasks.indexOf(task)
    if (index === -1) {
        return;
    }
    tasks.splice(index,1);
}

function transferTask (task) {
    const index = tasks.indexOf(task)
     if (index === -1) {
        return;
    }
    tasks.splice(index,1);
    tasks.unshift(task);
}

addTask('Задача 2');
addTask('Задача 3');
console.log(tasks);

deleteTask('Задача 4');
console.log(tasks);

transferTask('Задача 4');
console.log(tasks);