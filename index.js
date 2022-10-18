



const a = 37449863348;

function findMissingNumbers(num) {
    let lastNumber;
    let missNumber;
    let arr = [];
    while(num !== 0) {
        lastNumber = num % 10;
        arr.push(lastNumber);
        num = Math.floor(num / 10);
    } 
    console.log(arr);

    let newArr = [];

    outerblock: for(let i = 1; i <= 9; i++) {
        block: for(let j = 0; j < arr.length; j++) {
            if(arr[j] === i) {
                
                break block;
             } else {
                newArr.push(i);
             }   
        }

    }
    console.log(newArr);
};


findMissingNumbers(a); 

 function split(string, func) {
    if(typeof string === "string") {
        let arr = [];
        let j = 0;
        let str = "";
      

};
};
split("mycar is a very good car", function() {
    return " ";
});  

/* let findIndex = function(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i])) {
            return i;
        }
    };
    return -1;
}

console.log(findIndex([1, 2, 3, 4, 55, 76], function(val) {
    return val > 2;
}));

let find = function(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i])) {
            return arr[i];
        }
    }
}

console.log(find([1, 2, 3, 4, 55, 76], function(val) {
    return val > 55;
}));

let forEach = function(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
}

console.log(forEach([3, 5, 2, 66, 54, 32], function(val, i, arr) {
    console.log(val + " at " + i + " is some value of this arr " + arr);
}));


let some = function(arr, func) {
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
console.log(arrToJoin); 



 const b = {
    name: "Joe",
    surName: "Shmoe",
    getFullName: {
        gyui: "Norik",
        lastName: "Shmoe"
    }
};

const a = {
    name: "Joe",
    surName: "Shmoe",
    getFullName: {
        gyui: "Norik",
        lastName: "Shmoe"
    }
};


let a2 = function(obj) {
    let newObj = {};
    const objKeys = Object.keys(obj);
    const objValues = Object.values(obj);

    
        Object.keys(obj).forEach(function(key) {
            newObj[key] = objKeys[key];
        })
        Object.values(obj).forEach(function(value) {
            newObj[value] = objValues[value];
        })

    return newObj;
};

console.log(a2(b));




let indexOf = function(str, searchText, func) {
                let text = '';
                for(let i = 0; i < str.length; i++) {
                    for(let k = 0; k < searchText.length; k++) {
                        if(str[i] === searchText[k]) {
                            text = text + str[i];
                            if(text === searchText) {
                                return (i - searchText.length + 1);
                            }
                        }



                    }
            
        
    }
}

console.log(indexOf('I love youkill you', 'ove'));
