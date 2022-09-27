// Javascript Assignment

// 1)
const role = 'student',
    isProgrammer = true,
    var1 = null,
    var2 = undefined;

console.log(`
            ${role} : ${typeof role},
            ${isProgrammer} : ${typeof isProgrammer},
            ${var1} : ${typeof var1}
            ${var2} : ${typeof var2}
            `);

// 2)
const firstName = 'Miles',
    lastName = 'Jarvis',
    maritalStatus = false,
    country = 'South Africa',
    age = 21;

console.log(`
            firstName : ${firstName},
            lastName : ${lastName},
            maritalStatus : ${maritalStatus}
            country : ${country}
            age : ${age}
            `);

// 3)
const fullName = 'miles jarvis brown';
const fullNameUpper = fullName.toUpperCase();
console.log(fullNameUpper);

// 4)
const hasWord = fullName.includes(' ');
console.log(hasWord);

// 5)
const myNameArray = fullName.split(' ');
console.log(myNameArray);

// 6)
const companies =
    'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', ');
console.log(companies);

// 7)
const anyString = 'hello world hello';
console.log(
    `last occurrence of "hello" is at index: ${anyString.lastIndexOf('hello')}`
);

// 8)
const sentence =
    'You cannot end a sentence with because because because is a conjunction';
console.log(
    `first occurrence of "because" is at index: ${sentence.search('because')}`
);
console.log(
    `first occurrence of "because" is at index: ${sentence.indexOf('because')}`
);

// 9)
const str = '   remove the whitespace at the beginning and end     ';
const cleanstr = str.trim();
console.log(cleanstr);

// 10)
// A) Truthy
6 > 1;
'  hello '.includes(' ');
8 % 2 === 0 ? true : false;
// B) Falsy
3 > 1 && 1 > 5;
null > null;
({} === {});

// 11)
4 > 3; // true
4 >= 3; // true
4 < 3; // false
4 <= 3; // false
4 == 4; // true
4 === 4; // true
4 != 4; // false
4 !== 4; // false
4 != '4'; // false
4 == '4'; // true
4 === '4'; // false

if ('python'.length > 'jargon'.length) console.log('python');

// 12)
const [date, month, year] = new Date().toLocaleDateString('en-IN').split('/');
const day = new Date().getDay();

const [hour, minute, second] = new Date()
    .toLocaleTimeString('en-IN')
    .split(/:| /);

const seconds = Math.floor(Date.now() / 1000); //number of seconds passed since January 1, 1970

// 13)
const base = +prompt('input triangle base: ');
const height = +prompt('input triangle height: ');
const area1 = 0.5 * base * height;

// 14)
const x1 = 2,
    y1 = 2,
    x2 = 6,
    y2 = 10;

const m = (y2 - y1) / (x2 - x1);

// 15)
// y = 2x -2
let x,
    y,
    m1 = 2;
// for y intercept, x=0 ==> y = -2
y = -2;
// for x intercept, y=0
x = 2 / m1;

// 16)
const r = +prompt('input radius: ');
const pi = 3.14;
const area2 = pi * r ** 2;

// 17)
console.log(`${year}-${month}-${day} ${hour}:${minute}`);
console.log(`${day}-${month}-${year} ${hour}:${minute}`);
console.log(`${day}/${month}/${year} ${hour}:${minute}`);

// 18)
const age1 = +prompt('Enter your age: ');
age1 >= 18
    ? console.log('You are old enough to drive')
    : console.log('Need to turn 18 first');

// 19)
// even numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) console.log(i);
}

// 20)
const score = +prompt('Enter your score: ');
let grade;
if (score >= 80) {
    grade = 'A';
} else if (score >= 70) {
    grade = 'B';
} else if (score >= 60) {
    grade = 'C';
} else if (score >= 50) {
    grade = 'D';
} else if (score >= 40) {
    grade = 'E';
} else if (score >= 0) {
    grade = 'F';
} else {
    console.log('Invalid score: ' + score);
}

// 21)

// 28)
for (let i = 0; i < 101; i++) {
    if (i % 2 !== 0) console.log(i);
}

// 29)
let sumEven = (sumOdd = 0);
for (let i = 0; i < 101; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}
console.log(`sum of even: ${sumEven}, sum of odd: ${sumOdd}`);
