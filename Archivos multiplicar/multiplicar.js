//requireds
const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log(`==========================`.green);
    console.log(`TABLA DE ${base}`.red);
    console.log(`==========================`.green);
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            return reject(`El valor introducido ${base} no es un número`);
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} =  ${base * i} \n`);
        }

        // fs.writeFile(`Archivos tablas/tabla- ${base}.txt`, data, (err) => {
        //     if (err)
        //         (reject(err));
        //     else
        //         resolve(`tabla- ${base}.txt`)
        // });
    });
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            return reject(`El valor introducido ${base} no es un número`);
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} =  ${base * i} \n`);
        }

        fs.writeFile(`Archivos tablas/tabla- ${base}.txt`, data, (err) => {
            if (err)
                (reject(err));
            else
                resolve(`tabla- ${base}.txt`)
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};