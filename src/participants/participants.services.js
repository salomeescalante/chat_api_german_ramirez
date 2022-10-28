const participantControllers = require('./participants.controller')

const getAllMessages = (req, res) => {
    participantControllers.getAllParticipants()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}


const createParticipant = (req, res) => {
    //? Este es el id del usuario loggeado
    const userId = req.user.id 
    const { title, content, participantId } = req.body
    if(title && content && participantId){
        participantControllers.createParticipant({title, content, userId, participantId})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                title: 'string',
                content: 'string',
                categoryId: 'uuid'
            }
        })
    }

}


module.exports = {
    createParticipant,
    getAllParticipants
}