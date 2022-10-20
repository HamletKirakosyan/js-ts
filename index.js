/* console.log('barev dzez');

const letters: Array<string> = ['barev', 'dzez'];
const flag: boolean = false;
const obj: object = {
    name: "Vardan"
}

const str: string = 'Barev dzez';

function log(str: string): void {
    console.log(str);
    
}; */
/* function findIndex(arr: Array<number>, func: Function) {
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i])) {
            return i;
        }
    };
    return -1;
}
 console.log(findIndex([1, 2, 3, 4, 55, 76], function(val: number) {
    return val > 2;
})); */
/*  let find = function(arr: Array<number>, func: Function) {
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i])) {
            return arr[i];
        }
    }
}

console.log(find([1, 2, 3, 4, 55, 76], function(val: number) {
    return val > 55;
})); */
var forEach = function (arr, func) {
    for (var i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
};
console.log(forEach([3, 5, 2, 66, 54, 32], function (val, i, arr) {
    return (val + " at " + i + " is some value of this arr " + arr);
}));
/*let some = function(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i], i, arr)) {
            return true;
        }
    };
    return false;
}

console.log(some(['Save', 'Mona', 'Lioto', 'Liza'], function(val, i, arr) {
    return val === 'Bony';
}));

let response = [3,4,5,6].some(function(val, i, arr) {
    return val === 7;
});

console.log(response);


 let join = function(arr, func) {
    let str = '';
    for(let i = 0; i < arr.length; i++) {
        str = str + arr[i] + func();
    };
    return str;
}

console.log(join([2, 'erel', '4', 'tony', 'Ol'], function(symbol) {
    
    return '/';
}));

let arrToJoin = [2, 'erel', '4', 'tony', 'Ol'].join('/');
console.log(arrToJoin);  */
