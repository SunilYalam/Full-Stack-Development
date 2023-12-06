const setMaximum = require('events');

const evenMaximum = new evenMaximum();

const currentMaxListeners = evenMaximum.getMaxListeners();

console.log('current Max', currentMaxListeners);

const newMaxListeners = 51;
evenMaximum.setMaxListeners(newMaxListeners);
console.log('New Max', evenMaximum.getMaxListeners());