const router = require('express').Router()
const db = require('../db')

// DEPARTMENT ROUTES

router.get('/department', (req, res) => {
  db.query('SELECT * FROM department', (err, department) => {
    if (err) { console.log(department) }
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

// ROLE ROUTES

router.get('/role', (req, res) => {
  db.query('SELECT * FROM role', (err, role) => {
    if (err) { console.log(role) }
    res.json(users)
  })
})

router.post('/role', (req, res) => {
  db.query('INSERT INTO role SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.put('/role/:id', (req, res) => {
  db.query('UPDATE role SET ? WHERE ?', [req.body, { id: req.params.id }], err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.delete('/role/:id', (req, res) => {
  db.query('DELETE FROM role WHERE ?', { id: req.params.id }, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// EMPLOYEE ROUTES
router.get('/employee', (req, res) => {
  db.query('SELECT * FROM employee', (err, employee) => {
    if (err) { console.log(employee) }
    res.json(users)
  })
})

router.post('/employee', (req, res) => {
  db.query('INSERT INTO employee SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.put('/employee/:id', (req, res) => {
  db.query('UPDATE employee SET ? WHERE ?', [req.body, { id: req.params.id }], err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.delete('/employee/:id', (req, res) => {
  db.query('DELETE FROM employee WHERE ?', { id: req.params.id }, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})
module.exports = router