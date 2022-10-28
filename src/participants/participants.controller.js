const Messages = require('../models/messages.models')

const uuid = require('uuid')
const Users = require('../models/users.models')
const Participants = require('./src/participants')
const Conversations = require('../models/conversations.models')

const getAllParticipants = async() => {
    const data = await Participants.findAll({
        include:[
            {
                model: Conversations
            },
            {
                model: Participants,
                attributes: {
                    exclude: ['id']
                }
            }
        ],
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'participantId']
        }
    })
    return data
}

const getParticipantById = async(id) => {

}

const createParticipant = async (data) => {
    const response = await Participants.create({
        id: uuid.v4(),
        title: data.title,
        content: data.content,
        createdBy: data.userId,
        participantId: data.participantId
    })
    return response
}

module.exports = {
    getAllParticipants,
    getParticipantById,
    createParticipant
}

