/**
 * Created by adrianpogacean on 5/17/2016.
 */
'use strict';

$(document).ready(function() {
    $('#login_btn').on('click', function(ev) {
        ev.preventDefault();

        $.ajax({
            url: '/login',
            method: 'POST',
            data: {
                username: $('#inputUsername').val(),
                password: $('#inputPassword').val()
            }
        })
            .done(function(data) {
                if (data.type === 'error') {
                    $('#login_btn').siblings('.alert').slideDown();
                } else {
                    if (data.isAdmin) {
                        window.location = '/admin_dashboard';
                    }
                    window.location = '/dashboard';
                }

            })
    });

});