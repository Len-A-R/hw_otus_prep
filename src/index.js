// задания https://cdn.otus.ru/media/private/9b/d7/Домашнее_задание__8-68729-9bd7eb.pdf?hash=388WAhoK8TbneEKm5AUEWA&expires=1746282051
console.clear();
// 1 задание 
const userInput = prompt('Введите дату в формате ДД.ММ.ГГГГ:');


const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
function getDayOfWeek(dateStr) {
    const [day, month, year] = dateStr.split('.').map(Number);
    const date = new Date(year, month - 1, day);
    return weekDays[date.getDay()];
}

const dayOfWeek = getDayOfWeek(userInput);
console.log(`День недели: ${dayOfWeek}`);08


// 2 задание 
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const totalMinutes = (hours * 60) + minutes;
console.log(`С начала дня прошло ${totalMinutes} минут`);


// 3 задание 
const birthDate1 = "12.06.1991";
const birthDate2 = "08.07.1985";

function strToDate(dateStr) {
    const [day, month, year] = dateStr.split('.').map(Number);
    return new Date(year, month - 1, day);
}

function findYounger(date1, date2) {
    const d1 = strToDate(date1);
    const d2 = strToDate(date2);
    
    if (d1 > d2) {
        console.log("Человек с датой рождения " + date1 + " младше");
    } else if (d1 < d2) {
        console.log("Человек с датой рождения " + date2 + " младше");
    } else {
        console.log("Люди одного возраста");
    }
}

findYounger(birthDate1, birthDate2);