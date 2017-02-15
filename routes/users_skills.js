var express = require('express');
var router = express.Router();
const models = require('../models');


router.get('/getAll', function(req, res, next) {
    models.Users_skill.findAll().then(function(result) {
        res.send(result)
    })
})

router.post('/getById', function(req, res, next) {
    models.Users_skill.findAll({
        where: {
            id: req.body.id
        }
    }).then(function(result) {
        res.send(result)
    })
})


router.post('/add', function(req, res, next) {
    models.Users_skill.findOrCreate({
        where: {
            userID: req.body.userID,
            skillID: req.body.skillID
        },
        defaults: {
            nilai: req.body.nilai
        }
    }).spread(function(users_skill, created) {
        if (created) {
            res.send(users_skill.get({
                plain: true
            }))
        } else {
            res.send("User Sudah Memiliki Skill Tersebut")
        }
    })
})

router.put('/update', function(req, res, next) {
  models.Users_skill.findById(req.body.id).then(function(result) {
    if(result){
      result.update({
        userID: req.body.userID,
        skillID: req.body.skillID,
        nilai: req.body.nilai
      }).then(function() {
          res.send(result)
      })
    }else{
      res.send("ID Users_skill Tidak Ditemukan")
    }
  })
})


router.delete('/delete', function(req, res, next) {
    models.Users_skill.findById(req.body.id).then(function(result) {
        if (result) {
            return result.destroy()
        }
    }).then(function(result) {
        if (result) {
            res.send(`Data Users_skill Dengan ID: ${req.body.id} Terhapus`)
        } else {
            res.send("ID Tidak ditemukan")
        }
    })
})



module.exports = router;
