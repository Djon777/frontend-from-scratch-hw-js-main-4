/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
let count = 0;
let i = count;
while (count < 20) {
    count = count + 1;
    i = count % 2;
    if (i === 1) {
      sum += count;
      console.log (count, i, sum);
    }
}