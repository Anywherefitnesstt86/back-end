const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../secrets/authSecret');

function generateToken(email) {
    const payload = {
        subject: email.id,
        email: email.email,
        role: email.role || 'user',
    };

    const options = {
        expiresIn: '1h',
    };
    return jwt.sign(payload, jwtSecret, options);
}

module.exports = generateToken