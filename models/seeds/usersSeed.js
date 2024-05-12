const User = require('../user')
const db = require('../../config/mongoose')
const usersList = require('../../users.json').users

db.once('open', () => {
  console.log('mongoose connected!')
  User.create(usersList)
    .then(() => {
      db.close()
    })
    .catch(err => console.log(err))
})