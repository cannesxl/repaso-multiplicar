//requires


const {argv} = require('./config/yargs');

const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];



switch (comando) {
    case 'listar':
        console.log('======LISTADO======');
        listarTabla(argv.base, argv.limite)
            .then( (tabla) => console.log(tabla))
            .catch((err) => console.log(err));
        break;
    case 'crear':
        console.log('===CREANDO FICHERO=====');
        crearArchivo(argv.base, argv.limite)
            .then( (archivo) => console.log(`Archivo creado: ${ archivo }`))
            .catch( (err) => console.log(err));
        break;
    default:
        console.log('Comando no desconocido');
        break;
}


