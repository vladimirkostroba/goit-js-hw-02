let input;
const numbers = [];
let total = 0;

do {
  let input = prompt('Введите Ваше число');

  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  } else if (input === null) {
    alert('Отменено пользователем!');
    break;
  }

  numbers.push(Number(input));
} while (true);

if (numbers.length !== 0) {
  for (const number of numbers) {
    total += number;
  }
}

console.log(`Общая сумма чисел равна ${total}`);
