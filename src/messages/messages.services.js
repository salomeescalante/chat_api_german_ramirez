const messageControllers = require('./messages.controller');

const getAllMessages = (req, res) => {
    messageControllers.getAllMessages()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message:err.message})
        })
}

// /messages/:id
const getMessageById = (req, res) => {
    const id = req.params.id

    messageControllers.getMessageById(id)
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
// /messages
const postMessage = (req, res) => {
    const { name } = req.body;
  
    if (name) {
      messageControllers
        .createMessage(name)
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
    getAllMessages,
    getMessageById,
    postMessage
};
