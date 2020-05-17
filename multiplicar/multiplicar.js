//requires
const fs = require('fs');


let listarTabla = (base, limite) => {
    return new Promise( (resolve, reject)=> {
        if(!Number(base) && !Number(limite)){
            reject(`Error en el valor introducido`);
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += ` ${base} x ${i} = ${base * i}\n`;
        }
        resolve(data);
    })
}




let crearArchivo = (base, limite) => {
    return new Promise( (resolve, reject)=>{

        if(!Number(base) && !Number(limite)){
            reject(`Error en el valor introducido`);
            return;
        }

        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += ` ${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data , (err)=>{
            if(err) reject(err)
            else
                resolve(`tabla-${base}.txt`)
        })

    });
}


module.exports = {
    crearArchivo,
    listarTabla
}


