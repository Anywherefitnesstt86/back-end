function validateUser(user) {
    let errors = [];

    if (!user.email || user.email.length < 8) {
        errors.push('Email must have at least eight characters');
    }
    if (!user.password || user.password.length < 6) {
        errors.push('Password must be at least six characters')
    }
    return {
        isSuccessful: errors.length > 0 ? false : true,
        errors,
    }
}

module.exports = {
    validateUser
}