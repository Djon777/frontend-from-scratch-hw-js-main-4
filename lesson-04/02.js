/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.
function findUniqueElements() {}
const array = [1, 2, 3, 2, 1, 4];
const nambers = [];
for (let i = 0; i < array.length; i++) {
    
    if (!nambers.includes(array[i])) {
        nambers.push(array[i]);
        return nambers
    }
}
**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements() {}
const array = [1, 2, 3, 2, 1, 4];
const nambers = [];
for (let i = 0; i < array.length; i++) {
    
    if (!nambers.includes(array[i])) {
        nambers.push(array[i]);
        return nambers
    }
}