const Conversations = require('../models/conversations.models')

const getAllConversations = async() => {
    const data  = await Conversations.findAll()
    return data
}

const getConversationById = async(id) => {
    const data = await Conversations.findAll({
        where: {
            title,
            userId
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

const updateConversation = async (userId, id, title) => {
    const result = await Conversations.update(title, {
        where: {
            userId,
            id
        }
    })
    return result;
}

module.exports = {
    getAllConversations,
    getConversationById,
    createConversation,
    updateConversation

}