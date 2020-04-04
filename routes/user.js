const express = require('express')
const app = express()
const bcrypt = require('bcrypt');
const User = require('../models/user')
const {
  validateUserBody
} = require('../validation/user')

app.post('/', validateUserBody('user/') ,(req, res) => {
  const body = req.body

  let newUser = new User({
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role
  })

  newUser.save()
    .then(() => {
      res.json({
        success: true,
        message: "User created successfully"
      })
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        message: err.message
      })
    })
})

module.exports = app