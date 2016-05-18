/**
 * Created by adrianpogacean on 5/17/2016.
 */
'use strict';

var express = require('express');
var router = express.Router();
var loginController = require('../controllers/login');

/* GET login page. */
router.get('/', loginController.getIndex);
router.post('/',  loginController.doLogin);

module.exports = router;