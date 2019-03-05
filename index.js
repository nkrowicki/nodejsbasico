const call = require("./src/call");

// call.withCallback("pedrito", call.sync);
call.withPromise("pedr qweo").
  then(a => console.log(a));
