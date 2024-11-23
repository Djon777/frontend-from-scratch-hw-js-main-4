/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/
function capitalizeWords(str) {
  let strRas = str.split(' ');
  let arr = [];
  for (let i = 0; i < strRas.length; i++) {
    let zagl = strRas[i];
    let prez = zagl.charAt(0).toUpperCase() + zagl.slice(1).toLowerCase();
    arr.push(prez);
    
  }
  return arr.join(' ');
}
console.log(capitalizeWords("helo djohn"));