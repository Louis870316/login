const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/signIn', (req, res) => {
  const { password, email } = req.body
  User.findOne({ password, email })
    .then(data =>
      data ? res.render("success", { firstName: data.firstName, email: data.email, password: data.password }) : res.render("fail")
    )
    .catch(error => console.error(error))
})

router.get('/create', (req, res) => {
  res.render('create')
})

router.post('/create', (req, res) => {
  User.create(req.body)
    .then(res.redirect('/'))
    .catch(error => console.error(error))
})

module.exports = router