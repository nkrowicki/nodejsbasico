const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.close();

const q = [
    "Cual es tu primer nombre?",
    "Cual es tu primer apellido?",
    "Cual es tu edad? "
]

const AskQuestion = (rl, question) => {
    return new Promise((resolve, rej) => {
        rl.question(question, answer => {
            resolve(answer)
        })
    })
}

const Ask = (questions) => {
    return new Promise(async resolve => {
        let results = [];
        for (let i = 0; i < questions.length; i++) {
            const result = await AskQuestion(rl, questions[i])
            results.push(result)
        }
        resolve(results)
    })
}

Ask(q)
    .then(q => {
        console.log(typeof q)
        console.log(q)
        console.log(`Hola ${q[0]} ${q[1]}, tu edad es: ${q[2]}`)
    })