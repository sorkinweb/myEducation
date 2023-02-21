// Принцип DRY. Don`t Repeat Yourself
// Если мы повторяем какую-то часть кода, то это повод задуматься о том, что, возможно, эту часть кода нужно вынести в отдельную функцию.


const tasks = ['Задача 1'];

function addTask (task) {
    tasks.push(task);
}

function deleteTask (task) {
    const index = tasks.indexOf(task);
    if (index === -1) {
        return;
    }
    return tasks.splice(index,1);
}

function transferTask (task) {
    const result = deleteTask(task);
    if (!result) { 
        return;
    }   
        tasks.unshift(result[0]);
}

addTask('Задача 2');
addTask('Задача 3');
console.log(tasks);

deleteTask('Задача 2');
console.log(tasks);

transferTask('Задача 3');
console.log(tasks);