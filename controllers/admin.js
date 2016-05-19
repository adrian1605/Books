/**
 * Created by adrianpogacean on 5/12/2016.
 */
'use strict';

const UserModel = require('../models/user');
const Books = require('../models/book');


const admin = {
    getUserList: function(req, res, next) {
        var User = new UserModel(),
            users;

        users = User.getAll();
        if(users) {
            res.send({type: 'success', users: users});
        } else {
            res.send({type: 'error', message: 'No users found'});
        }
    },

    getUser:  function(req, res, next) {
        var User = new UserModel(),
            id = req.params.id,
            userObj;

        userObj = User.getUserById(id);
        if(userObj) {
            res.send({type: 'success', user: userObj});
        } else {
            res.send({type: 'error', message: 'No user found'});
        }
    },

    updateUser: function(req, res, next) {
        var User = new UserModel(),
            params = req.body,
            id = params.id;

        delete params.id;
        params.date = new Date(Date.parse(params.date));
        User.update(params, {
            id: id
        }).then(function(userObj) {
            if(userObj) {
                res.send({type: 'success', user: params});
            }
        }).error(function(e) {
            log.warn("Could not read user based on id.");
            log.error(e);
            return res.error(500, "SERVER_ERROR");
        });
    },

    createUser: function(req, res, next) {
        var params = req.body,
            firstName = params.first_name || '',
            lastName = params.last_name || '';

        console.log('PARAMS : ', params);

        params.username = params.username ? params.username : firstName+lastName;

        params.password = params.username;

        const User = new UserModel(params);

        console.log('USER IN CONTROLLER : ', User);

        var userObj = User.create();
        console.log('USER OBJ: ',userObj);
        if(userObj) {
            res.send({type: 'success', user: userObj});
        } else {
            res.send({type: 'error', message: 'Could not create user'});
        }
    },

    deleteUser: function(req, res, next) {
        const User = new UserModel();
        var id = req.params.id;

        var deleted = User.deleteUser(id);

        res.send({type: deleted ? 'success' : 'error'});
    },

    getBooksReport: function(req, res, next) {
        var Transaction = db.model('transaction');
        var User = db.model('user');
        var userId = req.params.id;
        var params = req.body;

        params.start_date = new Date(Date.parse(params.start_date));
        params.end_date = new Date(Date.parse(params.end_date));


        Transaction.findAll({
            where: {
                user_id: userId,
                //created_date: {
                //    lt: params.end_date,
                //    gte: params.start_date
                //}
            },
            include: [User]
        }).then(function(reportsObj) {
            if(reportsObj) {
                res.send({type: 'success', reports: reportsObj});
            }
        }).error(function(e) {
            log.warn("Could not read user reports.");
            log.error(e);
            return res.error(500, "SERVER_ERROR");
        });
    }
}


module.exports = admin;
