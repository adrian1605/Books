/**
 * Created by adrianpogacean on 5/19/2016.
 */
'use strict';

const commonHelpers = require('../helpers/common');
const UserMapper = require('../mappers/user');

class User {
    constructor(opts) {
        opts = opts || {};
        this.id = commonHelpers.uuid();
        this.username = opts.username;
        this.last_name = opts.last_name;
        this.first_name = opts.first_name;
        this.email = opts.email;
        this.name = opts.name;
    }

    getUserById(id) {
        return UserMapper.users[id];
    }

    create() {
        UserMapper.users[this.id] = this;
        console.log('USER: ', this);
        UserMapper.save(() => {
            console.log('SAVED SUCCESSFULLY');
            return this;
        });
    }

    updateUserById(id, data) {
        Object.assign(UserMapper.users[id], data);
        UserMapper.save();
    }

    deleteUser(id) {
        var deleted = false;
        if (UserMapper.users[id]) {
            delete UserMapper.users[id];
            deleted = true;
        }

        UserMapper.save(function () {
            return deleted;
        });

    }

    getAll() {
        return UserMapper.users;
    }
}

module.exports = User;