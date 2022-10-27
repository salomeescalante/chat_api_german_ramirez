const router = require('express').Router()

const conversationServices = require('./conversations.services')

router.route('/') //? /conversations
    .get(conversationServices.getAllConversations)
    .post(conversationServices.postConversation)
    
//? /api/v1/conversations/:id
router.get('/:id', conversationServices.getConversationById)

module.exports = router