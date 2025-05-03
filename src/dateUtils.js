// задания https://cdn.otus.ru/media/private/9b/d7/Домашнее_задание__8-68729-9bd7eb.pdf?hash=388WAhoK8TbneEKm5AUEWA&expires=1746282051
// 1 задание 
function getDayOfWeek(dateStr) {
    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];    
    const [day, month, year] = dateStr.split('.').map(Number);
    const date = new Date(year, month - 1, day);
    return weekDays[date.getDay()];
}

// 2 задание 
function getMinutesAgo() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return (hours * 60) + minutes;
}

// 3 задание 
function strToDate(dateStr) {
    const [day, month, year] = dateStr.split('.').map(Number);
    const date = new Date(year, month - 1, day, 0, 0, 0, 0);
    return date;
}

function findYounger(date1, date2) {
    const d1 = strToDate(date1);
    const d2 = strToDate(date2);

    if (d1 < d2) {
        return `Человек с датой рождения ${date2} младше`;
    } else if (d1 > d2) {
        return `Человек с датой рождения ${date1} младше`;
    } else {
        return "Люди одного возраста";
    }
}


module.exports = {
    getDayOfWeek,
    getMinutesAgo,
    findYounger,
    strToDate
};