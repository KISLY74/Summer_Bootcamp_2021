'use strict'

/*****************************************************************************************************
 *                                        МАССИВЫ                                                    *
 ****************************************************************************************************/

/*****************************************************************************************************
 *                                                                                                   *
 * Перед началом выполнения заданий рекомендуем ознакомиться с материалом:                           *
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array               *
 *                                                                                                   *
 * ПРИМЕЧАНИЕ: При выполнении заданий запрещается использовать циклические операторы for и while!    *
 *                                                                                                   *
 ****************************************************************************************************/

/**
 * Создайте массив нечётных чисел указанной длины.
 * 
 * @param {number} len
 * @return {array}
 * 
 * @example
 *    1 => [ 1 ] 
 *    2 => [ 1, 3 ] 
 *    5 => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
   const array = new Array(len).fill(1);
   array.forEach((_val, i, array) => array[i] = 2 * i + 1);
   return array;
}


/**
 * Преобразуйте исходный массив таким образом, чтобы в нём остались только положительные числа.
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => [] 
 */
function getArrayOfPositives(arr) {
   const posArray = arr.filter(elem => elem > 0);
   return posArray;
}

/**
 * Преобразуйте строки в изначальном массиве в сроки верхнего регистра.
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ] => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 */
function getUpperCaseStrings(arr) {
   return arr.map(elem => { return elem.toUpperCase(); });
}


/**
 * Преобразуйте массив строк в массив чисел, где каждое число будет означать длину заменяемой строки.
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
   return arr.map(elem => elem.length);
}

/**
 * Создайте новый массив из n первых элементов исходного массива.
 * 
 * @param {array} arr
 * @param {number} n 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 1, 3 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */
function getHead(arr, n) {
   return arr.slice(0, n);
}

/**
 * Удалите каждый второй элемент исходного массива и верните новый массив.
 * 
 * @param {array} arr
 * @return {array}
 * 
 * Example :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */
function getSecondItems(arr) {
   return arr.filter((item, index) => index % 2 === 1);
}

/** 
 * Создайте новый массив, который содержит 3 самых больших числа из исходного массива чисел.
 * 
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */
function get3TopItems(arr) {
   var array = [];
   if (arr.length <= 3) { return arr.reverse(); }
   if (arr.length > 3) {
      let max = Math.max.apply(null, arr);
      let index = arr.indexOf(max);
      array.push(arr[index]);
      arr.pop();

      max = Math.max.apply(null, arr);
      index = arr.indexOf(max);
      array.push(arr[index]);
      arr.pop();

      max = Math.max.apply(null, arr);
      index = arr.indexOf(max);
      array.push(arr[index]);
      arr.pop();
      return array;
   }
}

/**  
 * Сосчитайте количество положительных чисел в массиве.
 * 
 * @param {array} arr
 * @return {number}
 * 
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 */
function getPositivesCount(arr) {
   let count = 0;
   let mas = arr.map((elem) => { if (typeof (elem) == 'string') { arr.pop(elem); } });
   mas = arr.filter(elem => elem > 0);
   return mas.length;
}

module.exports = {
   generateOdds: generateOdds,
   getArrayOfPositives: getArrayOfPositives,
   getUpperCaseStrings: getUpperCaseStrings,
   getStringsLength: getStringsLength,
   getHead: getHead,
   getSecondItems: getSecondItems,
   get3TopItems: get3TopItems,
   getPositivesCount: getPositivesCount,
};