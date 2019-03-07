const errores = require('./src/handling');

try {
    errores.errorFirstCallbackWrong();
} catch (err) {
    console.log(err)
}