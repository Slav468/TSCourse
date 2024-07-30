var str = 'str';
console.log(str);
// Data types
var userId = 'Patrick'; // String
var number = NaN; // Number infinity, 1, -1, 3e10
var boolean = false; // Boolean true or false
var isBirthdayData = true;
var ageData = 36;
var userNameData = 'John';
// Type Any
// Parse = any
var userData = '{"isBirthdayData: boolean":"true", "ageData: number":"36", "userNameData: string":"John" }';
var userObj = JSON.parse(userData);
// let num;
// Empty = any
var salary;
salary = 5000;
//** */ Task
// ---------------------------------------------------------------
var currRate = '1.05';
var fetchCurr = function (response) {
    var data = JSON.parse(response);
    return data;
};
function transferEurToUsd(available, amount, commission) {
    if (available) {
        var res = fetchCurr(currRate) * amount * commission;
        console.log(res);
    }
    else {
        console.log('Сейчас обмен недоступен');
    }
}
transferEurToUsd(true, 500, 1.05);
// ----------------------------------------------------------------
// Never
var createError = function (msg) {
    throw new Error(msg);
};
function logBrtMsg(isBirthday, userName, age) {
    if (isBirthday) {
        return "Congrats ".concat(userName.toUpperCase(), ", ").concat(age + 1);
    }
    else {
        return createError('Error');
    }
}
logBrtMsg(isBirthdayData, userNameData, ageData);
// null
var test = null;
var test2 = null;
// const test11: string = null; // Error
// const test22: number = null; // Error
// undefined
var test3 = undefined;
var test4 = undefined;
// const test33: string = undefined; // Error
// const test44: any = undefined;// Error
