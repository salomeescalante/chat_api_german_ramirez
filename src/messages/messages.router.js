const router = require('express').Router()

const messageServices = require('./messages.services')

router.route('/') //? /messages
    .get(messageServices.getAllMessages)
    .post(messageServices.postMessage)
    
//? /api/v1/messages/:id
router.get('/:id', messageServices.getMessageById)

module.exports = router
