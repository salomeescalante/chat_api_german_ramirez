 
 const db = require('../utils/database')
 const { DataTypes } = require('sequelize')
const Users = require('./users.models')
 
 const Conversations = db.define('conversations' , {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      field: 'image_Url'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_Id',
      references: {
        key: 'id',
        model: Users
      }
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
 }, {
   //? Evita que sequelize agregue las columnas de createdAt y updatedAt
    timestamps: false
 })

 module.exports = Conversations