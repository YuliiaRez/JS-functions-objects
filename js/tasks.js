/*Таски на условия
1) Делится ли число на 5 или на 3, или на 2 без остатка*/
let inputNumber = Number(prompt('Введите число, кратно ли он или 5, или3, или2!'));
const Multip = (inputNumber % 5 + inputNumber % 3 + inputNumber % 2);
if (!Multip) {
    alert('Делится без остатка!');
}
else {
    let message5;
    let message3;
    let message2;
    if (inputNumber % 5 != 0) {
        message5 = " Не делится на 5. ";
    } else {
        message5 = "Делится на 5. ";
    };
    if (inputNumber % 3 != 0) {
        message3 = " Не делится на 3. ";
    } else {
        message3 = "Делится на 3. ";
    };
    if (inputNumber % 2 != 0) {
        message2 = " Не делится на 2. ";
    } else {
        message2 = "Делится на 2. ";
    };
    alert(message5 + message3 + message2);
};


/*Таски на циклы (Only FOR)

1) Вывести факториал запрошенного числа. (5!=1*2*3*4*5)*/
const anyNumber = +prompt('Введите число для вычисления факториала: ');
let n = 1;
for (i = 1; i <= +(anyNumber); i++) {
    n = n * i;
};
alert(`Факториал ${anyNumber} равен: ${n}`);

/*2) *вычислить сумму первых N элементов последовательности 1 + 1/2 + 1/3 + ...+ 1/N . параметр
 N задает пользователь*/
/*3) Найти произведение целых чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это
    произведение всех чисел от 5 до 12).*/
const lim1 = 5;//=prompt (lim1)
const lim2 = 12;//=prompt (lim2)*/
let x = 1;
for (i = lim1; i <= lim2; i++) {
    x = x * i;
};
alert(`Произведение всех натуральных чисел от ${lim1} до ${lim2} равно ${x}`);

/*Таски на функции
0) Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
Ожидаемый вывод:
isAdult(20); // true
isAdult(4); // false*/
const age = +prompt("Введите возраст.(Вы совершенолетний?)");
function isAdult(age) {
    return (age >= 18);
}
alert(isAdult(age));

/*1) *Функция, которая запрашивает число и проверяет простое ли оно (простое число делиться без остатка на
    себя и на единицу)*/
const num = +prompt('Введите любое число, для оределения простое ли оно:')
function isPrime(num) {
    if (num <= 1) return false;
    if (num % 2 === 0 && num > 2) return false;
    for (let i = 3; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
alert(isPrime(num));
/*2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе:*/
const num1 = +prompt("Введите делимое:");
const num2 = +prompt("Введите делитель:");
function checkMultiplicity(num1, num2) {
    let y = num1 % num2;
    if (y === 0) {
        return true;
    } else {
        return false;
    }
};
alert(checkMultiplicity(num1, num2));

/*checkMultiplicity(25, 5) // true
checkMultiplicity(15, 3) // true
checkMultiplicity(15, 5) // true
checkMultiplicity(15, 4) // false*/

/*3) Проверка возможности треугольника. Создать функцию которая принимает длины треугольника;
 функция возвращает true если треугольник возможен и false если нет*/
const a = +prompt("Задайте сторону а");
const b = +prompt("Задайте сторону b");
const c = +prompt("Задайте сторону c");
function isTrianglePresents(a, b, c) {
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        return true;
    } else {
        return false;
    }
};
alert(isTrianglePresents(a, b, c));
/*4) Написать функции расчета площадей (поверхности) следующих фигур/тел:
 треугольника, прямоугольника (конуса, параллелепипеда)
(2 функции на выбор реализовать в формате функционального выражения)*/
let calcAreaTriangle = function () {
    let p = (a + b + c) / 2;
    let ABC = p * (p - a) * (p - b) * (p - c);
    ABC = Math.sqrt(ABC, 2);
    return ABC;
};
console.log(calcAreaTriangle());
let calcAreaRectangle = function () {
    return a * b;
};
console.log(calcAreaRectangle());

/*Таски на объекты
1. создать объект Student который содержит следующие свойства:
 имя, фамилию, пол, контактные данные, методы: вывод адреса, смена пола.*/
let student = {
    name: "John",
    surname: "Smith",
    gender: 'male',
    phone: 536421,
    adress: "HomeSweetHome",
    showAdress() {
        alert(this.adress);
    },
    changeGender() {
        this.gender = prompt('Change gender', 'male');
    },
};
student.showAdress();
student.changeGender();

/*2. создать объект, который содержит свойства, о факультете и кафедре, 
методы: перевод на другой факультет. (можно на свой выбор)*/
let hogwarts = {
    faculty: "faculty",
    chair: "White Magic",
    sortingHat() {
        if (Math.floor(Math.random() * 2)) {
            return "Gryffindor";
        }
        else {
            return "Ravenclaw";
        }
    },

};
hogwarts.faculty = hogwarts.sortingHat;
console.log(hogwarts.faculty());


/*3 Создать функции-конструкторы:
- Книга (автор, название, год издания, издательство)*/
function Book(name, author, year, publicity) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.publicity = publicity;
}
const book2 = new Book("1984", "Orwell", 1949, 'Secker & Warburg');
console.log("book2 :>> ", book2);
const book3 = new Book("Animal Farm: A Fairy Story", "Orwell", 1945, 'Secker & Warburg');
console.log("book3 :>> ", book3);


/*- Электронная версия книги(автор, название, год издания, издательство, формат, электронный номер) */
function Elbook(name, author, year, publicity, format, enumber) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.publicity = publicity;
    this.format = format;
    this.enumber = enumber;
};
const Elbook3 = new Elbook("Another Day", "Orwell", 1948, 'Secker & Warburg', "pdf", 135);
console.log("Elbook3 :>> ", Elbook3);





