
const opts = {
    base:{
        demand: true, //obligatorio
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
            .command('listar', 'Imprime en cosola la tabla de multiplicar', opts)
            .command('crear','Crea un txt con la tabla de multiplicar',opts)
            .help()
            .argv;


module.exports = {
    argv
}