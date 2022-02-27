const jwt = require('jsonwebtoken')

//handle private routes - check if token given, find the user, and put his id in req.body
const auth = (req, res, next) => {
    const token = req.header('auth-token')
    if(!token) return res.status(401).json({success: false, details: "Access Denied"})

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.body._id = verified._id
        next()
    }
    catch(err) {
        res.status(400).json({success: false, details: "Invalid token."})
    }
}

module.exports = auth