
//return object with the response details (just a function return, not an express response)
const returnRes = (success, status, details) => ({success, status, details})

//return express response with status and json
const resWithStatus = (res, success, status, details) => res.status(status).json({success, status, details})

module.exports = {returnRes, resWithStatus}