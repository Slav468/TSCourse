const str = 'str';
console.log(str);

// Data types
let userId: string = 'Patrick'; // String
let number: number = NaN; // Number infinity, 1, -1, 3e10
let boolean: boolean = false; // Boolean true or false

const isBirthdayData: boolean = true;
const ageData: number = 36;
const userNameData: string = 'John';

// TYPE Any
// Parse = any
const userDataJson =
	'{"isBirthdayData: boolean":"true", "ageData: number":"36", "userNameData: string":"John" }';

const userObj: {
	isBirthdayData: boolean;
	ageData: number;
	userNameData: string;
} = JSON.parse(userDataJson);

// let num;
// Empty = any

let salary;
salary = 5_000;

//! Task
// ---------------------------------------------------------------//
const currRate = '1.05';

const fetchCurr = (response: string): number => {
	const data: number = JSON.parse(response);
	return data;
};

function transferEurToUsd(
	available: boolean,
	amount: number,
	commission: number
): void {
	if (available) {
		let res: number = fetchCurr(currRate) * amount * commission;
		console.log(res);
	} else {
		console.log('Сейчас обмен недоступен');
	}
}

transferEurToUsd(true, 500, 1.05);
// ----------------------------------------------------------------//
//! Task

// TYPE Never
const createError = (msg: string) => {
	throw new Error(msg);
};

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
	if (isBirthday) {
		return `Congrats ${userName.toUpperCase()}, ${age + 1}`;
	} else {
		return createError('Error');
	}
}

logBrtMsg(isBirthdayData, userNameData, ageData);

// TYPE null
const test: null = null;
const test2: any = null;
// const test11: string = null; // Error
// const test22: number = null; // Error

// TYPE undefined
const test3: undefined = undefined;
const test4: any = undefined;
// const test33: string = undefined; // Error
// const test44: any = undefined;// Error

// TYPE Symbol
const id1: symbol = Symbol('symbol1');
const id2: symbol = Symbol('symbol1');
const data = {
	[id1]: 1,
	[id2]: 2,
};
console.log(data[id2]);

// TYPE BigInt
const num1: bigint = 1n;
const num2: bigint = 2n;
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
function logBrhMsg({
	isBirthdayData,
	ageData,
	userNameData,
	messagesData: { error },
}: {
	isBirthdayData: boolean;
	ageData: number;
	userNameData: string;
	messagesData: { error: string };
}): string {
	if (isBirthdayData) {
		return `Congrats ${userNameData.toUpperCase()}, age: ${ageData}`;
	} else if (!isBirthdayData) {
		return `Too bad`;
	} else {
		return error;
	}
}

logBrhMsg(userData);

// Typing array
//? string[] читается как массив содержащий стоки (состоящий из таких типов данных, могут быть другие типы данных)
const num4: number[] = [1, 2, 3, 4];

const departments: string[] = ['dev', 'design', 'marketing'];
const department = departments[0];
// departments.push();
const report = departments
	.filter((d: string) => d !== 'dev')
	.map((d: string) => `${d} - done!`);

//! ТАК ДЕЛАТЬ НЕ НУЖНО (но можно)
const anyData: any[] = [1, 'string', false];

