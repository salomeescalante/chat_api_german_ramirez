
// const Participants = require('./participants.models')
const Messages = require('./messages.models')
const Users = require('./users.models')
const Conversations = require('./conversations.models')

const initModels = () => {
// para relaciones(uno a uno, uno a muchos, etc)

    //*  UNO A MUCHOS
    //? Una publicación pertenece a un Usuario
    Conversations.belongsTo(Users)
    //? Un usuario tiene muchas publicaciones
    Users.hasMany(Conversations)

    //*  UNO A MUCHOS
    //? Una publicación pertenece a una categoría 
    Conversations.belongsTo(Messages)
    //? Una categoría tiene muchas publicaciones
    Messages.hasMany(Conversations)
    
} 
module.exports = initModels