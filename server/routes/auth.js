const router = require('express').Router()
const authController = require('../controllers/auth')
const authMiddleware = require('../middlewares/auth')

//server routes


//signup
router.post('/signup', (req, res) => {
    authController.signup(req, res);
})

//signin
router.post('/signin', (req, res) => {
    authController.signin(req, res);
})

//update user details
router.patch('/update', authMiddleware, (req, res) => {
    authController.updateDetails(req, res);
})

//get user information
router.get('/', authMiddleware, (req, res) => {
    authController.getUserDetails(req, res);
})

module.exports = router;