"use strict";
const str = 'str';
console.log(str);
// Data types
let userId = 'Patrick'; // String
let number = NaN; // Number infinity, 1, -1, 3e10
let boolean = false; // Boolean true or false
const isBirthdayData = true;
const ageData = 36;
const userNameData = 'John';
// TYPE Any
// Parse = any
const userDataJson = '{"isBirthdayData: boolean":"true", "ageData: number":"36", "userNameData: string":"John" }';
const userObj = JSON.parse(userDataJson);
// let num;
// Empty = any
let salary;
salary = 5_000;
//! Task
// ---------------------------------------------------------------//
const currRate = '1.05';
const fetchCurr = (response) => {
    const data = JSON.parse(response);
    return data;
};
function transferEurToUsd(available, amount, commission) {
    if (available) {
        let res = fetchCurr(currRate) * amount * commission;
        console.log(res);
    }
    else {
        console.log('Сейчас обмен недоступен');
    }
}
transferEurToUsd(true, 500, 1.05);
// ----------------------------------------------------------------//
//! Task
// TYPE Never
const createError = (msg) => {
    throw new Error(msg);
};
function logBrtMsg(isBirthday, userName, age) {
    if (isBirthday) {
        return `Congrats ${userName.toUpperCase()}, ${age + 1}`;
    }
    else {
        return createError('Error');
    }
}
logBrtMsg(isBirthdayData, userNameData, ageData);
// TYPE null
const test = null;
const test2 = null;
// const test11: string = null; // Error
// const test22: number = null; // Error
// TYPE undefined
const test3 = undefined;
const test4 = undefined;
// const test33: string = undefined; // Error
// const test44: any = undefined;// Error
// TYPE Symbol
const id1 = Symbol('symbol1');
const id2 = Symbol('symbol1');
const data = {
    [id1]: 1,
    [id2]: 2,
};
console.log(data[id2]);
// TYPE BigInt
const num1 = 1n;
const num2 = 2n;
console.log(num1 + num2);
// TYPE Object
//? Not typing  in Object
const userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: 'Jack',
    messagesData: {
        error: 'error',
    },
};
// Typing object as function arguments
//? Destructuring object
function logBrhMsg({ isBirthdayData, ageData, userNameData, messagesData: { error }, }) {
    if (isBirthdayData) {
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData}`;
    }
    else if (!isBirthdayData) {
        return `Too bad`;
    }
    else {
        return error;
    }
}
logBrhMsg(userData);
// Typing array
//? string[] читается как массив содержащий стоки (состоящий из таких типов данных, могут быть другие типы данных)
const num4 = [1, 2, 3, 4];
const departments = ['dev', 'design', 'marketing'];
const department = departments[0];
// departments.push();
const report = departments
    .filter((d) => d !== 'dev')
    .map((d) => `${d} - done!`);
//! ТАК ДЕЛАТЬ НЕ НУЖНО (но можно)
const anyData = [1, 'string', false];
//? number[][] читается как массив массивов (матрица)
const num3 = [
    [1, 2, 3],
    [1, 2, 3],
];
// Destructuring Array
const [dev] = report;
console.log(dev);
//! Task
// ----------------------------------------------------------------//
const electricityUserData = {
    readings: 95,
    units: 'kWt',
    mode: 'double',
};
const waterUserData = {
    readings: 3,
    units: 'm3',
};
const elRate = 0.45;
const wRate = 2;
const monthPayments = [0, 0]; // [electricity, water]
const calculatePayments = (
// destructuring object
{ readings, units, mode }, wData, elRate, wRate) => {
    if (mode === 'double' && readings < 50) {
        monthPayments[0] = readings * elRate * 0.7;
    }
    else {
        monthPayments[0] = readings * elRate;
    }
    monthPayments[1] = wData.readings * wRate;
};
calculatePayments(electricityUserData, waterUserData, elRate, wRate);
const sendInvoice = (
// destructuring array
[el, water], electricityUserData, waterUserData) => {
    const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${el}€

    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`;
    return text;
};
const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);
// ----------------------------------------------------------------//
//! Task
// ! Tuples (кортежи)
//* Запись набора данных в строгом порядке,  кортеж технически - это массив.
// * элементы строго определены при их аннотации
const userDataTuple = [true, 1, 'string'];
//? расширение кортежей через spread/rest оператор
const userDataTuple2 = [true, 1, 'string'];
const userDataTuple3 = [true, 1, 'string'];
const userDataTuple4 = [true, 1, 'string'];
// ! Union (объединение типов)
// * string | number - это строка или число (Union)
const message = 'Hello';
const messages = ['a', 'b', 'c'];
// ! Narrowing (сужение типов)
// * вручную проверили через условие - это и есть сужение типов
// function printMsg(msg: string | number): void {
// 	if (typeof msg === 'string') {
// тут msg это строка
// 		console.log(msg.toUpperCase());
// 	} else {
// тут msg это число
// 		console.log(msg.toExponential());
// 	}
// тут msg это либо строка, либо число (Union)
// 	console.log(msg);
// }
function printMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(item => console.log(item));
    }
    else {
        console.log(msg.toFixed);
    }
}
printMsg(4);
const printReadings = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
};
const printReadings2 = (a) => {
    console.log(a.slice(0, 3));
};
function checkReadings(readings) {
    if ('system' in readings) {
        console.log(readings.system);
    }
    else {
        console.log(readings.user);
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
}
// ! Literal types (примитивные литеральные типы)
// *  это типы на основании конкретных значений примитивов
// * (только то, что указано аннотации переменной)
let hello = 'Hello';
// выдает ошибку, т.к. не может быть ничего другого кроме 'Hello'
// hello = '';
const port3000 = 3_000;
const port3001 = 3_001;
const serverConfig = {
    protocol: 'https',
    port: 3000,
};
const backupConfig = {
    protocol: 'http',
    port: 3001,
    role: 'admin',
};
const startServer = (protocol, port) => {
    if (port === port3000 || port === port3001) {
        console.log(`Server started on ${protocol}://${port}`);
        return 'Server started';
    }
    else {
        console.log('Error');
        return "Error: Server can't be started";
    }
};
startServer('http', port3000);
startServer(serverConfig.protocol, serverConfig.port);
function createAnimation(id, animationName, timingFunc = 'ease', duration, iterationCount = 'infinite') {
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    console.log(`${animationName} ${duration}ms ${timingFunc} ${iterationCount}`);
    // if (elem) {
    // elem.style.animation = `${animationName} ${duration}ms ${timingFunc} ${iterationCount}`;
    // }
}
createAnimation('id', 'animation', 'ease', 1000, 'infinite');
const serverCOfigInterface = {
    protocol: 'http',
    port: 3000,
    log: (msg) => {
        console.log(msg);
    },
    role: 'user',
    // добавляем свойство
    domain: 'com',
};
const startServerInterface = (protocol, port) => {
    if (port === port3000 || port === port3001) {
        console.log(`Server started on ${protocol}://${port}`);
        return 'Server started';
    }
    else {
        console.log('Error');
        return "Error: Server can't be started";
    }
};
startServerInterface(serverCOfigInterface.protocol, serverCOfigInterface.port, serverCOfigInterface.log);
const style = {
    position: 'absolute',
    top: '20px',
    left: '20px',
};
// главный объект со всеми данными, должен подходить под формат TotalWarehouse
const totalData = {
    jackets: 5,
    hats: 'empty',
    socks: 'empty',
    pants: 15,
    scissors: 15,
    paper: true,
    dishwashers: 3,
    cookers: 'empty',
    mixers: 14,
    deficit: true,
    date: new Date(),
};
const printReport = data => {
    const result = Object.entries(data)
        .filter(item => item[1] === 'empty')
        .reduce((res, item) => `${res} ${item[0]},`, '');
    if (result.trim().length) {
        return `We need this items:${result.slice(0, -1)}`;
    }
    else {
        return 'Everything fine';
    }
};
console.log(printReport(totalData));
// ----------------------------------------------------------------//
// ! Task for interface or type
// ! Type Inference (механизм вывода типов)
// не нужна аннотация типов если TS может это сделать сам
// избегаем any
let number10;
number = 10;
const userDataForInterface = '{"isBirthdayData: boolean":"true", "ageData: number":"36", "userNameData: string":"John" }';
const userDataWithoutAny = JSON.parse(userDataForInterface);
// вывод типов даст boolean
let isOkay = true;
// вывод типов даст true
const isOkay2 = true;
let movement = false;
if (isOkay) {
    movement = 'moving';
}
const arr = ['hello', 3, true, [true, 1]];
const propertyObject = {
    login: 'login',
    password: 'password',
    age: 50,
};
let dbName;
sendUserData(propertyObject, 'Black');
console.log(dbName);
function sendUserData(obj, dbName) {
    dbName = 'Alex';
    console.log(obj.parents?.father?.charAt(0), dbName?.toLowerCase);
}
const basicPorts = [3_000, 3_001, 5_000];
var AnimTimingFunc;
(function (AnimTimingFunc) {
    AnimTimingFunc["EASE"] = "ease";
    AnimTimingFunc["LINEAR"] = "linear";
    AnimTimingFunc["EASE_IN"] = "ease-in";
    AnimTimingFunc["EASE_OUT"] = "ease-out";
    AnimTimingFunc["EASE_IN_OUT"] = "ease-in-out";
})(AnimTimingFunc || (AnimTimingFunc = {}));
var AnimTimingFunc2;
(function (AnimTimingFunc2) {
    AnimTimingFunc2[AnimTimingFunc2["EASE"] = 2] = "EASE";
    AnimTimingFunc2[AnimTimingFunc2["LINEAR"] = 3] = "LINEAR";
    AnimTimingFunc2[AnimTimingFunc2["EASE_IN"] = 4] = "EASE_IN";
    AnimTimingFunc2[AnimTimingFunc2["EASE_OUT"] = 5] = "EASE_OUT";
    AnimTimingFunc2[AnimTimingFunc2["EASE_IN_OUT"] = 14] = "EASE_IN_OUT";
})(AnimTimingFunc2 || (AnimTimingFunc2 = {}));
function frame(elem, dir, tFunc) {
    if (dir === 2 /* Direction.RIGHT */) {
        console.log(tFunc);
    }
}
frame('elem', 2 /* Direction.RIGHT */, AnimTimingFunc.EASE);
//! Unknown (неизвестное)
// сущность неизвестного типа
let some;
some = 'hello';
// нельзя назначить тип Unknown для типа string
// let data: string[] = some;
// избегаем типа any при парсе данных
function fetchData(data) {
    if (typeof data === 'string') {
        console.log(data.toLowerCase());
    }
}
function saveParse(s) {
    return JSON.parse(s);
}
const dataParse = saveParse('{"isBirthdayData":true, "ageData":36, "userNameData":"John" }');
function transferData(d) {
    if (typeof d === 'object' && d) {
        console.log(d);
    }
    else {
        console.error('Error');
    }
}
transferData(dataParse);
//! Запросы типов
//  data: typeof dataFromControl - проверка на соответствие типов
const dataFromControl = {
    water: 200,
    el: 350,
};
function checkReadingsData(data) {
    const dataFromUser = {
        water: 200,
        el: 350,
    };
    if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
        return true;
    }
    else {
        return false;
    }
}
const PI = 3.14;
let PIClone;
// ----------------------------------------------------------------//
// ! Task
// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
var TypesOfMedia;
(function (TypesOfMedia) {
    TypesOfMedia["Video"] = "video";
    TypesOfMedia["Audio"] = "audio";
})(TypesOfMedia || (TypesOfMedia = {}));
// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
var FormatsOfMedia;
(function (FormatsOfMedia) {
    FormatsOfMedia["MP4"] = ".mp4";
    FormatsOfMedia["MOV"] = ".mov";
    FormatsOfMedia["MKV"] = ".mkv";
    FormatsOfMedia["FLV"] = ".flv";
    FormatsOfMedia["WEBM"] = ".webM";
})(FormatsOfMedia || (FormatsOfMedia = {}));
function playMedia({ name, type, format, subtitles, marks } = {
    name: 'example',
    type: TypesOfMedia.Video,
    format: FormatsOfMedia.MKV,
}) {
    let marksLog;
    if (Array.isArray(marks)) {
        marksLog = marks.join(', ');
    }
    else if (typeof marks === 'string') {
        marksLog = marks;
    }
    else {
        marksLog = 'Unsupported type of marks';
    }
    console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? 'none'}`);
    return 'Media started';
}
playMedia({
    name: 'WoW',
    type: TypesOfMedia.Video,
    format: FormatsOfMedia.MKV,
    subtitles: 'hmhmhm hmhmhm doh',
    marks: ['4:30', '5:40'],
});
// ----------------------------------------------------------------//
// ! Task
//! Утверждение типов (Type assertions)
const fetchData2 = (url, method) => {
    console.log('Fetched!');
};
const reqOptions = {
    url: 'https://someurl.com',
    // method: 'GET',
    method: 'GET',
}; // as const;
fetchData2('qqq', 'GET');
fetchData2(reqOptions.url, reqOptions.method);
// const box = document.querySelector('.box') as HTMLElement;
// box.style
// box?.classList;
// const body: HTMLElement = document.body;
// const input = document.querySelector('input') as HTMLInputElement;
// const input = <HTMLInputElement>document.querySelector('input');
// In React don`t work because thi is fragment jsx
// const someNumber: number = +input.value;
// console.log(someNumber * 2);
//! Приведение типов
// * Примитивы
const num = 5;
const strNum = num.toString();
const str2 = '5';
const bum2 = Number(str2);
const department2 = {
    name: 'web-dev',
    budget: 50_000,
};
function transformDept(department, amount) {
    return {
        name: department.name,
        projectBudget: amount,
    };
}
const mainProject = transformDept(department2, 100_000);
console.log(mainProject);
//! Type Guard
// Функция или метод которая определяет тип и возвращает boolean
function isNumber(n) {
    return typeof n === 'number';
}
console.log(isNumber(num));
function repair(vehicle) {
    // if (isCar(vehicle)) {
    // 	vehicle.wheels;
    // } else if (isShip(vehicle)) {
    // 	vehicle.sail;
    // } else {
    // 	vehicle;
    // }
    switch (vehicle.name) {
        case 'Car':
            vehicle.wheels;
            break;
        case 'Ship':
            vehicle.sail;
            break;
        case 'Airplane':
            vehicle.wings;
            break;
        default:
            //* Never used
            // Нет кейса Супер самолет и выдаст ошибку, нужно написать еще один кейс с ISuperAirplane
            // const something: never = vehicle;
            console.log('Ops!');
    }
}
function isCar(car) {
    return car.wheels !== undefined;
    // return 'wheels' in car;
}
function isShip(ship) {
    return 'sail' in ship;
}
function calculateArea(a, b) {
    if (b) {
        const rect = {
            a,
            b,
            area: a * b,
        };
        return rect;
    }
    else {
        const square = {
            side: a,
            area: a * a,
        };
        return square;
    }
}
calculateArea(2);
calculateArea(1, 2);
var AnimalStatus;
(function (AnimalStatus) {
    AnimalStatus["AVAILABLE"] = "available";
    AnimalStatus["NOT_AVAILABLE"] = "not available";
})(AnimalStatus || (AnimalStatus = {}));
function isAvailable(res) {
    if (res.status === AnimalStatus.AVAILABLE) {
        return true;
    }
    else {
        return false;
    }
}
function checkAnimalData(animal) {
    if (isAvailable(animal)) {
        return animal.data;
    }
    else {
        return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
    }
}
const retString = () => {
    //
    return 'bla bla bla bla bla bla';
};
const s = retString();
console.log(s);
const names = ['Ann', 'John'];
names.forEach((name, i, arr) => {
    arr.push('Hey!');
});
// Callback ничего не возвращает и принудительно возвращается void
//! Generics Обобщенные типы
/*
 * Простые Generics обозначаются буквами T U V S P K/V
 * Сложные Generics ReferralSystem <UserID, User>
 */
