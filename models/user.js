const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
let Schema = mongoose.Schema

let usuarioSchema = new Schema({
  email: {
    unique: true,
    type: String,
    required: [true, 'email is required']
  },
  password: {
    type: String,
    required: [true, 'password is required']
  },
  role: {
    type: String,
    default: 'USER_ROLE',
    enum: {
      values: ['ADMIN_ROLE', 'USER_ROLE'],
      message: '{VALUE} not is a valid role'
    },
    required: true
  },
  estado: {
    type: Boolean,
    default: true
  }
})

// to delete password when fetching a user
usuarioSchema.methods.toJSON = function () {
  let user = this
  let userObject = user.toObject()
  delete userObject.password

  return userObject
}

usuarioSchema.plugin(uniqueValidator, {
  message: '{PATH} debe de ser unico'
})

module.exports = mongoose.model('Usuario', usuarioSchema)