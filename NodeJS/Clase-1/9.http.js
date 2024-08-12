const http = require('node:http') // Protocolo HTTP
const { findAvaliablePort } = require('./10.free-port.js')

const server = http.createServer((req, res) => {
  console.log('request recibida')
  res.end('Hola mundo, como va?')
})

findAvaliablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
