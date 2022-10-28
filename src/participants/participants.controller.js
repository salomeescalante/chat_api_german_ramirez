const Messages = require('../models/messages.models')

const uuid = require('uuid')
const Users = require('../models/users.models')
const Conversations = require('../models/conversations.models')

const getAllMessages = async() => {
    const data = await Messages.findAll({
        include:[
            {
                model: Users
            },
            {
                model: Conversations,
                attributes: {
                    exclude: ['id']
                }
            }
        ],
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'conversationId']
        }
    })
    return data
}

const getMessageById = async(id) => {

}

const createMessage = async (data) => {
    const response = await Messages.create({
        id: uuid.v4(),
        title: data.title,
        content: data.content,
        createdBy: data.userId, //? este es el user id que viene desde el token
        conversationId: data.conversationId
    })
    return response
}

module.exports = {
    getAllMessages,
    getMessageById,
    createMessage
}