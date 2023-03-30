const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {}

Item.init(
    {
        
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        sale_price: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        sale_end: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        picture_url: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "google.com",
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'item',
    }
);

module.exports = Item;