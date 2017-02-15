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
  var dataUser = []
  models.User.findOrCreate({
    where:{
      email: req.body.email
    },
    defaults:{
      name: req.body.name
    }
  }).spread(function(user, created) {
    if(created){
      dataUser.push(user.get({plain:true}))
    }
  }).then(function() {
      if(dataUser.length == 0){
        res.send({
          status: "Email Sudah Terdaftar"
        })
      }else{
        // res.send(dataUser[0])
        models.Skill.findOne({
          where:{
            name: req.body.skill.toLowerCase()
          }
        }).then(function(result) {
          if(result){
            
          }else{

          }
        })
      }
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
    if(result){
      return result.destroy()
    }
  }).then(function(result) {
      if(result){
        res.send(`Data Dengan ID: ${req.body.id} Terhapus`)
      }else{
        res.send(`User Tidak Ada`)
      }
  }).catch(function(err) {
    res.send(err)
  })
})


module.exports = router;
