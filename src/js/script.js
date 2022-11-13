// функция в фуекцие
let result = '';
let lengh = 7;
for (let i = 1; i < lengh; i ++) {
    for (let j = 0; j < i ; j++ ) {
        result += '*';
    }
    result += '\n';
}
console.log(result);


let lines = 7;
let str = " ";
for (let i = 0; i < lines; i++) {
    str += '*';
    console.log(str);
}


// let i = 0,
//     j = 0;

// let max = 15;
// let line = "",
//     star = "";

// while (i < max) {
//     line = "";
//     star = "";
//     for (j = 0; j < max - i; j++) line += " ";
//   for (j = 0; j < 2 * i + 1; j++) star += "*";
//     console.log(line + star);
//     i++;
// }


const line = 5;
let stars = '';

for (let i = 0; i <= line; i++) {
    for (let j = 0; j < line -i ; j++) {
        stars += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        stars += "*";
    }
    stars += "\n";
}

console.log(stars);



function sayHello(name) {
    return `Привет, ${name}!`;
}
console.log(sayHello('Alex'));


function showMessage() {
    console.log('hello alls');
}
showMessage();

function hello () {
    let  hi= 'heelo i java script';
    console.log(hi);
}
hello();

let human = 'Vasja';
function showName () {
    let sayHey = 'Hey, ' + human;
    console.log(sayHey);
}
showName();

function glei(tex, name) {
    console.log(tex  + name);
}
glei('Hi ', 'julia');   
glei('hi ', 'alex');              



function checkAge(age) {
    if (age > 18) {
    return true;
    } else {
    return confirm('А родители разрешили?');
    }
    }
    
    let age = prompt('Сколько вам лет?', 18);
    if ( checkAge(age) ) {
    alert( 'Доступ получен' );
    } else {
    alert( 'Доступ закрыт' );
    }

    function min(a, b) {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    }
    console.log(min(3, 5));

    const obji = {
        name: 'Sasha',
        age: 33,
        live: 'Kiev',
        makeTest: function () {
            console.log('test');
        }
    };
    obji.makeTest();
    console.log(Object.keys(obji));


const man = {
    name: 'sasha',
    suname: 'ganja',
    live: {
        city: 'kyev',
        stret: 'Rudenko'
    }
};
const {city, stret} = man.live;
console.log(city);


function giveObject () {

}

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};
console.log(personalPlanPeter);


let optins = {
    name: 'Mark',
    width: 1980,
    hidth: 1020,
    colors: {
        border: 'black',
        bg: 'green'
    }
};
console.log(optins);

// console.log(optins['colors']['border']);

for( let key in optins) {
    if (typeof(optins[key]) === 'object') {
        for (let i in optins[key]) {
            console.log(`Свойства ${i} имеет значение ${optins[key] [i]} `);
        }
    }else { console.log(`Свойства ${key} имеет значение ${optins[key]} `);}
}


let a = 5;
let b = a;

b = b + 5;
console.log(b);
console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy (mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
};
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
console.log(newNumbers);
console.log(numbers);