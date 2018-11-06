//requireds
// const fs = require('fs');

const argv = require('./config/yargs')
    .argv;
var colors = require('colors');



const { crearArchivo, listarTabla } = require(`./Archivos multiplicar/multiplicar`);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err));
        break
    default:
        console.log('no existe el comando');
        break;

}




// let data = '';
// for (let i = 1; i <= 10; i++) {
//     data += (`${base} * ${i} =  ${base * i} \n`);
// }

// fs.writeFile(`Archivos tablas/tabla- ${base} .txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo base - ${base} ha sido creado!`);
// });

// console.log(multiplicar);

// console.log(process.argv);

// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);
//