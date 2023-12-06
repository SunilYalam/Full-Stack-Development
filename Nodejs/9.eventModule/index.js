const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const eventHandler = () => {
  console.log('Event handler is triggered!');
};

eventEmitter.on('customEvent', eventHandler);

eventEmitter.emit('customEvent'); 

eventEmitter.removeListener('customEvent', eventHandler);

eventEmitter.emit('customEvent'); 