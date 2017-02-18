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
        where: {
            email: req.body.email
        },
        defaults: {
            name: req.body.name
        }
    }).spread(function(user, created) {
        if (created) {
            dataUser.push(user.get({
                plain: true
            }))
        }
    }).then(function() {
        if (dataUser.length == 0) {
            res.send({
                status: "Email Sudah Terdaftar"
            })
        } else {
            if (req.body.skill == null || req.body.skill == "") {
                res.send(dataUser[0])
            } else {
                models.Skill.findOne({
                    where: {
                        name: req.body.skill.toLowerCase()
                    }
                }).then(function(result) {
                    if (result) {
                        models.Users_skill.create({
                            userID: dataUser[0].id,
                            skillID: result.id
                        }).then(function() {
                            res.send({
                                email: req.body.email,
                                name: req.body.name,
                                skill: req.body.skill
                            })
                        })

                    } else {
                      models.Skill.create({
                        name: req.body.skill.toLowerCase()
                      }).then(function(result) {
                        models.Users_skill.create({
                            userID: dataUser[0].id,
                            skillID: result.id
                        }).then(function() {
                            res.send({
                                email: req.body.email,
                                name: req.body.name,
                                skill: req.body.skill
                            })
                        })
                      })
                    }
                })
            }
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
        if (result) {
            return result.destroy()
        }
    }).then(function(result) {
        if (result) {
            res.send(`Data Dengan ID: ${req.body.id} Terhapus`)
        } else {
            res.send(`User Tidak Ada`)
        }
    }).catch(function(err) {
        res.send(err)
    })
})


module.exports = router;
