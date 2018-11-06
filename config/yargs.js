const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime tabla de multiplicar en consola', opts)
    .command('crear', 'genera un archivo con la tabla de multiplicar', opts)
    .argv;

module.exports = {
    argv
};