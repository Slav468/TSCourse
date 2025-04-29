interface ICar {
	fuel: string;
	open: boolean;
	freeSeats: number;
}

class myCar implements ICar {
	fuel: string = '50%';
	open: boolean = true;
	freeSeats: number;

	isOpen(value: string) {
		return this.open ? 'open' : `close ${value}`;
	}
}

// function checkAmountOfFuel(target: any, context: ClassMethodDecoratorContext) {
// 	return function (this: any, ...args: any[]) {
// 		console.log(this.fuel);
// 		return target.apply(this, args);
// 	};
// }

function checkAmountOfFuel<T, A extends any[], R>(
	target: (this: T, ...args: A) => R,
	context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
) {
	return function (this: T, ...args: A): R {
		// console.log(this.fuel);
		console.log(`${context.name as string} был запущен`);
		return target.apply(this, args);
	};
}

function changeDoorStatus(status: boolean) {
	console.log('door init');
	return <T extends { new (...args: any[]): {} }>(
		target: T,
		context: ClassDecoratorContext<T>
	) => {
		console.log('door changed');
		return class extends target {
			open = status;
		};
	};
}

function changeAmountOfFuel(amount: number) {
	console.log('fuel init');
	return <T extends { new (...args: any[]): {} }>(
		target: T,
		context: ClassDecoratorContext<T>
	) => {
		console.log('fuel changed');
		return class extends target {
			fuel = `${amount}%`;
		};
	};
}



const car = new myCar();
console.log(car.isOpen('checked'));
