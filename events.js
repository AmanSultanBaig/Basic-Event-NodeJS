const event = require('events');
const eventEmitter = new event.EventEmitter();

let eventHandler = () => {
  console.log('My Event Handler is Triggered!')
}

eventEmitter.on('MyEvent',eventHandler);
eventEmitter.emit('MyEvent');
