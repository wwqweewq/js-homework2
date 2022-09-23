// let number = +prompt("Введіть число :");
// if (number % 5 == 0 || number % 15 == 0) {
//     alert("Ваше число " + number + " гарне, ви умнічка!");
// }
let number = +prompt("Введіть число : ");
let number2 = +prompt("Введіть число 2 : ");
let number3 = +prompt("Введіть число 3 : ");
console.log("Введені числа : " + number + number2 + number3);
let sum = 0
if(number < 0){
    sum += number;//sum = sum + number
}
if(number2 < 0){
    sum += number2;
}
if(number3 < 0){
    sum += number3;
}
console.log("Сума введених чисел :" + sum);
