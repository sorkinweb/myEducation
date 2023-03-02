// Циклы for of и for in

const arr = [1, 4, 8, 7];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let element of arr) { // чтобы перебрать целиком весь массив и сделать какую операцию с ним (итерируется по значениям)
    console.log(element);
}

for (let index in arr) { // итерируется по индексам массива
    console.log(index);
}