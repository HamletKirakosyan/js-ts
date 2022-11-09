const obj = {
    one: 2,
    two: 3,
    three: 4,
    five: 6,
    six: 8,
    seven: 3,

    [Symbol.iterator]() {
        return {
            next: () => {
                let values: number[] = Object.values(this);
                let index: number = -1;
                index++;
                
                let done: boolean = [index] < [values.length - 1] ? false : true;
                console.log(this.seven);
                
                if(index === 0) {
                     return {
                            value: 0,
                            done: done
                        }
                } else if(index === 1) {
                    return {
                        value: values[0],
                        done: done
                    }
                    } else {
                        return {
                            value: values[index -2] + values[index - 1],
                            done: done
                        }
                    }
                }
               
            }
        }
    }


for(let item of obj) {
    console.log(item);
    
}
