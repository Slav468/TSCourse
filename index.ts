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
