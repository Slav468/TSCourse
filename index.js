var _a;
var str = 'str';
console.log(str);
// Data types
var userId = 'Patrick'; // String
var number = NaN; // Number infinity, 1, -1, 3e10
var boolean = false; // Boolean true or false
var isBirthdayData = true;
var ageData = 36;
var userNameData = 'John';
// TYPE Any
// Parse = any
var userDataJson =
	'{"isBirthdayData: boolean":"true", "ageData: number":"36", "userNameData: string":"John" }';
var userObj = JSON.parse(userDataJson);
// let num;
// Empty = any
var salary;
salary = 5000;
//! Task
// ---------------------------------------------------------------//
var currRate = '1.05';
var fetchCurr = function (response) {
	var data = JSON.parse(response);
	return data;
};
function transferEurToUsd(available, amount, commission) {
	if (available) {
		var res = fetchCurr(currRate) * amount * commission;
		console.log(res);
	} else {
		console.log('Сейчас обмен недоступен');
	}
}
transferEurToUsd(true, 500, 1.05);
// ----------------------------------------------------------------//
//! Task
// TYPE Never
var createError = function (msg) {
	throw new Error(msg);
};
function logBrtMsg(isBirthday, userName, age) {
	if (isBirthday) {
		return 'Congrats '.concat(userName.toUpperCase(), ', ').concat(age + 1);
	} else {
		return createError('Error');
	}
}
logBrtMsg(isBirthdayData, userNameData, ageData);
// TYPE null
var test = null;
var test2 = null;
// const test11: string = null; // Error
// const test22: number = null; // Error
// TYPE undefined
var test3 = undefined;
var test4 = undefined;
// const test33: string = undefined; // Error
// const test44: any = undefined;// Error
// TYPE Symbol
var id1 = Symbol('symbol1');
var id2 = Symbol('symbol1');
var data = ((_a = {}), (_a[id1] = 1), (_a[id2] = 2), _a);
console.log(data[id2]);
// TYPE BigInt
var num1 = 1n;
var num2 = 2n;
console.log(num1 + num2);
// TYPE Object
//? Not typing  in Object
var userData = {
	isBirthdayData: true,
	ageData: 40,
	userNameData: 'Jack',
	messagesData: {
		error: 'error',
	},
};
// Typing object as function arguments
//? Destructuring object
function logBrhMsg(_a) {
	var isBirthdayData = _a.isBirthdayData,
		ageData = _a.ageData,
		userNameData = _a.userNameData,
		error = _a.messagesData.error;
	if (isBirthdayData) {
		return 'Congrats '
			.concat(userNameData.toUpperCase(), ', age: ')
			.concat(ageData);
	} else if (!isBirthdayData) {
		return 'Too bad';
	} else {
		return error;
	}
}
logBrhMsg(userData);
// Typing array
//? string[] читается как массив содержащий стоки (состоящий из таких типов данных, могут быть другие типы данных)
var num4 = [1, 2, 3, 4];
var departments = ['dev', 'design', 'marketing'];
var department = departments[0];
// departments.push();
var report = departments
	.filter(function (d) {
		return d !== 'dev';
	})
	.map(function (d) {
		return ''.concat(d, ' - done!');
	});
