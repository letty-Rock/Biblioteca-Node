const chalk = require('chalk');

console.log(chalk.blue('Bem vindos'));

const paragrafo = 'Texto retornado por uma função';
function texto(string) {
    return string;
}
console.log(texto(paragrafo));