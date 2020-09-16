const mongoose = require('mongoose')

const robotSchema = new mongoose.Schema({
  id: {
    type:String
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Robot', robotSchema)