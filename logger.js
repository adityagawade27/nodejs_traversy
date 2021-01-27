const EventEmitter = require('events');
const Person = require('./person');
const uuid = require('uuid');

class Logger extends EventEmitter{
    log(msg) {
        // Call event 
        this.emit('message', {id: uuid.v4(), msg});
    }
}



const person1 = new Person('John Doe', 30);

person1.greeting();

const logger = new Logger();

logger.on('message', data => console.log('Called Listener:', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Help!');