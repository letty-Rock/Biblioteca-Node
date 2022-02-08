const chalk = require('chalk');
const fs = require('fs');


function pegaArquivo(caminhoDoArquivo) {

 fs.readFile(caminhoDoArquivo, encoding, (_, texto) =>{
     console.log(chalk.green(texto));
 })
}
pegaArquivo('./arquivos/texto1.md');