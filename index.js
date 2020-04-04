const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
require('./config/config')
require('./middlewares/index')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

// habilitar la carpeta frontend
app.use("/", express.static(path.join(__dirname, 'frontend')))

// configuracion general de rutas
app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
  console.log(`Server on port: ${process.env.PORT}`)
})