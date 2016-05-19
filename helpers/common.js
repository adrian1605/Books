/**
 * Created by adrianpogacean on 5/19/2016.
 */
'use strict';

const uuid = function uuid(a) {
    return a?(0|Math.random()*16).toString(16):(""+1e7+-1e3+-4e3+-8e3+-1e11).replace(/1|0/g,uuid)
};

module.exports.uuid = uuid;
