const cp = require('child_process');

function execCommand(command) {
    cp.exec(command, (err, stdout, stderr) => {
        if (err) {
            console.log(`Error: ${err}`)
        }
        if (stdout) {
            console.log(`Standar out: \n ${stdout}`)
            console.log(`Standar err: \n ${stderr}`)

        }
    })
}

// execCommand('ls');
execCommand('node ./src/script.js --base=5')