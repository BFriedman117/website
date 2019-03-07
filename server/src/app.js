const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./db')
const app = express()
const api = require('./api')


app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(api)


app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to website!',
}))

if (db && db.sync) {
  db.sync({ alter: false })
  .then(() => {
    app.listen(process.env.PORT || 3000)
    console.log('Listening on port: ', process.env.PORT || 3000)
  })
} else {
  console.log('no db: ', db)
}
