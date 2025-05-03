const {
    getDayOfWeek,
    getMinutesAgo,
    findYounger
} = require('./dateUtils');


// задания https://cdn.otus.ru/media/private/9b/d7/Домашнее_задание__8-68729-9bd7eb.pdf?hash=388WAhoK8TbneEKm5AUEWA&expires=1746282051
// 1 задание 
const userInput = prompt('Введите дату в формате ДД.ММ.ГГГГ:');
const dayOfWeek = getDayOfWeek(userInput);
console.log(`День недели: ${dayOfWeek}`);


// 2 задание 
console.log(`С начала дня прошло ${getMinutesAgo()} минут`);


// 3 задание 
const birthDate1 = "12.06.1992";
const birthDate2 = "08.07.1985";
console.log(findYounger(birthDate1, birthDate2));