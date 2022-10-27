const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Users = require('./users.models')
const Messages = require('./messages.models')

const Messages = db.define('messages', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,  //varchar
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {

    },
    profile_image: {

    },
    phone: {

    },
    created_at: {

    },
    updated_at: {

    },
    // //? Llave foranea de Users
    createdBy: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'created_by',
        references: {
            key: 'id',
            model: Users
        },
    },
    
    categoryId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
            key: 'id',
            model: Categories
        }
    }

} )

module.exports = Messages


//! procedimiento para hacer el clon en github:

//*  en terminal powershell = cd + carpeta donde se vaya a crear el proyecto
//*  git clone https//:...
//* ejectural npm install
//* copiar archivo .env

