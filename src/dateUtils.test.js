const {
    getDayOfWeek,
    getMinutesAgo,
    findYounger,
    strToDate
} = require('./dateUtils');

describe('Тестирование функций дат', () => {
    // тест дня недели
    test('getDayOfWeek возвращает правильный день недели', () => {
        expect(getDayOfWeek('08.07.1985')).toBe('Понедельник');
        expect(getDayOfWeek('12.06.1992')).toBe('Пятница');
        expect(getDayOfWeek('22.04.2015')).toBe('Среда');
        expect(getDayOfWeek('28.09.2016')).toBe('Среда');
        expect(getDayOfWeek('17.10.2021')).toBe('Воскресенье');
    });

    test('findYounger определение более молодого пользователя', () => {
        expect(findYounger('08.07.1985', '12.06.1992'))
            .toBe('Человек с датой рождения 12.06.1992 младше');

        expect(findYounger('08.07.1985', '08.07.1985'))
            .toBe('Люди одного возраста');
    });
    
    test('strToDate правильно преобразует строку в дату', () => {
        const date = strToDate("12.06.1991");
        expect(date instanceof Date).toBeTruthy();
        expect(date.getFullYear()).toBe(1991);
        expect(date.getMonth()).toBe(5); // June is 5 (zero-based)
        expect(date.getDate()).toBe(12);
    });

    // прошло минут с начала дня указанной даты 
    test('getMinutesAgo возвращает правильноое количество минут', () => {
        const mockDate = new Date('2025-05-03T14:18:00');
        global.Date = jest.fn(() => mockDate);

        expect(getMinutesAgo()).toBe(858); // 14 часов 18 мин = 858 мин
    });
});