function genericSyntax(data) {
    return data;
}
const genericResult = genericSyntax(1);
const genericResult2 = genericSyntax('1');
const genericNum = 3;
const genericStr = '3';
const genericResult3 = genericSyntax(genericNum);
const genericSmth = { design: 'Hello' };
const genericSmth2 = { design: 10 };
const genericNum6 = 10;
const genericUser = {
    login: 'str',
    age: 10,
};
const manyType = ['1', '2'];
const parent2 = {
    parents: { mother: 'Ann', father: 'John', married: false },
    name: 'Ann',
    age: 10,
};
const depositMoney = (amount) => {
    console.log('request amount:', amount);
    return amount;
};
depositMoney(500);
depositMoney('500');
const player1 = {
    game: 'CS:GO',
    hours: 300,
    server: 'basic',
};
const player2 = {
    game: 2048,
    hours: '300 h.',
    server: 'arcade',
};
const player3 = {
    game: 'Chess',
    hours: {
        total: 500,
        inMenu: 50,
    },
    server: 'chess',
};
// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }
var FigureNames;
(function (FigureNames) {
    FigureNames["RECT"] = "rect";
    FigureNames["TRIANGLE"] = "triangle";
    FigureNames["CIRCLE"] = "circle";
    FigureNames["LINE"] = "line";
})(FigureNames || (FigureNames = {}));
/**
 * Function takes an array of objects with shape name and optional data property
 * and returns an object with the amount of each shape
 * @param figure - array of figures
 * @returns an object with the amount of each shape
 */
