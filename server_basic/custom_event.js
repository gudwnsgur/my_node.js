var EventEmitter = require('events');

var custom_obj = new EventEmitter();

custom_obj.on('call', () => {
    console.log('call!!');
})

custom_obj.emit('call');