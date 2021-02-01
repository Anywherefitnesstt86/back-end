const jwt = require("jsonwebtoken")

const roles = [
    "basic",
	"instructor"
]

function restrict(role) {
	return async (req, res, next) => {
		const authError = {
			message: "Invalid credentials",
		}
		const authError2 = {
			message: "Invalid credentials 2",
		}

		try {
			const token = req.headers.token 

			if (!token) {
				return res.status(401).json(authError3)
			}

			jwt.verify(token, "some secret", (err, decoded) => { // jwt.verify - the variable with token, secret, err
				if (err) {
					return res.status(401).json(authError)
				}

				if (role && roles.indexOf(decoded.department) < roles.indexOf(role)) {
					return res.status(401).json(authError2)
				}

				next()
			})	
			
			
		} catch(err) {
			next(err)
		}
	}
}


module.exports = restrict