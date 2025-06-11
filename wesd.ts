function foo<T>(arr: T[], callback: (el: T, i: number, arr: T[]) => T) {
  return arr.reduce((acc: T[], value, index) => {
    const result = callback(value, index, arr);
    acc.push(result);
    return acc;
  }, []);
}

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = foo(arr2, (el) => el * 2);
console.log(result);
