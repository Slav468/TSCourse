const str = 'sdffdgfdgf';
console.log(str);

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
