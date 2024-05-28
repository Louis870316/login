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
      data ? res.render("success", { firstName: data.firstName, email: data.email, password: data.password }) : res.render("fail", { message: 'Account password entered incorrectly.' })
    )
    .catch(error => {
      console.error('Error :', error);
      res.render('fail', { message: 'Account password entered incorrectly.' });
    })
})

router.get('/create', (req, res) => {
  res.render('create')
})

router.post('/create', (req, res) => {
  const { email, password, firstName } = req.body
  User.findOne({ email })
    .then(user => {
      if (user) {
        console.log('This email is already registered.')
        res.render('fail', { message: 'This email is already registered.' })
      } else {
        User.create({ email, password, firstName })
          .then(res.redirect('/'))
          .catch(error => {
            console.error('Error creating user:', error);
            res.render('fail', { message: 'An error occurred during registration.' });
          })
      }
    })
    .catch(error => {
      console.error('Error finding user:', error);
      res.render('fail', { message: 'An error occurred during registration.' });
    });
})

module.exports = router