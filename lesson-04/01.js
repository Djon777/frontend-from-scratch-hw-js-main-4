/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/
//let index = 0; index < i.length; index++
//caunt++
function includesElement(array, element) {
for (let i = 0; i < array.length; i++) {
    //const element = array[i];
    

    if  ( array[i] === element) {
        return true
    }
    }
    return false
    }
//i.includes(b)
//function includesElement([a, b, c], b) {
//    const bool = [a, b, c]
//    console.log(bool.includes(b));

//}
