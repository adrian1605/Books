/**
 * Created by Adrian on 4/10/2016.
 */
'use strict';

var express = require('express');
var router = express.Router();
const adminController = require('../controllers/admin');

router.get('/', function(req, res, next) {
    if (!req.session.user) {
        res.redirect('login');
    }
    res.render('dashboard', { title: 'Dashboard' });
});

router.get('/user_list', adminController.getUserList);

router.get('/user/:id', adminController.getUser);

router.put('/user', adminController.updateUser);

router.post('/user', adminController.createUser);

router.delete('/user/:id', adminController.deleteUser);

router.get('/books/report/:id', adminController.getBooksReport);

module.exports = router;