//? number[][] читается как массив массивов (матрица)
const num3: number[][] = [
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

const elRate: number = 0.45;
const wRate: number = 2;
const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = (
	// destructuring object
	{ readings, units, mode }: { readings: number; units: string; mode: string },
	wData: { readings: number; units: string },
	elRate: number,
	wRate: number
): void => {
	if (mode === 'double' && readings < 50) {
		monthPayments[0] = readings * elRate * 0.7;
	} else {
		monthPayments[0] = readings * elRate;
	}

	monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
	// destructuring array
	[el, water]: number[],
	electricityUserData: { readings: number; units: string; mode: string },
	waterUserData: { readings: number; units: string }
): string => {
	const text: string = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${el}€

    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`;

	return text;
};

const invoice: string = sendInvoice(
	monthPayments,
	electricityUserData,
	waterUserData
);

console.log(invoice);

// ----------------------------------------------------------------//
//! Task

// ! Tuples (кортежи)
//* Запись набора данных в строгом порядке,  кортеж технически - это массив.
// * элементы строго определены при их аннотации

const userDataTuple: [boolean, number, string] = [true, 1, 'string'];

//? расширение кортежей через spread/rest оператор
const userDataTuple2: [boolean, number, ...string[]] = [true, 1, 'string'];
const userDataTuple3: [boolean, ...number[], string] = [true, 1, 'string'];
const userDataTuple4: [...boolean[], number, string] = [true, 1, 'string'];

// ! Union (объединение типов)
// * string | number - это строка или число (Union)
const message: string | number = 'Hello';
const messages: string[] | number[] = ['a', 'b', 'c'];

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

function printMsg(msg: string[] | number): void {
	if (Array.isArray(msg)) {
		msg.forEach(item => console.log(item));
	} else {
		console.log(msg.toFixed);
	}
}

printMsg(4);

const printReadings = (a: number | string, b: number | boolean) => {
	if (typeof a === 'number' && typeof b === 'number') {
		console.log(a + b);
	}
};
const printReadings2 = (a: number[] | string) => {
	console.log(a.slice(0, 3));
};

function checkReadings(readings: { system: number } | { user: number }): void {
	if ('system' in readings) {
		console.log(readings.system);
	} else {
		console.log(readings.user);
	}
}

function logValue(x: string | Date) {
	if (x instanceof Date) {
		console.log(x.toUTCString());
	}
}

// ! Literal types (примитивные литеральные типы)
// *  это типы на основании конкретных значений примитивов
// * (только то, что указано аннотации переменной)

let hello: 'Hello' = 'Hello';
// выдает ошибку, т.к. не может быть ничего другого кроме 'Hello'
// hello = '';

const port3000: 3000 = 3_000;
const port3001: 3001 = 3_001;

// ! Объектный литеральный тип (Object literal types)
type ServerConfig = { protocol: 'http' | 'https'; port: 3_000 | 3_001 };
const serverConfig: ServerConfig = {
	protocol: 'https',
	port: 3000,
};

// ! Пересечение типов (Intersection types)
// *  это объединение типов - & (ServerConfig & Role)
type Role = {
	role: 'admin' | 'user';
};

type ConfigWithRole = ServerConfig & Role;

const backupConfig: ConfigWithRole = {
	protocol: 'http',
	port: 3001,
	role: 'admin',
};

//! Аннотация функции (Function annotations)
type StartServer = (protocol: 'http' | 'https', port: 3_000 | 3_001) => string;

const startServer: StartServer = (
	protocol: 'http' | 'https',
	port: 3_000 | 3_001
): string => {
	if (port === port3000 || port === port3001) {
		console.log(`Server started on ${protocol}://${port}`);
		return 'Server started';
	} else {
		console.log('Error');
		return "Error: Server can't be started";
	}
};
startServer('http', port3000);
startServer(serverConfig.protocol, serverConfig.port);

//! Псевдонимы типов (Type aliases)
// ? создается с помощью слова type и с Заглавной буквы
// *существует только на этапе разработки
type AnimationTimingFunc = 'ease' | 'linear' | 'ease-in' | 'ease-out';
type AnimationID = string | number;
type AnimationIterationCount = 'infinite' | number;

function createAnimation(
	id: AnimationID,
	animationName: string,
	timingFunc: AnimationTimingFunc = 'ease',
	duration: number,
	iterationCount: AnimationIterationCount = 'infinite'
): void {
	// const elem = document.querySelector(`#${id}`) as HTMLElement;
	console.log(`${animationName} ${duration}ms ${timingFunc} ${iterationCount}`);
	// if (elem) {
	// elem.style.animation = `${animationName} ${duration}ms ${timingFunc} ${iterationCount}`;
	// }
}

createAnimation('id', 'animation', 'ease', 1000, 'infinite');

//! Interface (Интерфейсы)
interface ConfigServerInterface {
	protocol: 'http' | 'https';
	port: 3_000 | 3_001;
}

//? Венгерская аннотация
// https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BD%D0%B3%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%BE%D1%82%D0%B0%D1%86%D0%B8%D1%8F

interface IConfigServerInterface {
	protocol: 'http' | 'https';
	port: 3_000 | 3_001;
	log: (msg: string) => void;
}
interface IRoleInterface {
	role: 'admin' | 'user';
}

//? Пересечение типов для интерфейсов
interface IConfigWithRole extends IConfigServerInterface, IRoleInterface {
	// добавляем свойство
	domain: 'com' | 'ru';
}
const serverCOfigInterface: IConfigWithRole = {
	protocol: 'http',
	port: 3000,
	log: (msg: string): void => {
		console.log(msg);
	},
	role: 'user',
	// добавляем свойство
	domain: 'com',
};

type TConfigFunc = (
	protocol: 'http' | 'https',
	port: 3_000 | 3_001,
	log: (msg: string) => void
) => string;

const startServerInterface: TConfigFunc = (
	protocol: 'http' | 'https',
	port: 3_000 | 3_001
) => {
	if (port === port3000 || port === port3001) {
		console.log(`Server started on ${protocol}://${port}`);
		return 'Server started';
	} else {
		console.log('Error');
		return "Error: Server can't be started";
	}
};
startServerInterface(
	serverCOfigInterface.protocol,
	serverCOfigInterface.port,
	serverCOfigInterface.log
);

//! Индексные свойства (Index properties)

interface IStyles {
	// индексное свойство
	[key: string]: string;
}

