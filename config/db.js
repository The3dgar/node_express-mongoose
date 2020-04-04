const mongoose = require('mongoose')
mongoose.connect(process.env.URLDB, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
.then(console.log(`DB online`))
.catch(console.log)