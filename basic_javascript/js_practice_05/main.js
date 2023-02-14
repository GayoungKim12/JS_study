const obj = {};

let result = '';

try {
    result = obj.property.a;
} catch (error) {
    result = '모름';
    console.dir(error);
} finally {
    console.log(`result = ${result}`);
}

try {
    throw new Error('커스텀 에러');
} catch(error) {
    console.dir(error);
}