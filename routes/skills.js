var express = require('express');
var router = express.Router();
const models = require('../models');


router.get('/getAll', function (req, res, next) {
  models.Skill.findAll().then(function(result) {
    res.send(result)
  })
})

router.post('/getById', function(req, res, next) {
    models.Skill.findAll({
      where: {
        id: req.body.id
      }
    }).then(function(result) {
        res.send(result)
    })
})


router.post('/add', function(req, res, next) {
  models.Skill.findOrCreate({
    where:{
      name: req.body.name.toLowerCase()
    }
  }).spread(function(user, created) {
    if(created){
      res.send(user.get({plain:true}))
    }else{
      res.send("Skill Sudah Ada")
    }
  })
})

router.put('/update', function(req, res, next) {
  models.Skill.findById(req.body.id).then(function(result) {
    result.update({
      name: req.body.name
    }).then(function() {
        res.send(result)
    })
  })
})

router.delete('/delete', function(req, res, next) {
  models.Skill.findById(req.body.id).then(function(result) {
    return result.destroy()
  }).then(function() {
    res.send(`Data Dengan ID: ${req.body.id} Terhapus`)
  })
})



module.exports = router;
