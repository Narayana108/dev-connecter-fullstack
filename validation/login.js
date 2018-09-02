const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    // Checks if var is not empty, if not assign data.name = data.name, if it is empty then data.name = "" 
    data.email= !isEmpty(data.email) ? data.email: ''; 
    data.password = !isEmpty(data.password) ? data.password : ''; 

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors) 
    }
}
