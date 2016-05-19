/**
 * Created by adrianpogacean on 5/19/2016.
 */
'use strict';


const Users = {
    1: {
        username: 'adrian',
        last_name: 'Pogacean',
        first_name: 'Adrian',
        email: 'adrian.pogacean@yahoo.com'
    }
};
function saveUser(callback) {
    if (typeof callback == 'function') callback();
}

module.exports.users = Users;
module.exports.save = saveUser;