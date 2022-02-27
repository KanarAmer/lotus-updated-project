const User = require('./models/user')
const {returnRes} = require('../utils')

/*
input: user object
output: success, status, and feedback
*/
const createUser = async (user) => {

    const {email, password, name} = user;
    
    if(!email || !password || !name) return returnRes(false, 400, "one of the fields is empty")
    
    const isExist = await User.findOne({email})
    if(isExist) return returnRes(false, 400, "a user with that email already exists")

    try {
        const newUser = new User ({
            email, password, name
        })
        await newUser.save()
        return returnRes(true, 200, "user created successfuly")
    }
    catch(err) {
        return returnRes(false, 500, "Internal DB Error")
    }
}

/*
input: user id & updated user details
output: success, status, and feedback
*/
const updateUser = async (_id, update) => {

    if(!_id || !update) return returnRes(false, 400, "one of the fields is empty")

    try {
        await User.findByIdAndUpdate(_id, update)
        return returnRes(true, 200, "user updated successfuly")
    }
    catch(err) {
        return returnRes(false, 500, "Internal DB Error")
    }
}

/*
input: user id
output: success, status, user details
*/
const getUser = async (_id) => {
    
    if(!_id) return returnRes(false, 500, "Internal DB Error")

    try {
        const user = await User.findById(_id)
        return returnRes(true, 200, user)
    }
    catch(err) {
        return returnRes(false, 500, "Internal DB Error")
    }
}

module.exports = {createUser, updateUser, getUser}