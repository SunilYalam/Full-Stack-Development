const EventTrigger = require('events');

const eventTrigger = new eventTrigger();

eventTrigger.on('subscribe', () => {
    console.log('subscribe, college Wallah');
});

eventTrigger.emit('subscribe');