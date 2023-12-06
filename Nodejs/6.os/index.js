const os = require('os');

const osName = os.type();
const osRelease = os.release();

console.log('Os name' +osName);
console.log('Os release' +osRelease);