const style: IStyles = {
	position: 'absolute',
	top: '20px',
	left: '20px',
};

//! Типы (type) и Интерфейсы (interface) - разница
/**
	* Типы type - объявляются с помощью ключевого слова type
	* Интерфейсы interface - объявляются с помощью ключевого слова interface
	*****************************************
	* Типы создаются через присваивание
	* Интерфейсы создаются как class
	****************************************
	*Типы расширяются при помощи оператора &
	*Интерфейсы расширяются при помощи extends
	*****************************************
	*Интерфейсы можно модифицировать объявляя ниже по коду тот же интерфейс и присваивать ему новые свойства (bad practice)
	*Типы выдают ошибку при попытке модифицировать по тому же принципу
	*****************************************
	*Типы работают с примитивными типами (number, string, boolean, bigint, symbol)
	*Интерфейсы работают с объектами (object)

 */

// ! Task for interface or type
// ----------------------------------------------------------------//
// структура данных склада с одеждой
type TEmptyNumber = 'empty' | number;
type TEmptyBool = 'empty' | boolean;

interface ClothesWarehouse {
	jackets: TEmptyNumber;
	hats: TEmptyNumber;
	socks: TEmptyNumber;
	pants: TEmptyNumber;
}

// структура данных склада с канцтоварами

interface StationeryWarehouse {
	scissors: TEmptyNumber;
	paper: TEmptyBool;
}

// структура данных склада с бытовой техникой

interface AppliancesWarehouse {
	dishwashers: TEmptyNumber;
	cookers: TEmptyNumber;
	mixers: TEmptyNumber;
}

// общая структура данных, наследует все данные из трех выше
// + добавляет свои

