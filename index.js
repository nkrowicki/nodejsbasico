const greet = require('./src/greet');

greet.emit('call', 'jorge', (name) => {
    if (1 < 2) console.log(`es ${name}`)
});