const conversationControllers = require('./conversations.controllers');

const getAllConversations = (req, res) => {
    messageControllers.getAllConversations()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message:err.message})
        })
}

// /conversations/:id
const getConversationById = (req, res) => {
    const id = req.params.id

    conversationControllers.getConversationById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        });

}
// /conversations
const postConversation = (req, res) => {
    const { name } = req.body;
  
    if (name) {
      conversationControllers
        .createConversation(name)
        .then((data) => {
          res.status(201).json(data);
        })
        .catch((err) => {
          res.status(400).json({ message: err.message });
        });
    } else {
      res.status(400).json({ message: "Missing data" });
    }
  };
  


module.exports =
module.exports = {
    getAllConversations,
    getConversationById,
    postConversation
};
