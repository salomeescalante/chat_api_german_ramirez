const adminValidate = (req, res, next) => {
    const role = req.user.role 

    if(role === 'admin') {
         next()
    } else {

        res.status(401).json({message: 'Access deny!'})
    }
}



module.exports = adminValidate