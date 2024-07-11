import fs from 'fs'
import path from 'node:path';
import { yarg } from "./config/plugins/args,plugin"

const ruta = __dirname + '\\outputs'
const nombreDirectorio = path.dirname(ruta + '/tabla-5.txt');

const { b:base, l:limit, s:showTable } = yarg


let outMessage = ''
const headerMessage = `
====================================================
                    Tabla del ${base}                    
====================================================\n
`


for (let i = 1; i <= limit; i++) {
    outMessage += `${base} x ${i.toString()} = ${(i * base).toString()}\n`

}
outMessage = headerMessage + outMessage
if (showTable ) {
    console.log(outMessage)
}

fs.appendFileSync(`${nombreDirectorio}/tabla-5.txt`, outMessage, 'utf8');
