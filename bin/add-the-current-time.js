const dateString = new Date().toISOString()

console.log(' - Writing current time', dateString)

const fs = require('fs')

fs.appendFileSync('./app/views/index.njk', `<p>Created at ${dateString}`, 'utf8')

