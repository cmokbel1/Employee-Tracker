const router = require('express').Router()
const db = require('../db')

router.get('/department', (req, res) => {
  db.query('SELECT * FROM department', (err, department) => {
    if (err) { console.log(users) }
    res.json(users)
  })
})

router.post('/department', (req, res) => {
  db.query('INSERT INTO department SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.put('/department/:id', (req, res) => {
  db.query('UPDATE department SET ? WHERE ?', [req.body, { id: req.params.id }], err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.delete('/users/:id', (req, res) => {
  db.query('DELETE FROM department WHERE ?', { id: req.params.id }, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

module.exports = router