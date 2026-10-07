// let money = 80000;
// let income = '20000';
// let addExpenses = 'Интернет, такси, комуналка';
// let deposit = false;
// let mission = 1000000;
// let period = 6;
// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);
// console.log(addExpenses.length);
// console.log('Период равен ' + period + ' месяцев');
// console.log('Цель заработать ' + mission + ' рублей');
// console.log(addExpenses.toLowerCase().split(', '));
// let budgetDay = money / 30;
// console.log('budgetDay: ', budgetDay);

//Урок "Все об условиях" 1 способ через if

// let lang = 'en';
// if (lang === 'ru') {
//   console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
// }
// else if (lang === 'en') {
//   console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
// }
// else {
//   console.log('Неизвестный язык');
// }

// 2 способ через switch-case

// let lang = 'en';
// switch (lang) {
//   case 'ru':
//     console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
//     break;
//   case 'en':
//     console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
//     break;
//   default:
//     console.log('Неизвестный язык');
// }

// 3 способ МНОГОМЕРНЫЙ МАССИВ

// let lang = 'en';

// const languages = ['ru', 'en'];

// const days = [
//   ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
//   ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// ];

// console.log(days[languages.indexOf(lang)].join(', '));

// Задача 2 через тернарный оператор

let namePerson = "Сергей";

let role = namePerson === "Артем"
  ? "директор"
  : namePerson === "Максим"
    ? "преподаватель"
    : "студент";

console.log(role);



