
import { platform, release, arch, cpus, freemem, totalmem } from 'node:os';

console.log('informacion del sistema operativo:')
console.log('________________________________')

console.log('Nombre del sistema operativo:', platform())
console.log('version del sistema operativo:', release())
console.log('arquitectura', arch())
console.log('CPUs', cpus())
console.log('memoria libre', freemem() / 1024 / 1024)
console.log('memoria total', totalmem() / 1024 / 1024)