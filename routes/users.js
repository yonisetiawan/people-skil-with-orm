var express = require('express');
var router = express.Router();
const models = require('../models');


router.get('/getAll', function(req, res, next) {
    models.User.findAll().then(function(result) {
        res.send(result)
    })
})

router.post('/getById', function(req, res, next) {
    models.User.findAll({
      where: {
        id: req.body.id
      }
    }).then(function(result) {
        res.send(result)
    })
})

router.post('/add', function(req, res, next) {
  models.User.create({
    name: req.body.name,
    email: req.body.email
  }).then(function(err, result) {
      if(err) res.send(err)
      else res.send(result)
  })
})

router.put('/update', function(req, res, next) {
  models.User.findById(req.body.id).then(function(result) {
    result.update({
      name: req.body.name,
      email: req.body.email
    }).then(function() {
        res.send(result)
    })
  })
})

router.delete('/delete', function(req, res, next) {
  models.User.findById(req.body.id).then(function(result) {
    return result.destroy()
  }).then(function() {
    res.send(`Data Dengan ID: ${req.body.id} Terhapus`)
  })
})


module.exports = router;
