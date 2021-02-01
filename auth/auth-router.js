const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model');
const newToken = require('./token');
const { validateUser } = require('../users/validation');


router.post('/register', (req, res) => {
  let newUser = req.body

  const validateResult = validateUser(newUser);
  if (validateResult.isSuccessful === true) {
      const hash = bcrypt.hashSync(newUser.password, 14);
      newUser.password = hash;

      Users.addUser(newUser)
          .then(saved => {
              const token = newToken(saved);
              res.status(201).json(token);
          })
          .catch(err => {
              res.status(500).json({ message: 'Error adding the user', err })
          })
  } else {
      res.status(400).json({ Message: 'not valid', errors: validateUser(newUser) })
  }
});

router.post('/login', (req, res) => {
  let { email, password } = req.body;

  Users.findBy({ email })
      .first()
      .then(user => {
          if (user && bcrypt.compareSync(password, user.password)) {
              const token = newToken(user);
              res.status(200).json({ Message: `Welcome ${user.email}`, token });
          } else {
              res.status(401).json({ Message: 'Credentials not valid' });
          }
      })
      .catch(err => {
          res.status(500).json({ Message: 'Danger Will Robinson! Danger!' })
      })
});

module.exports = router;