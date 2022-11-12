function job() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 500, 'Hello world 1');
    });
}

async function test() {
    let message = await job();
    console.log(message);

    return 'Hello world 2';
}

test().then(function(message) {
    console.log(message);
});
//====================================//
function job() {
    return new Promise(function(resolve, reject) {
        setTimeout(reject, 500, 'Error happened');
    });
}
async function test() {
    try {
        let message = await job();
        console.log(message);

        return 'Hello world';
    } catch (error) {
        console.error(error);

        return 'Error happened during test';
    }
}
//================================//
test().then(function(message) {
    console.log(message);
});


async function job() {
    return 'test';
}

async function main() {
    console.log(await job());
}

main();
//============================//
async function job() {
    return 'test';
}

async function main() {
    console.log( job());
}

main();

//============================//
async function job() {
    throw new Error('error is happened');
}

job(); 