function calculateAmountOfFigures(figure) {
    /**
     * Initialize an object with initial amount of each shape as 0
     */
    const amount = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0,
    };
    /**
     * Loop through each figure and increase the count of the corresponding shape
     */
    for (let fig of figure) {
        switch (fig.name) {
            case FigureNames.RECT:
                amount.squares += 1;
                break;
            case FigureNames.TRIANGLE:
                amount.triangles += 1;
                break;
            case FigureNames.CIRCLE:
                amount.circles += 1;
                break;
            default:
                amount.others += 1;
                break;
        }
    }
    /**
     * Return the object with the amount of each shape
     */
    return amount;
}
const dataFigures = [
    {
        name: 'rect',
        data: { a: 5, b: 10 },
    },
    {
        name: 'rect',
        data: { a: 6, b: 11 },
    },
    {
        name: 'triangle',
        data: { a: 5, b: 10, c: 14 },
    },
    {
        name: 'line',
        data: { l: 15 },
    },
    {
        name: 'circle',
        data: { r: 10 },
    },
    {
        name: 'circle',
        data: { r: 5 },
    },
    {
        name: 'rect',
        data: { a: 15, b: 7 },
    },
    {
        name: 'triangle',
    },
];
console.log(calculateAmountOfFigures(dataFigures));
//! Class Generics
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayMyName(surname) {
        if (typeof surname !== 'string') {
            return `I have only ${surname}`;
        }
        else {
            return `My name is ${this.name} ${surname}`;
        }
    }
}
const nameStr = 'Sergey';
const ageNum = 30;
const user = new User(nameStr, ageNum);
console.log(user.sayMyName('Sckaromnick'));
const user2 = new User('Sergey', 30);
class AdminUser extends User {
    rules;
    constructor(name, age, rules) {
        super(name, age);
        this.rules = rules;
    }
}
const ADMIN = new AdminUser('Sergey', 30, 'read');
console.log(ADMIN);
//! Readonly, Partial, Required
const arrArray = [];
const arrArray2 = [];
const roArray = [
    'str',
    'str',
    'str',
    'str',
    'str',
    'str',
];
// Partial
// * все свойства становятся необязательными (так если бы стоял знак "?")
const state = {
    data: {
        name: 'John',
    },
};
// Required
// * все свойства становятся обязательными (удаляет все знаки "?" у свойств)
const strictState = {
    data: {
        name: 'John',
    },
    // need add tag
    tag: 'tag',
};
function action(state) {
    // state.data = state.data
    // верхний уровень менять нельзя, только чтение, для боле глубокого запрета существуют другие сущности
    state.data.name = 'data';
    // более глубокое изменение возможно
}
const keys = 'debts';
function printDebts(company, name, debts) {
    console.log(`Company ${company[name]} has debts ${company[debts]}`);
}
// const hh: ICompany = {
// 	name: 'hh',
// 	debts: 1000,
// };
// printDebts(hh, 'name', 'debts');
const google = {
    name: 'google',
    open: 'true',
    debts: 5000,
    department: {
        sales: 'sales',
        development: 'development',
    },
    management: {
        owner: 'John',
    },
};
printDebts(google, 'name', 'open');
const keys2 = 'name';
//! Indexed Access Types
//* получение типа
// Нельзя так мы обращаемся к типу, который определяет получаемый тип, а не к объекту с находящимся в нем типом
// type TCompanyDebtsType = typeof ICompany.debts;
// const debts = 'debts';
// let debts = 'debts' as "debts";
let debts = 'debts';
// Типизировать объект phones
const phones = [
    {
        company: 'Nokia',
        number: 1285637,
        size: '5.5',
        companyPartner: 'MobileNokia',
        manufactured: new Date('2022-09-01'),
    },
    {
        company: 'Samsung',
        number: 4356637,
        size: '5.0',
        companyPartner: 'SamMobile',
        manufactured: new Date('2021-11-05'),
    },
    {
        company: 'Apple',
        number: 4552833,
        size: '5.7',
        companyPartner: 'no data',
        manufactured: new Date('2022-05-24T12:00:00'),
    },
];
function filterPhonesByDate(phones, key, initial) {
    return phones
        .filter(phone => {
        const manufactured = phone[key];
        if (manufactured instanceof Date &&
            manufactured.getTime() > new Date(initial).getTime()) {
            return phone;
        }
    })
        .map(phone => {
        const newObj = { ...phone, initialDate: initial };
        return newObj;
    });
}
// Второй аргумент при вызове функции должен быть связан с первым,
// а значит мы получим подсказки - свойства этого объекта
console.log(filterPhonesByDate(phones, 'manufactured', '2022-01-01'));
const str3 = 'Hello';
const user3 = {
    created: 'created',
};
// function calculateDailyCalories(
// 	numOrString: number | string
// ): IDataFromUser | IDataFromBase {
// 	if (typeof numOrString === 'string') {
// 		const obj: IDataFromUser = { weights: numOrString };
// 		return obj;
// 	}
// 	const obj: IDataFromBase = { calories: numOrString };
// 	return obj;
// }
function calculateDailyCalories(numOrString) {
    if (typeof numOrString === 'string') {
        const obj = { weights: numOrString };
        // return obj as T extends string ? IDataFromUser : IDataFromBase;
        return obj;
    }
    const obj = { calories: numOrString };
    // return obj as T extends string ? IDataFromUser : IDataFromBase;
    return obj;
}
const alex = {
    name: 'Alex',
    age: '30',
    email: '5HtBb@example.com',
    password: '123456',
};
const gameData = {
    alex: {
        customUsa: 'string',
        customChina: 'string',
        customGermany: 'string',
        customKz: 'string',
        customUkraine: 'string',
    },
    mike: {
        customUsa: 'string',
        customChina: 'string',
        customGermany: 'string',
        customKz: 'string',
        customUkraine: 'string',
    },
};
function calculate(a, b) {
    return a * b;
}
// Получение типа аргументов класса
class Example {
    constructor(a, b) {
        a = a;
        b = b;
    }
}
const fitnessClubCenter = {
    clubName: 'Fitness club Center',
    location: 'central ave. 45, 5th floor',
    classes: [
        {
            name: 'yoga',
            startsAt: '8:00 AM',
            duration: 60,
        },
        {
            name: 'trx',
            startsAt: '11:00 AM',
            duration: 45,
        },
        {
            name: 'swimming',
            startsAt: '3:00 PM',
            duration: 70,
        },
    ],
    futureClasses: [
        {
            name: 'boxing',
            willStartsAt: '6:00 PM',
            duration: 40,
        },
        {
            name: 'breath training',
            willStartsAt: '8:00 PM',
            duration: 30,
        },
    ],
    currClients: [
        {
            name: 'John Smith',
            age: '-',
            gender: 'male',
            timeLeft: '1 month',
        },
        {
            name: 'Alise Smith',
            age: 35,
            gender: 'female',
            timeLeft: '3 month',
        },
        {
            name: 'Ann Sonne',
            age: 24,
            gender: 'female',
            timeLeft: '5 month',
        },
    ],
    exClients: [
        {
            name: 'Tom Smooth',
            age: 50,
            gender: 'male',
            makeCallFor: new Date('2023-08-12'),
        },
    ],
    futureClients: [
        {
            name: 'Maria',
            makeCallFor: new Date('2023-07-10'),
        },
    ],
};
function createSlider({ container = '', numberOfSlides = 1, speed = 300, direction = 'horizontal', dots = true, arrows = true, } = {}) {
    console.log(container, numberOfSlides, speed, direction, dots, arrows);
}
createSlider();
const customSliderOptions = {
    container: 'id',
    numberOfSlides: 4,
    speed: 1100,
    direction: 'horizontal',
    dots: true,
    arrows: true,
};
function createCustomSlider(options) {
    if ('container' in options) {
        console.log(options);
    }
}
const validationData = {
    login: { isValid: false, errorMsg: 'At least 3 characters' },
    password: { isValid: true },
};
//! work with AJAX (Promise, async/await, fetching)
// 1. Нельзя зааннотировать все
// 2. проводим базовые проверки по типу Array.isArray(), typeof, instanceof с готовым результатом (сужение типов)
// 3. аннотации не будут лишними (для понимания, что мы ожидаем в выводе и почему проводим конкретные проверки из п.2)
const jsonTest = '{"name" : "Test", "data" : "4"}';
const objFromJson = JSON.parse(jsonTest);
let toDoLIst = [];
// fetch('https://jsonplaceholder.typicode.com/todos')
// 	.then(response => response.json())
// 	.then(json => {
// 		if ('id' in json) {
// 			toDoLIst.push(json);
// 		} else if (Array.isArray(json)) {
// 			toDoLIst = json;
// 		} else {
// 			console.log(`${json} is a string`);
// 		}
// 		console.log(toDoLIst);
// 	});
//? Promise это дженерик поэтому передаем ему тип сущности с которой работаем (string, number)
// const promise = new Promise<string>((resolve, reject) => {
// 	resolve('string');
// });
// promise.then(value => {
// 	console.log(value.toLowerCase());
// });
// Awaited promise аннотирует ожидаемый результат от промиса
// type FromPromise = Awaited<Promise<Promise<number>>>;
// interface IUserAwait {
// 	name: string;
// }
// async function fetchUsersName(): Promise<IUserAwait[]> {
// 	const users: IUserAwait[] = [{ name: 'John' }];
// 	return users;
// }
// const users = fetchUsersName();
// //? ReturnType - возвращает тип возвращаемого значения функции
// type PFetchUsersType = Awaited<ReturnType<typeof fetchUsersName>>;
// //? до стандарта TS 4.5
// type PUnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;
// type PFetchDataReturnType = PUnwrappedPromise<
// 	ReturnType<typeof fetchUsersName>
// >;
// type Smth = Awaited<boolean | Promise<number>>;
// boolean | number
//! Class
class Box {
    width;
    height;
    volume;
    //* Перегрузка классов
    // constructor(volume: string);
    // constructor(width: number);
    constructor(widthOrVolume, height) {
        if (typeof widthOrVolume === 'number') {
            this.width = widthOrVolume;
        }
        else {
            this.volume = widthOrVolume;
        }
        this.height = this.height;
    }
}
const firstBox = new Box(10, 10);
console.log(firstBox);
class UserPlus {
    name;
}
const userName = new UserPlus();
userName.name = 'John';
console.log(userName);
// !Class Methods
class Content {
    width;
    // в современном JS можно определить свойство вне класса как height
    height = 500;
    volume;
    content;
    _prop;
    constructor(width, volume, content) {
        this.width = width;
        this.volume = volume;
        this.content = content;
        this._prop = 'DON`T TOUCH'; // нельзя менять руками (псевдо приватное)
    }
    calculateVolume() {
        if (!this.volume) {
            this.volume = this.width * this.height;
            console.log(`Volume of box ${this.volume}`);
        }
        else {
            console.log(`Volume of box ${this.volume}`);
        }
    }
    checkContentSize(transport) {
        if (typeof transport === 'number') {
            return transport >= this.width ? 'OK' : 'Not OK';
        }
        else {
            return transport.some(t => t >= this.width) ? 'OK' : 'Not OK';
        }
    }
    //? Геттеры и Сеттеры называются как свойство, только без лодаша ("_"), если свойство псевдо приватное
    get prop() {
        return this._prop;
    }
    set prop(value) {
        this._prop = `Date: ${new Date().toTimeString()}, Content: ${value}`;
    }
    // Если сеттер не указан то свойство будет только для чтения (READONLY)
    // Геттеры и сеттеры не могут быть асинхронными
    async propAsync(value) {
        const date = await new Date().toTimeString();
        this._prop = `Date: ${new Date().toTimeString()}, Prop: ${value}`;
    }
}
const firstContent = new Content(130);
const firstContentSize = new Content(130);
firstContent.calculateVolume();
console.log(firstContent.checkContentSize(150)); // OK
console.log(firstContent.checkContentSize([90, 100, 70])); // not OK
console.log((firstContent.prop = 'Test')); // setter
console.log(firstContent.prop); // setter
class Styles {
}
const styleNew = new Styles();
styleNew.color = 'red';
styleNew.font = 'Roboto';
console.log(styleNew.color);
//! Class extends
class PresentBox extends Content {
    wrap;
    constructor(wrap, width, height) {
        super(width, height);
        this.wrap = wrap;
    }
    async propAsync(value) {
        const date = await new Date().toTimeString();
        this._prop = `Date: ${new Date().toTimeString()}, Prop: ${value}`;
    }
}
//* можно указывать через запятую
class UserForm {
    login;
    password;
    valid = false;
    //* аннотации не имплементируются
    isValid(login) {
        return login.length > 3;
    }
}
//! Task for  Implements in class
var TransferStatus;
(function (TransferStatus) {
    TransferStatus["Pending"] = "pending";
    TransferStatus["Rejected"] = "rejected";
    TransferStatus["Completed"] = "completed";
})(TransferStatus || (TransferStatus = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["NotFound"] = "Not found: 404";
    ErrorMessages["NotEnoughSpace"] = "Not enough space: 507";
    ErrorMessages["Forbidden"] = "Forbidden: 403";
})(ErrorMessages || (ErrorMessages = {}));
// Класс должен имплементировать ITransfer и TransferError
class SingleFileTransfer {
    // Место для реализаций
    path;
    data;
    date;
    message;
    transferStatus;
    constructor(status) {
        this.transferStatus = status;
    }
    start(path, data) {
        return 'Transfer started';
    }
    // Необходимо создать метод, который будет останавливать передачу данных
    stop(reason) {
        return `Transfer stopped by ${reason}, Date: ${this.date || new Date().toLocaleString()}`;
    }
    // Необходимо создать метод checkTransferStatus, проверяющий состояние передачи данных
    checkTransferStatus() {
        return this.transferStatus;
    }
    // Необходимо создать метод, который будет возвращать строку, содержащую
    // Статус передачи и любое сообщение об ошибке. На ваш выбор или отталкиваться от приходящего аргумента
    // Метод может показаться странным, но может использоваться для тестов, например
    makeError() {
        return `Status: ${TransferStatus.Rejected}, error message: ${ErrorMessages.Forbidden}`;
    }
}
const transfer = new SingleFileTransfer(TransferStatus.Pending);
console.log(transfer.checkTransferStatus());
console.log(transfer.stop('Test'));
console.log(transfer.makeError());
//! Member Visibility
// Только в TS
function setName() {
    return 'COD:MW';
}
class Player {
    //! Static members
    static game = 'COD:MW';
    name;
    #login;
    _password;
    server;
    consent = false;
    //! Static block
    // может быть несколько блоков
    static {
        Player.game = setName();
    }
    constructor(login) {
        this.#login = login;
    }
    get password() {
        return this._password;
    }
    set password(newPass) {
        // Провести валидацию на символы и т.п.
        this._password = newPass;
    }
    static getGameName() {
        return Player.game;
    }
    //! this annotation
    //? function declaration
    // login(this: Player) {
    // 	return `Login: ${this.#login} on ${this.server}`;
    // }
    //? function expression
    login = () => {
        return `Login: ${this.#login} on ${this.server}`;
    };
    connect() {
        console.log(`Connect to server ${this.server}`);
        return this;
    }
    // ? type guard
    isPro() {
        return this instanceof CompetitivePlayer;
    }
}
class CompetitivePlayer extends Player {
    ranking;
    //? function declaration
    // checkLogin() {
    // 	return super.login();
    // }
    //? function expression
    checkLogin() {
        return this.login();
    }
    isConsent() {
        return this.consent ? 'true' : 'false';
    }
}
const player = new Player('Siarghey');
// Public for default
player.name = 'test';
// Private (only inside class)
// player._password = 'test'; // error - private member
player.password = 'password';
// public
player.server = 'test';
// Protected
// player.consent = true; //error
console.log(player.name);
// console.log(player.login); //error private member
console.log(player.password);
console.log(player.server);
//! Static & Static blocks
// можно вызывать без создания объекта
// классическая конструкция class Math
console.log(Player.getGameName());
//! this annotation
console.log(player);
const tests = player.login.bind(player);
tests();
console.log(tests());
//? chain method
console.log(player.connect());
const somePlayer = new CompetitivePlayer('test4');
console.log(somePlayer.isPro() ? somePlayer : somePlayer);
class AbstractVehicle {
    model;
    capacity;
    stopEngine = (time) => {
        return 'engine stopped';
    };
}
//? implements
// class Vehicles implements IEngine {
// 	model: string;
// 	capacity: number;
// 	startEngine = (time: Date) => {
// 		return 'engine started';
// 	};
// }
//? abstract
class Vehicles extends AbstractVehicle {
    startEngine = (time) => {
        return 'engine started';
    };
}
console.log(new Vehicles().startEngine(new Date()));
