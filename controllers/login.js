/**
 * Created by adrianpogacean on 5/12/2016.
 */
const login = {
    getIndex: function(req, res, next) {
        res.render('login', {isLogin: true});
    },
    doLogin: function(req, res, next) {
        var userObj = {
                username: 'adrian',
                password: 'adrian',
                //is_admin: true
            },
            params = req.body;


        if(userObj.username === params.username && userObj.password === params.password) {
            req.session.user = userObj.username;
            req.session.admin = userObj.is_admin;
            req.session.userId = userObj.id;
            res.send({type: 'success', isAdmin: userObj.is_admin});
        } else {
            res.send({type: 'error', message: 'Login failed'});
        }
    }
}

module.exports = login;