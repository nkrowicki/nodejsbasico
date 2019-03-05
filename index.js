const call = require("./src/call");

// call.withPromise("pedro", "alfonso").then(res => console.log(`Hola ${res}`));

async function x() {
  let resultado = await call.withPromise("pedro", "rodriguez");
  console.log(`Hola desde x ${resultado}`);
}

x();

call.greet("hola");
