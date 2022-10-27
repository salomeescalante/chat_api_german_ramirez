const Conversations = require('../models/conversations.models')

const getAllConversations = async() => {
    const data  = await Conversations.findAll()
    return data
}

const getConversationById = async(id) => {
    const data = await Conversations.findOne({
        where: {
            id
        }
    })
    return data
}

const createConversation = async(senderId, conversationId, message) => {
    const response = await Conversations.create({
        senderId: senderId,
        conversationId: conversationId,
        message: message
    })
    return response
}

module.exports = {
    getAllConversations,
    getConversationById,
    createConversation
}