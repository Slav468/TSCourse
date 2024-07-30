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
// ---------------------------------------------------------------
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
// ----------------------------------------------------------------
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

// Not typing  in Object
const userData = {
	isBirthdayData: true,
	ageData: 40,
	userNameData: 'Jack',
};

// Typing object as function arguments

function logBrhMsg(data: {
	isBirthdayData: boolean;
	ageData: number;
	userNameData: string;
}): string {
	if (data.isBirthdayData) {
		return `Congrats ${data.userNameData.toUpperCase()}, age: ${
			userData.ageData
		}`;
	} else if (!data.isBirthdayData) {
		return `Too bad`;
	} else {
		return `Error`;
	}
}

logBrhMsg(userData);