interface TotalWarehouse
	extends ClothesWarehouse,
		StationeryWarehouse,
		AppliancesWarehouse {
	deficit: boolean;
	date: Date;
}

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: TotalWarehouse = {
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

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

type TPrintReport = (data: TotalWarehouse) => string;

const printReport: TPrintReport = data => {
	const result: string = Object.entries(data)
		.filter(item => item[1] === 'empty')
		.reduce((res, item) => `${res} ${item[0]},`, '');
	if (result.trim().length) {
		return `We need this items:${result.slice(0, -1)}`;
	} else {
		return 'Everything fine';
	}
};

console.log(printReport(totalData));
// ----------------------------------------------------------------//
// ! Task for interface or type

// ! Type Inference (механизм вывода типов)
// не нужна аннотация типов если TS может это сделать сам

// избегаем any
let number10: number;
number = 10;

const userDataForInterface =
	'{"isBirthdayData: boolean":"true", "ageData: number":"36", "userNameData: string":"John" }';

interface IUserData {
	isBirthdayData: boolean;
	ageData: number;
	userNameData: string;
}

const userDataWithoutAny: IUserData = JSON.parse(userDataForInterface);

// вывод типов даст boolean
let isOkay = true;
// вывод типов даст true
const isOkay2 = true;
let movement: boolean | string = false;
if (isOkay) {
	movement = 'moving';
}

const arr = ['hello', 3, true, [true, 1]];

// ! Модификаторы свойств (Property modifiers)
//* Модификаторы свойств знак ? -  опциональное свойство (может быть или не быть)
//* Модификаторы свойств знак ! - обязательное свойство (обязательно должно быть)
//* Модификаторы свойств readonly - только для чтения
interface PropertyModifier {
	readonly login: string;
	password: string;
	age: number;
	address?: string;
	parents?: {
		mother?: string;
		father?: string;
	};
}

const propertyObject: PropertyModifier = {
	login: 'login',
	password: 'password',
	age: 50,
};

let dbName: string;
sendUserData(propertyObject, 'Black');

console.log(dbName!);

function sendUserData(obj: PropertyModifier, dbName?: string): void {
	dbName = 'Alex';
	console.log(obj.parents?.father?.charAt(0), dbName?.toLowerCase);
}

const basicPorts: readonly number[] = [3_000, 3_001, 5_000];
// только чтение при изменении элемента
// basicPorts[2] = 4333;

//! Enum (перечисления)
//  при создании enum через const в скомпилированном файле не будет больших конструкций - использовать тольлко в крайнем случае

const enum Direction {
	TOP,
	LEFT,
	RIGHT,
	BOTTOM,
}

enum AnimTimingFunc {
	EASE = 'ease',
	LINEAR = 'linear',
	EASE_IN = 'ease-in',
	EASE_OUT = 'ease-out',
	EASE_IN_OUT = 'ease-in-out',
}

enum AnimTimingFunc2 {
	EASE = 2,
	LINEAR = 3,
	EASE_IN = 4,
	EASE_OUT = 5,
	EASE_IN_OUT = EASE * 7,
}

function frame(elem: string, dir: Direction, tFunc: AnimTimingFunc): void {
	if (dir === Direction.RIGHT) {
		console.log(tFunc);
	}
}

frame('elem', Direction.RIGHT, AnimTimingFunc.EASE);

//! Unknown (неизвестное)
// сущность неизвестного типа

let some: unknown;
some = 'hello';
// нельзя назначить тип Unknown для типа string
// let data: string[] = some;

// избегаем типа any при парсе данных
function fetchData(data: unknown): void {
	if (typeof data === 'string') {
		console.log(data.toLowerCase());
	}
}

function saveParse(s: string): unknown {
	return JSON.parse(s);
}

const dataParse = saveParse(
	'{"isBirthdayData":true, "ageData":36, "userNameData":"John" }'
);

function transferData(d: unknown): void {
	if (typeof d === 'object' && d) {
		console.log(d);
	} else {
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

function checkReadingsData(data: typeof dataFromControl): boolean {
	const dataFromUser = {
		water: 200,
		el: 350,
	};

	if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
		return true;
	} else {
		return false;
	}
}

const PI = 3.14;
let PIClone: typeof PI;

// ----------------------------------------------------------------//
// ! Task

// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
enum TypesOfMedia {
	Video = 'video',
	Audio = 'audio',
}

// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
enum FormatsOfMedia {
	MP4 = '.mp4',
	MOV = '.mov',
	MKV = '.mkv',
	FLV = '.flv',
	WEBM = '.webM',
}

// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа

interface IMedia {
	name: string;
	type: TypesOfMedia;
	format: FormatsOfMedia;
	subtitles?: string;
	marks?: unknown;
}

function playMedia(
	{ name, type, format, subtitles, marks }: IMedia = {
		name: 'example',
		type: TypesOfMedia.Video,
		format: FormatsOfMedia.MKV,
	}
): string {
	let marksLog: string;

	if (Array.isArray(marks)) {
		marksLog = marks.join(', ');
	} else if (typeof marks === 'string') {
		marksLog = marks;
	} else {
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
const fetchData2 = (url: string, method: 'GET' | 'POST'): void => {
	console.log('Fetched!');
};

const reqOptions = {
	url: 'https://someurl.com',
	// method: 'GET',
	method: 'GET' as 'GET',
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
const strNum: string = num.toString();
const str2: string = '5';
const bum2: number = Number(str2);

//* Объекты

interface Department {
	name: string;
	budget: number;
}

const department2: Department = {
	name: 'web-dev',
	budget: 50_000,
};

interface Project {
	name: string;
	projectBudget: number;
}

function transformDept(department: Department, amount: number): Project {
	return {
		name: department.name,
		projectBudget: amount,
	};
}

const mainProject: Project = transformDept(department2, 100_000);
console.log(mainProject);

//! Type Guard

// Функция или метод которая определяет тип и возвращает boolean
function isNumber(n: unknown): n is number {
	return typeof n === 'number';
}

console.log(isNumber(num));

interface ICar {
	name: 'Car';
	engine: string;
	wheels: {
		number: number;
		type: string;
	};
}
interface IShip {
	name: 'Ship';
	engine: string;
	sail: string;
}

interface IAirplane {
	name: 'Airplane';
	engine: string;
	wings: string;
}

interface ISuperAirplane {
	name: 'Super Airplane';
	engine: string;
	wings: string;
	rocket: string;
}
type TTransportName = 'Car' | 'Ship' | 'Airplane' | 'Super Airplane';

//? Разделение Интерфейсов\
// Bad Practice  лучше разделять на мелкие интерфейсы, для того чтобы не словить баг, если какое-то свойство будет опционально
interface ITransport {
	name: TTransportName;
	engine: string;
	wheels?: {
		number: number;
		type: string;
	};
	wings?: string;
	sail?: string;
	rocket?: string;
}

type TVehicle = ICar | IShip | IAirplane | ISuperAirplane;

function repair(vehicle: TVehicle): void {
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

function isCar(car: TVehicle): car is ICar {
	return (car as ICar).wheels !== undefined;
	// return 'wheels' in car;
}

function isShip(ship: TVehicle): ship is IShip {
	return 'sail' in ship;
}

//! Function Overload

interface ISquare {
	side: number;
	area: number;
}

interface IRect {
	a: number;
	b: number;
	area: number;
}
//? Перегрузка функций записывается до основной функции
function calculateArea(side: number): ISquare;
function calculateArea(side: number, b: number): IRect;

function calculateArea(a: number, b?: number): ISquare | IRect {
	if (b) {
		const rect: IRect = {
			a,
			b,
			area: a * b,
		};
		return rect;
	} else {
		const square: ISquare = {
			side: a,
			area: a * a,
		};
		return square;
	}
}

calculateArea(2);
calculateArea(1, 2);

//! Task

// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

// Response #1

// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }

// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

type TAnimal = 'cat' | 'dog' | 'bird';

enum AnimalStatus {
	AVAILABLE = 'available',
	NOT_AVAILABLE = 'not available',
}

interface IAnimal {
	animal: TAnimal;
	breed: string;
	sterilized?: string;
	age?: number;
	location?: string;
}
interface IMessage {
	message: string;
	nextUpdateIn: Date;
}

interface IResponse {
	status: AnimalStatus.AVAILABLE;
	data: IAnimal;
}

interface IReject {
	status: AnimalStatus.NOT_AVAILABLE;
	data: IMessage;
}

type Res = IResponse | IReject;

function isAvailable(res: Res): res is IResponse {
	if (res.status === AnimalStatus.AVAILABLE) {
		return true;
	} else {
		return false;
	}
}

function checkAnimalData(animal: Res): IAnimal | string {
	if (isAvailable(animal)) {
		return animal.data;
	} else {
		return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
	}
}

//! TASK DOM practice

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

// const forms = document.querySelectorAll('form');
// const email = document.querySelector('#email') as HTMLInputElement;
// const title = document.querySelector('#title') as HTMLInputElement;
// const text = document.querySelector('#text') as HTMLTextAreaElement;
// const checkbox = document.querySelector('#checkbox') as HTMLInputElement;

// const formData: IFormData = {
// 	email: '',
// 	title: '',
// 	text: '',
// 	checkbox: false,
// };

// interface IFormData {
// 	email: string;
// 	title: string;
// 	text: string;
// 	checkbox: boolean;
// }

// for (let form of forms) {
// 	form.addEventListener('submit', e => {
// 		e.preventDefault();
// 		formData.email = email?.value ?? '';
// 		formData.title = title?.value ?? '';
// 		formData.text = text?.value ?? '';
// 		formData.checkbox = checkbox?.checked ?? false;
// 		if (validateFormData(formData)) {
// 			checkFormData(formData);
// 		}
// 	});
// }

// function validateFormData(data: IFormData): boolean {
// 	// Если каждое из свойств объекта правдиво...
// 	if (Object.values(data).every(value => value)) {
// 		return true;
// 	} else {
// 		console.log('Please, complete all fields');
// 		return false;
// 	}
// }

// function checkFormData(data: IFormData) {
// 	const { email } = data;
// 	const emails = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com'];

// 	// Если email совпадает хотя бы с одним из массива
// 	if (emails.includes(email)) {
// 		console.log('This email is already exist');
// 	} else {
// 		console.log('Posting data...');
// 	}
// }

//! Void

type voidCheck = () => void;

const retString: voidCheck = () => {
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

function genericSyntax<T>(data: T): T {
	return data;
}

const genericResult = genericSyntax(1);
const genericResult2 = genericSyntax('1');

const genericNum = 3;
const genericStr = '3';

const genericResult3 = genericSyntax<number>(genericNum);
// const genericResult4 = genericSyntax <number>(genericStr); // Error

// Обобщенный интерфейс
// Generic interface
interface IPrintES {
	design: string;
}
interface IPrintUK {
	design: number;
}

interface IPrint<T> {
	design: T;
}

const genericSmth: IPrint<string> = { design: 'Hello' };
const genericSmth2: IPrint<number> = { design: 10 };

type TGeneric<T> = T;
const genericNum6: TGeneric<number> = 10;

type TUser<T> = {
	login: T;
	age: number;
};

const genericUser: TUser<string> = {
	login: 'str',
	age: 10,
};

//? Generics helper type
type TOrNull<Type> = Type | null;
type TOneOrMany<Type> = Type | Type[];

const manyType: TOneOrMany<string[]> = ['1', '2'];

// Ограничение типов
interface IParent<ParentsData extends IParentOfUser> {
	parents: ParentsData;
	name: string;
	age: number;
}

interface IParentOfUser {
	mother: string;
	father: string;
}

const parent2: IParent<{ mother: string; father: string; married: boolean }> = {
	parents: { mother: 'Ann', father: 'John', married: false },
	name: 'Ann',
	age: 10,
};

const depositMoney = <T extends number | string>(amount: T): T => {
	console.log('request amount:', amount);
	return amount;
};

depositMoney(500);
depositMoney('500');
// depositMoney(false); //error

// const depositMoney = (amount: number | string): number | string => {
// 	console.log('request amount:', amount);
// 	return amount;
// };

// depositMoney(500);
// depositMoney("500");

//! Task

// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:
interface IHours {
	total: number;
	inMenu: number;
}

interface IPlayerData<Game, THours> {
	game: Game;
	hours: THours;
	server: string;
}
type TGame = string | number;
type THours = number | string | IHours;

const player1: IPlayerData<TGame, THours> = {
	game: 'CS:GO',
	hours: 300,
	server: 'basic',
};

const player2: IPlayerData<TGame, THours> = {
	game: 2048,
	hours: '300 h.',
	server: 'arcade',
};

const player3: IPlayerData<TGame, THours> = {
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

enum FigureNames {
	RECT = 'rect',
	TRIANGLE = 'triangle',
	CIRCLE = 'circle',
	LINE = 'line',
}

interface IFigure {
	name: string;
	data?: IDataOfFigure;
}
interface IDataOfFigure {
	a?: number;
	b?: number;
	c?: number;
	r?: number;
	l?: number;
}

interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}

/**
 * Function takes an array of objects with shape name and optional data property
 * and returns an object with the amount of each shape
 * @param figure - array of figures
 * @returns an object with the amount of each shape
 */
function calculateAmountOfFigures<T extends IFigure>(
	figure: T[]
): AmountOfFigures {
	/**
	 * Initialize an object with initial amount of each shape as 0
	 */
	const amount: AmountOfFigures = {
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

const dataFigures: IFigure[] = [
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
class User<T, S> {
	name: T;
	age: S;
	constructor(name: T, age: S) {
		this.name = name;
		this.age = age;
	}
	sayMyName<T>(surname: T): string {
		if (typeof surname !== 'string') {
			return `I have only ${surname}`;
		} else {
			return `My name is ${this.name} ${surname}`;
		}
	}
}

const nameStr = 'Sergey';
const ageNum = 30;
const user = new User<string, number>(nameStr, ageNum);
console.log(user.sayMyName('Sckaromnick'));

const user2 = new User('Sergey', 30);

class AdminUser<T> extends User<string, number> {
	rules: T;

	constructor(name: string, age: number, rules: T) {
		super(name, age);
		this.rules = rules;
	}
}

const ADMIN = new AdminUser('Sergey', 30, 'read');
console.log(ADMIN);

//! Readonly, Partial, Required

const arrArray: Array<string> = [];
const arrArray2: string[] = [];

const roArray: ReadonlyArray<string> = [
	'str',
	'str',
	'str',
	'str',
	'str',
	'str',
];

// Readonly
//* запрещает изменять

//? not change array
// roArray[0] = 'str2';

interface IState {
	data: {
		name: string;
	};
	tag: string;
}

// Partial
// * все свойства становятся необязательными (так если бы стоял знак "?")

const state: Partial<IState> = {
	data: {
		name: 'John',
	},
};

// Required
// * все свойства становятся обязательными (удаляет все знаки "?" у свойств)

const strictState: Required<IState> = {
	data: {
		name: 'John',
	},
	// need add tag
	tag: 'tag',
};

function action(state: Readonly<IState>) {
	// state.data = state.data
	// верхний уровень менять нельзя, только чтение, для боле глубокого запрета существуют другие сущности
	state.data.name = 'data';
	// более глубокое изменение возможно
}

// ! Keyof
//* keyof - принимает на вход интерфейс и возвращает ключи этого интерфейса и образует Union тип между литералами свойств

interface ICompany {
	name: string;
	debts: number;
	open: string;
	department: IDepartment[];
	management: {
		owner: string;
	};
}

interface IDepartment {
	[key: string]: string;
}

type TCompanyKeys = keyof ICompany;
const keys: TCompanyKeys = 'debts';

function printDebts<T>(company: T, name: keyof T, debts: keyof T): void {
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

// ! Typeof

type TGoogleKeys = keyof typeof google;
const keys2: TGoogleKeys = 'name';

//! Indexed Access Types
//* получение типа

// Нельзя так мы обращаемся к типу, который определяет получаемый тип, а не к объекту с находящимся в нем типом
// type TCompanyDebtsType = typeof ICompany.debts;
// const debts = 'debts';
// let debts = 'debts' as "debts";
let debts: 'debts' = 'debts';
//* доступ к полю типа
type TCompanyDebtsType = ICompany[typeof debts];
// type TCompanyDebtsType = ICompany['debts'];
type TCompanyOwnerType = ICompany['management']['owner'];
// type TCompanyDepartmentsType = ICompany['department']['development'];
type TCompanyDepartmentsTypes = ICompany['department'][number];
type TTest = ICompany[keyof ICompany];

//! Task

interface IPhone {
	company: string;
	number: number;
}

// IMobilePhone должен наследоваться от IPhone,
// тип свойства companyPartner зависит от свойства company

type TIPhoneCompanyType = IMobilePhone['company'];

interface IMobilePhone extends IPhone {
	size: string;
	companyPartner: TIPhoneCompanyType;
	manufactured: Date;
}

// Типизировать объект phones

const phones: IMobilePhone[] = [
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

interface IPhonesManufacturedAfterDate extends IMobilePhone {
	initialDate: string;
}

// Функция должна отфильтровать массив данных и вернуть новый массив
// с телефонами, выпущенными после даты в третьем аргументе

type TIMobilePhoneKeyType = keyof IMobilePhone;

function filterPhonesByDate<T extends IMobilePhone>(
	phones: T[],
	key: TIMobilePhoneKeyType,
	initial: string
): IPhonesManufacturedAfterDate[] {
	return phones
		.filter(phone => {
			const manufactured = phone[key];
			if (
				manufactured instanceof Date &&
				manufactured.getTime() > new Date(initial).getTime()
			) {
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

//! Conditional Types, infer
// условные типы

// Conditions ? true : false
// someType extends otherType ? true : false

type TExample = 'string' extends 'Hello' ? string : number;
const str3 = 'Hello';
type TExample2 = 'string' extends typeof str3 ? string : number;

type FromUserOrFromBase<T extends string | number> = T extends string
	? IDataFromUser
	: IDataFromBase;

interface IUser<T extends 'created' | Date> {
	created: T extends 'created' ? 'created' : Date;
}

const user3: IUser<'created'> = {
	created: 'created',
};

interface IDataFromUser {
	weights: string;
}

interface IDataFromBase {
	calories: number;
}

function calculateDailyCalories(str: string): IDataFromUser;
function calculateDailyCalories(num: number): IDataFromBase;
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

function calculateDailyCalories<T extends number | string>(
	numOrString: T
): T extends string ? IDataFromUser : IDataFromBase {
	if (typeof numOrString === 'string') {
		const obj: IDataFromUser = { weights: numOrString };
		// return obj as T extends string ? IDataFromUser : IDataFromBase;
		return obj as FromUserOrFromBase<T>;
	}
	const obj: IDataFromBase = { calories: numOrString };
	// return obj as T extends string ? IDataFromUser : IDataFromBase;
	return obj as FromUserOrFromBase<T>;
}

type GetStringType<T extends 'hello' | 'world' | string> = T extends 'hello'
	? 'hello'
	: T extends 'world'
	? 'world'
	: string;

type GetFirstType<T> = T extends Array<infer First> ? First : T;

type Ex = GetFirstType<number>;
type Ex2 = GetFirstType<number[]>;

type ToArray<Type> = Type extends any ? Type[] : never;
type ExArray = ToArray<Ex | string>;

//! Mapped types, +/- операторы
//* Используются только TYPES
type Currencies = {
	usa: 'usd';
	china?: 'cny';
	germany: 'euro';
	readonly kz: 'tenge';
	ukraine: 'uah';
};

type CreateCustomCurr<T> = {
	// readonly [Key in keyof T]: string;
	// [Key in keyof T]?: string;
	-readonly [Key in keyof T]+?: string;
};

type CustomCurr2 = CreateCustomCurr<Currencies>;

// type СопоставимыйТип = {
// 	[произвольныйАйДи in Множество]: Произвольный тип данных
// }

type Keys = 'name' | 'age' | 'email' | 'password';
type User2 = {
	[key in Keys]: string;
};

const alex: User2 = {
	name: 'Alex',
	age: '30',
	email: '5HtBb@example.com',
	password: '123456',
};

// ! Template literal types

type MyAnimation = 'fade' | 'swipe';
type Directions = 'in' | 'out';
type MyAnimation2 = `${MyAnimation}${Capitalize<Directions>}`;

type CreateCustomCurr3<T> = {
	[Key in keyof T as `custom${Capitalize<string & Key>}`]: string;
};

type CustomCurr3 = CreateCustomCurr3<Currencies>;

//! Utility types: Pick, Omit, Extract, Exclude, Record, ReturnType, Parameters, ConstructorParameters
// Исключение Omit
type CurrWithoutKz = Omit<Currencies, 'kz'>;
// Фильтрация по свойствам Pick
type CurrUsaAndUk = Pick<Currencies, 'usa' | 'ukraine'>;
// Удаление из Union Type Exclude
type FadeType = Exclude<MyAnimation, 'swipe'>;
type CountriesWithoutChina = Exclude<keyof Currencies, 'china'>;
// Добавляем только подходящий тип Extract
type SwipeType = Extract<MyAnimation, 'swipe'>;
// Создание нового типа в формате ключ:значение Record
type PlayersName = 'alex' | 'mike';
type GameDataCurr = Record<PlayersName, CustomCurr3>;

const gameData: GameDataCurr = {
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

function calculate(a: number, b: number): number {
	return a * b;
}
// Получение типа возвращаемого функцией объекта
type TCalculateRT = ReturnType<typeof calculate>;
// Получение типа аргументов функции
type TCalculateParamType = Parameters<typeof calculate>;
type PT1 = Parameters<(a: number) => number>;
type PT2 = Parameters<<T>(arg: T) => T>;

// Получение типа аргументов класса
class Example {
	constructor(a: number, b: number) {
		a = a;
		b = b;
	}
}

type T0 = ConstructorParameters<typeof Example>;

//! Task 1

// Необходимо типизировать этот большой объект
// Свойство futureClasses должно быть в зависимости от classes по типу
// Свойства exClients и futureClients тоже должны быть в зависимости от currClients
// ИЛИ все три зависят от общего родителя

// Простыми словами: при добавлении свойства в целевой объект они должны быть
// автоматически добавлены в зависимые (сразу подсказка от TS)

interface IFitnessClubCenter {
	clubName: string;
	location: string;
}

interface IFitnessClasses {
	name: string;
	startsAt: string;
	willStartsAt: string;
	duration: number;
}

type TFitnessClasses = Omit<IFitnessClasses, 'willStartsAt'>;
type TFitnessFutureClasses = Omit<IFitnessClasses, 'startsAt'>;

interface IFitnessClients {
	name: string;
	age: number | string;
	gender: 'male' | 'female';
	timeLeft: string;
	makeCallFor: Date;
}

type TCurrentClient = Omit<IFitnessClients, 'makeCallFor'>;
type TExClient = Omit<IFitnessClients, 'timeLeft'>;
type TFutureClients = Pick<IFitnessClients, 'name' | 'makeCallFor'>;

interface IFitnessClub {
	clubName: string;
	location: string;
	classes: TFitnessClasses[];
	futureClasses: TFitnessFutureClasses[];
	currClients: TCurrentClient[];
	exClients: TExClient[];
	futureClients: TFutureClients[];
}

const fitnessClubCenter: IFitnessClub = {
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

// ! Task 2

interface ISlider {
	container?: string;
	numberOfSlides?: number;
	speed?: 300 | 500 | 700;
	direction?: 'horizontal' | 'vertical';
	dots?: boolean;
	arrows?: boolean;
	animationName?: string;
}

function createSlider({
	container = '',
	numberOfSlides = 1,
	speed = 300,
	direction = 'horizontal',
	dots = true,
	arrows = true,
}: ISlider = {}): void {
	console.log(container, numberOfSlides, speed, direction, dots, arrows);
}

createSlider();

// Необходимо типизировать объект настроек, который будет зависим
// от интерфейса ISlider
// Все поля в нем обязательны для заполнения

type TCustomSliderBase = Required<Omit<ISlider, 'animationName' | 'speed'>>;
interface ICustomSlider extends TCustomSliderBase {
	speed: number;
}
const customSliderOptions: ICustomSlider = {
	container: 'id',
	numberOfSlides: 4,
	speed: 1100,
	direction: 'horizontal',
	dots: true,
	arrows: true,
};

function createCustomSlider(options: ICustomSlider): void {
	if ('container' in options) {
		console.log(options);
	}
}

//! TAsk 3

interface IForm {
	login: string;
	password: string;
}

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

type TValidateForm<T> = {
	[key in keyof T]: { isValid: true } | { isValid: false; errorMsg: string };
};

const validationData: TValidateForm<IForm> = {
	login: { isValid: false, errorMsg: 'At least 3 characters' },
	password: { isValid: true },
};

//! work with AJAX (Promise, async/await, fetching)
// 1. Нельзя зааннотировать все
// 2. проводим базовые проверки по типу Array.isArray(), typeof, instanceof с готовым результатом (сужение типов)
// 3. аннотации не будут лишними (для понимания, что мы ожидаем в выводе и почему проводим конкретные проверки из п.2)

const jsonTest = '{"name" : "Test", "data" : "4"}';
const objFromJson = JSON.parse(jsonTest);

let toDoLIst: ITodo[] = [];

interface ITodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => response.json())
	.then(json => {
		if ('id' in json) {
			toDoLIst.push(json);
		} else if (Array.isArray(json)) {
			toDoLIst = json;
		} else {
			console.log(`${json} is a string`);
		}

		console.log(toDoLIst);
	});

//? Promise это дженерик поэтому передаем ему тип сущности с которой работаем (string, number)
const promise = new Promise<string>((resolve, reject) => {
	resolve('string');
});
promise.then(value => {
	console.log(value.toLowerCase());
});

// Awaited promise аннотирует ожидаемый результат от промиса
type FromPromise = Awaited<Promise<Promise<number>>>;

interface IUserAwait {
	name: string;
}

async function fetchUsersName(): Promise<IUserAwait[]> {
	const users: IUserAwait[] = [{ name: 'John' }];
	return users;
}

const users = fetchUsersName();
//? ReturnType - возвращает тип возвращаемого значения функции
type PFetchUsersType = Awaited<ReturnType<typeof fetchUsersName>>;

//? до стандарта TS 4.5
type PUnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;
type PFetchDataReturnType = PUnwrappedPromise<
	ReturnType<typeof fetchUsersName>
>;

type Smth = Awaited<boolean | Promise<number>>;
// boolean | number
