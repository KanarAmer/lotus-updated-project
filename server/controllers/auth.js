const DBactions = require('../db/actions')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../db/models/user');
const { resWithStatus } = require('../utils');

//handle signup request - input validation, password hashing, and dispatch the db action.
const signup = async (req, res) => {
    const {email, password, name} = req.body.user
    const hashedPassword = await bcrypt.hash(password, 10)
    if(!email || !password || !name) return resWithStatus(res, false, 400, "one of the fields is empty.")
    const result = await DBactions.createUser({email, password: hashedPassword, name})
    return resWithStatus(res, result.success, result.status, result.details)
}

//handle signin request - input validation, find user details and compare with the given details, and return access token.
const signin = async (req, res) => {
    const {email, password} = req.body
    if(!email || !password) return resWithStatus(res, false, 400, "one of the fields is empty.")
    const user = await User.findOne({ email })
    if(!user) return resWithStatus(res, false, 400, "The email or password is incorrect.")
    const match = await bcrypt.compare(password, user.password)
    if(!match) return resWithStatus(res, false, 400, "The email or password is incorrect.")
    const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET)
    return resWithStatus(res, true, 200, accessToken)
}

//handle update details request - input validation, hashing the new password if given, and dispatch the db action.
const updateDetails = async (req, res) => {
    const {email, name, password, _id} = req.body.user
    if(!email || !password || !name) return resWithStatus(res, false, 400, "one of the fields is empty.")
    let update = {email, name}
    if(password.update) {
        const hashedPassword = await bcrypt.hash(password.newPassword, 10)
        update = {...update, password: hashedPassword}
    }
    const result = await DBactions.updateUser(_id, update)
    return resWithStatus(res, result.success, result.status, result.details)
}

//handle get user details - get the user by his id that given in the auth middleware by the token
const getUserDetails = async (req, res) => {
    const {_id} = req.body
    if(!_id) return resWithStatus(res, false, 500, "Internal error.")
    const result = await DBactions.getUser(_id)
    return resWithStatus(res, result.success, result.status, result.details)
}

module.exports = {signup, signin, getUserDetails, updateDetails}