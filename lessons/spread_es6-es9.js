"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // В переменную copy кладется ссылке уже на существующий объект

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;
// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // C помощью метода .slice создаем копию массива
                                    // Так как просто через '=' мы присваиваем значение
newArray[1] = 'asdadafda';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; // Оператор разворота развернула всю структуру списком 

console.log(internet);



function log(a, b, c,) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // За счет ... нам выдается конструкция списком




const array = ["a", "b"];

const newAarray = [...array]; // Из ... создали копию array. Вместо метода .slice 
                                // который мы использовали для копии массива

const q = {
    one: 1,
    two: 2
};

const newObj = {...q}; // Опять с помощью spread-оператора ... создали копию q


// Подробно о spread-операторе - https://learn.javascript.ru/rest-parameters-spread-operator