//! ТАК ДЕЛАТЬ НЕ НУЖНО (но можно)
var anyData = [1, 'string', false];
//? number[][] читается как массив массивов (матрица)
var num3 = [
	[1, 2, 3],
	[1, 2, 3],
];
// Destructuring Array
var dev = report[0];
console.log(dev);
//! Task
// ----------------------------------------------------------------//
var electricityUserData = {
	readings: 95,
	units: 'kWt',
	mode: 'double',
};
var waterUserData = {
	readings: 3,
	units: 'm3',
};
var elRate = 0.45;
var wRate = 2;
var monthPayments = [0, 0]; // [electricity, water]
var calculatePayments = function (
	// destructuring object
	_a,
	wData,
	elRate,
	wRate
) {
	var readings = _a.readings,
		units = _a.units,
		mode = _a.mode;
	if (mode === 'double' && readings < 50) {
		monthPayments[0] = readings * elRate * 0.7;
	} else {
		monthPayments[0] = readings * elRate;
	}
	monthPayments[1] = wData.readings * wRate;
};
calculatePayments(electricityUserData, waterUserData, elRate, wRate);
var sendInvoice = function (
	// destructuring array
	_a,
	electricityUserData,
	waterUserData
) {
	var el = _a[0],
		water = _a[1];
	var text = '    Hello!\n    This month you used '
		.concat(electricityUserData.readings, ' ')
		.concat(electricityUserData.units, ' of electricity\n    It will cost: ')
		.concat(el, '\u20AC\n\n    This month you used ')
		.concat(waterUserData.readings, ' ')
		.concat(waterUserData.units, ' of water\n    It will cost: ')
		.concat(water, '\u20AC');
	return text;
};
var invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);
// ----------------------------------------------------------------//
//! Task
// ! Tuples (кортежи)
//* Запись набора данных в строгом порядке,  кортеж технически - это массив.
// * элементы строго определены при их аннотации
var userDataTuple = [true, 1, 'string'];
//? расширение кортежей через spread/rest оператор
var userDataTuple2 = [true, 1, 'string'];
var userDataTuple3 = [true, 1, 'string'];
var userDataTuple4 = [true, 1, 'string'];
// ! Union (объединение типов)
// * string | number - это строка или число (Union)
var message = 'Hello';
var messages = ['a', 'b', 'c'];
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
		msg.forEach(function (item) {
			return console.log(item);
		});
	} else {
		console.log(msg.toFixed);
	}
}
printMsg(4);
var printReadings = function (a, b) {
	if (typeof a === 'number' && typeof b === 'number') {
		console.log(a + b);
	}
};
var printReadings2 = function (a) {
	console.log(a.slice(0, 3));
};
function checkReadings(readings) {
	if ('system' in readings) {
		console.log(readings.system);
	} else {
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
var hello = 'Hello';
// выдает ошибку, т.к. не может быть ничего другого кроме 'Hello'
// hello = '';
var port3000 = 3000;
var port3001 = 3001;
var serverConfig = {
	protocol: 'https',
	port: 3000,
};
var backupConfig = {
	protocol: 'http',
	port: 3001,
	role: 'admin',
};
var startServer = function (protocol, port) {
	if (port === port3000 || port === port3001) {
		console.log('Server started on '.concat(protocol, '://').concat(port));
		return 'Server started';
	} else {
		console.log('Error');
		return "Error: Server can't be started";
	}
};
startServer('http', port3000);
startServer(serverConfig.protocol, serverConfig.port);
function createAnimation(
	id,
	animationName,
	timingFunc,
	duration,
	iterationCount
) {
	if (timingFunc === void 0) {
		timingFunc = 'ease';
	}
	if (iterationCount === void 0) {
		iterationCount = 'infinite';
	}
	// const elem = document.querySelector(`#${id}`) as HTMLElement;
	console.log(
		''
			.concat(animationName, ' ')
			.concat(duration, 'ms ')
			.concat(timingFunc, ' ')
			.concat(iterationCount)
	);
	// if (elem) {
	// elem.style.animation = `${animationName} ${duration}ms ${timingFunc} ${iterationCount}`;
	// }
}
createAnimation('id', 'animation', 'ease', 1000, 'infinite');
var serverCOfigInterface = {
	protocol: 'http',
	port: 3000,
	log: function (msg) {
		console.log(msg);
	},
	role: 'user',
	// добавляем свойство
	domain: 'com',
};
var startServerInterface = function (protocol, port) {
	if (port === port3000 || port === port3001) {
		console.log('Server started on '.concat(protocol, '://').concat(port));
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
var style = {
	position: 'absolute',
	top: '20px',
	left: '20px',
};
// главный объект со всеми данными, должен подходить под формат TotalWarehouse
var totalData = {
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
var printReport = function (data) {
	var result = Object.entries(data)
		.filter(function (item) {
			return item[1] === 'empty';
		})
		.reduce(function (res, item) {
			return ''.concat(res, ' ').concat(item[0], ',');
		}, '');
	if (result.trim().length) {
		return 'We need this items:'.concat(result.slice(0, -1));
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
var number10;
number = 10;
var userDataForInterface =
	'{"isBirthdayData: boolean":"true", "ageData: number":"36", "userNameData: string":"John" }';
var userDataWithoutAny = JSON.parse(userDataForInterface);
// вывод типов даст boolean
var isOkay = true;
// вывод типов даст true
var isOkay2 = true;
var movement = false;
if (isOkay) {
	movement = 'moving';
}
var arr = ['hello', 3, true, [true, 1]];
var propertyObject = {
	login: 'login',
	password: 'password',
	age: 50,
};
var dbName;
sendUserData(propertyObject, 'Black');
console.log(dbName);
function sendUserData(obj, dbName) {
	var _a, _b;
	dbName = 'Alex';
	console.log(
		(_b = (_a = obj.parents) === null || _a === void 0 ? void 0 : _a.father) ===
			null || _b === void 0
			? void 0
			: _b.charAt(0),
		dbName === null || dbName === void 0 ? void 0 : dbName.toLowerCase
	);
}
var basicPorts = [3000, 3001, 5000];
var AnimTimingFunc;
(function (AnimTimingFunc) {
	AnimTimingFunc['EASE'] = 'ease';
	AnimTimingFunc['LINEAR'] = 'linear';
	AnimTimingFunc['EASE_IN'] = 'ease-in';
	AnimTimingFunc['EASE_OUT'] = 'ease-out';
	AnimTimingFunc['EASE_IN_OUT'] = 'ease-in-out';
})(AnimTimingFunc || (AnimTimingFunc = {}));
var AnimTimingFunc2;
(function (AnimTimingFunc2) {
	AnimTimingFunc2[(AnimTimingFunc2['EASE'] = 2)] = 'EASE';
	AnimTimingFunc2[(AnimTimingFunc2['LINEAR'] = 3)] = 'LINEAR';
	AnimTimingFunc2[(AnimTimingFunc2['EASE_IN'] = 4)] = 'EASE_IN';
	AnimTimingFunc2[(AnimTimingFunc2['EASE_OUT'] = 5)] = 'EASE_OUT';
	AnimTimingFunc2[(AnimTimingFunc2['EASE_IN_OUT'] = 14)] = 'EASE_IN_OUT';
})(AnimTimingFunc2 || (AnimTimingFunc2 = {}));
function frame(elem, dir, tFunc) {
	if (dir === 2 /* Direction.RIGHT */) {
		console.log(tFunc);
	}
}
frame('elem', 2 /* Direction.RIGHT */, AnimTimingFunc.EASE);
//! Unknown (неизвестное)
// сущность неизвестного типа
var some;
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
var dataParse = saveParse(
	'{"isBirthdayData":true, "ageData":36, "userNameData":"John" }'
);
function transferData(d) {
	if (typeof d === 'object' && d) {
		console.log(d);
	} else {
		console.error('Error');
	}
}
transferData(dataParse);
//! Запросы типов
//  data: typeof dataFromControl - проверка на соответствие типов
var dataFromControl = {
	water: 200,
	el: 350,
};
function checkReadingsData(data) {
	var dataFromUser = {
		water: 200,
		el: 350,
	};
	if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
		return true;
	} else {
		return false;
	}
}
var PI = 3.14;
var PIClone;
// ----------------------------------------------------------------//
// ! Task
// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
var TypesOfMedia;
(function (TypesOfMedia) {
	TypesOfMedia['Video'] = 'video';
	TypesOfMedia['Audio'] = 'audio';
})(TypesOfMedia || (TypesOfMedia = {}));
// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
var FormatsOfMedia;
(function (FormatsOfMedia) {
	FormatsOfMedia['MP4'] = '.mp4';
	FormatsOfMedia['MOV'] = '.mov';
	FormatsOfMedia['MKV'] = '.mkv';
	FormatsOfMedia['FLV'] = '.flv';
	FormatsOfMedia['WEBM'] = '.webM';
})(FormatsOfMedia || (FormatsOfMedia = {}));
function playMedia(_a) {
	var _b =
			_a === void 0
				? {
						name: 'example',
						type: TypesOfMedia.Video,
						format: FormatsOfMedia.MKV,
				  }
				: _a,
		name = _b.name,
		type = _b.type,
		format = _b.format,
		subtitles = _b.subtitles,
		marks = _b.marks;
	var marksLog;
	if (Array.isArray(marks)) {
		marksLog = marks.join(', ');
	} else if (typeof marks === 'string') {
		marksLog = marks;
	} else {
		marksLog = 'Unsupported type of marks';
	}
	console.log(
		'Media '
			.concat(name)
			.concat(format, ' is ')
			.concat(type, '\n    Marks: ')
			.concat(marksLog, '\n    Subtitles: ')
			.concat(subtitles !== null && subtitles !== void 0 ? subtitles : 'none')
	);
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
var fetchData2 = function (url, method) {
	console.log('Fetched!');
};
var reqOptions = {
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
var num = 5;
var strNum = num.toString();
var str2 = '5';
var bum2 = Number(str2);
var department2 = {
	name: 'web-dev',
	budget: 50000,
};
function transformDept(department, amount) {
	return {
		name: department.name,
		projectBudget: amount,
	};
}
var mainProject = transformDept(department2, 100000);
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
		var rect = {
			a: a,
			b: b,
			area: a * b,
		};
		return rect;
	} else {
		var square = {
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
	AnimalStatus['AVAILABLE'] = 'available';
	AnimalStatus['NOT_AVAILABLE'] = 'not available';
})(AnimalStatus || (AnimalStatus = {}));
function isAvailable(res) {
	if (res.status === AnimalStatus.AVAILABLE) {
		return true;
	} else {
		return false;
	}
}
function checkAnimalData(animal) {
	if (isAvailable(animal)) {
		return animal.data;
	} else {
		return ''
			.concat(animal.data.message, ', you can try in ')
			.concat(animal.data.nextUpdateIn);
	}
}
//! TASK DOM practice
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

var forms = document.querySelectorAll('form');
var email = document.querySelector('#email');
var title = document.querySelector('#title');
var text = document.querySelector('#text');
var checkbox = document.querySelector('#checkbox');
var formData = {
	email: '',
	title: '',
	text: '',
	checkbox: false,
};
for (var _i = 0, forms_1 = forms; _i < forms_1.length; _i++) {
	var form = forms_1[_i];
	form.addEventListener('submit', function (e) {
		var _a, _b, _c, _d;
		e.preventDefault();
		formData.email =
			(_a = email === null || email === void 0 ? void 0 : email.value) !==
				null && _a !== void 0
				? _a
				: '';
		formData.title =
			(_b = title === null || title === void 0 ? void 0 : title.value) !==
				null && _b !== void 0
				? _b
				: '';
		formData.text =
			(_c = text === null || text === void 0 ? void 0 : text.value) !== null &&
			_c !== void 0
				? _c
				: '';
		formData.checkbox =
			(_d =
				checkbox === null || checkbox === void 0
					? void 0
					: checkbox.checked) !== null && _d !== void 0
				? _d
				: false;
		if (validateFormData(formData)) {
			checkFormData(formData);
		}
	});
}
function validateFormData(data) {
	// Если каждое из свойств объекта правдиво...
	if (
		Object.values(data).every(function (value) {
			return value;
		})
	) {
		return true;
	} else {
		console.log('Please, complete all fields');
		return false;
	}
}

function checkFormData(data) {
	var email = data.email;
	var emails = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com'];
	// Если email совпадает хотя бы с одним из массива
	if (emails.includes(email)) {
		console.log('This email is already exist');
	} else {
		console.log('Posting data...');
	}
}
