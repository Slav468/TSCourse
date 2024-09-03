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
// * элементы строго определены при их типизировании

const userDataTuple: [boolean, number, string] = [true, 1, 'string'];

//? расширение кортежей через spread/rest оператор
const userDataTuple2: [boolean, number, ...string[]] = [true, 1, 'string'];
const userDataTuple3: [boolean, ...number[], string] = [true, 1, 'string'];
const userDataTuple4: [...boolean[], number, string] = [true, 1, 'string'];

// ! Union (объединение типов)\
// * string | number - это строка или число (Union)
const message: string | number = 'Hello';
const messages: string[] | number[] = ['a', 'b', 'c'];

// ! Narrowing (сужение типов)
// * вручную проверили через условие - это и есть сужение типов
// function printMsg(msg: string | number): void {
// 	if (typeof msg === 'string') {
// 		// тут msg это строка
// 		console.log(msg.toUpperCase());
// 	} else {
// 		// тут msg это число
// 		console.log(msg.toExponential());
// 	}
// 	// тут msg это либо строка, либо число (Union)
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
) => {
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
	[key: string]: string;
}

const style: IStyles = {
	position: 'absolute',
	top: '20px',
	left: '20px',
};
