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

/* function forEach(arr: Array<unknown>, func: Function) {
    for(let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
}

console.log(forEach([3, 5, 2, 66, 54, 32], function(val: number, i: number, arr: Number[]) {
    return `${(val: number)} + " at " + ${(i: number)} + " is some value of this arr " + ${(arr: Number[])}`
}
)); */

/* let some = function(arr: Array<unknown>, func: Function) {
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i], i, arr)) {
            return true;
        }
    };
    return false;
}

console.log(some(['Save', 'Mona', 'Lioto', 'Liza'], function(val: string, i: number, arr: string[]) {
    return val === 'Bony';
}));

let response: boolean = [3,4,5,6].some(function(val, i, arr) {
    return val === 7;
});

console.log(response);  */


/* let join = function(arr: Array<unknown>, func: Function) {
    let str: string = '';
    for(let i = 0; i < arr.length; i++) {
        str = str + arr[i] + func();
    };
    return str: String;
}

console.log(join([2, 'erel', '4', 'tony', 'Ol'], function() {
    
    return '/';
})); */

 
