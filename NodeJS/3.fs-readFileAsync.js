// asincrono callback

const fs = require('node:fs')

console.log('leyendo primer archivo...')
fs.readFile('archivo.txt', 'utf-8', (err, text) => {
    console.log('primer texto:', text)
})

console.log('haciendo otras cosas mientras lee el archivo...')

console.log('leyendo segundo archivo...')
fs.readFile('archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo texto:', text)
})

