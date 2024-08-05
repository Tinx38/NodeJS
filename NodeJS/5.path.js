
const path = require('node:path')

// barra separadora de capetas
console.log(path.sep)

// unir rutas con path join
const filePath = path.join('escritorio', 'vs code', 'nodejs marti')
console.log(filePath)

const base = path.basename('/sistem files/secrets/god password.txt')
console.log(base)

const filename = path.basename('/sistem files/secrets/godPassword.txt', '.txt')
console.log(filename)

const extension = path.extname('my.super.image.jpg')
console.log(extension)

