const router = require('express').Router()
const passport = require('passport')

const participantsServices = require('./participants.services')
require('../middlewares/auth.middleware')(passport)


router.route('/')
    .get(participantsServices.getAllParticipants)
    .post(
        passport.authenticate('jwt', {session: false}),
        participantServices.createParticipant
    )




module.exports = router
