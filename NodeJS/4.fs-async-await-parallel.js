// asincrono paralelo

const { readFile } = require("node:fs/promises");

Promise.all([
    readFile('archivo.txt', 'utf-8'),
    readFile('archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('primer texto:', text)
    console.log('segundo texto:', secondText)
})





    // console.log("leyendo el primer archivo...");
    // const text = await readFile("archivo.txt", "utf-8");
    // console.log("primer texto:", text);

    // console.log("haciendo otras cosas mientras lee el archivo...");

    // console.log("leyendo el segundo archivo...");
    // const secondText = await readFile("archivo2.txt", "utf-8");
    // console.log("leyendo el segundo texto", secondText);







