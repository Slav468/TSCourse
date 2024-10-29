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

// Утверждение типов (Type assertions)
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

const box = document.querySelector('.box') as HTMLElement;
// box.style
// box?.classList;

const body: HTMLElement = document.body;

// const input = document.querySelector('input') as HTMLInputElement;
const input = <HTMLInputElement>document.querySelector('input');
// In React don`t work because thi is fragment jsx
const someNumber: number = +input.value;
console.log(someNumber * 2);
