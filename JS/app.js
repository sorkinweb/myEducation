// Логические операторы

const isAdmin = true;
const canWrite = true;

console.log(`Системный файл ${isAdmin && canWrite}`);
console.log(`Обычный файл ${isAdmin || canWrite}`);
console.log(`Инвертируем права админа ${!isAdmin}`);


const isEdited = true;
const isSuperAdmin = true;

console.log(`Системный файл с редактированием ${isAdmin && canWrite && !isEdited}`);
console.log(`Системный файл с редактированием ${isAdmin && canWrite && (!isEdited || isSuperAdmin)}`);

let a = 7;
if (a === -8 || a === 22) {

}

// Операторы с другими типами

console.log ('Вася' || 'Олег');
console.log (false || 'Олег');
console.log ('Вася' || false);
console.log (false || false);

console.log ('Вася' && 'Олег');
console.log (false && 'Олег');
console.log ('Вася' && false);
console.log (false && false);

let abc = 'Марина';
const userName = abc || 'Петя';
console.log(userName);

const isFireman = true;
const fileName = isFireman && 'file.mp4';
console.log (fileName);


// Оператор нулевого слияния

const clientName = '';
console.log(clientName || 'Default Clientname');
console.log(clientName ?? 'Default Clientname');