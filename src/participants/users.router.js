const router = require('express').Router()
const passport = require('passport')

const usersServices = require('./users.services')
require('../middlewares/auth.middleware')(passport)


router.route('/')
    .get(usersServices.getAllUsers)
    .post(
        passport.authenticate('jwt', {session: false}),
        conversationServices.createConversation
    )




module.exports = router
