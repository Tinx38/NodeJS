const { readFile } = require("node:fs/promises");

// IIFE - Inmediatly Invoked Function Expression

// (
// async () => {
//     console.log('leyendo el primer archivo...')
// const text = await readFile('archivo.txt', 'utf-8')
// console.log('primer texto:', text)

// console.log('haciendo otras cosas mientras lee el archivo...')

// console.log('leyendo el segundo archivo...')
// const secondText = await readFile('archivo2.txt', 'utf-8')
// console.log('leyendo el segundo texto', secondText)
// }
// )()

async function init() {
    console.log("leyendo el primer archivo...");
    const text = await readFile("archivo.txt", "utf-8");
    console.log("primer texto:", text);

    console.log("haciendo otras cosas mientras lee el archivo...");

    console.log("leyendo el segundo archivo...");
    const secondText = await readFile("archivo2.txt", "utf-8");
    console.log("leyendo el segundo texto", secondText);
}
init();






