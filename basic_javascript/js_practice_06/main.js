// 비동기적 현상
const A = () => {
    console.log(`2초 후 출력되는 텍스트`);
}
const async = () => {
    setTimeout(() => {
        console.log('2초 끝!');
    }, 2000);
    A();
}

async();// A함수가 실행된 후 setTimeout 함수의 응답을 받음

// Callback 함수
const B = (sec) => {
    console.log(`${sec}초 후 출력되는 텍스트`);
    console.log('Callback 함수 END')
}

const setTimeoutWithCallback = (callback, delay) => {
    setTimeout(() => {
        const delaySec = Number(delay) / 1000;
        console.log(`${delaySec}초 끝!`);
        callback(delaySec);
    }, delay);
}

setTimeoutWithCallback(B, 4000);

// Promise 함수

const C = (sec) => {
    console.log(`${sec}초 후 출력되는 텍스트`);
}
const setTimeoutWithPromise = (delay) => 
    new Promise ((resolve) => {
        setTimeout(() => {
            const delaySec = Number(delay) / 1000;
            console.log(`${delaySec}초 끝!`);
            resolve(delaySec);
        }, delay); 
})

setTimeoutWithPromise(6000)
.then((sec) => {
    console.log('setTimeoutWithPromise 함수 성공!');
    return C(sec);
})
.then(() => {
    console.log('C 함수 성공!');
})
.finally (() => {
    console.log('Promise 함수 END');
})

// async, await 이용

const setTimeoutWithAsync = (delay) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            const delaySec = Number(delay) / 1000;
            console.log(`${delaySec}초 끝!`);
            resolve(delaySec);
        }, delay); 
    });
}
const D = (sec) => {
    console.log(`${sec}초 후 출력되는 텍스트`);
    console.log('Async 함수 END');
}
const asyncFunc = async (delay) => {
    const sec = await setTimeoutWithAsync(delay);
    D(sec);
}

asyncFunc(8000);
