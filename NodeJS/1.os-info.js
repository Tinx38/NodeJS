
const os = require('node:os');

console.log('informacion del sistema operativo:')
console.log('________________________________')

console.log('Nombre del sistema operativo:', os.platform())
console.log('version del sistema operativo:', os.release())
console.log('arquitectura', os.arch())
console.log('CPUs', os.cpus())
console.log('memoria libre', os.freemem() / 1024 / 1024)
console.log('memoria total', os.totalmem() / 1024 / 1024)