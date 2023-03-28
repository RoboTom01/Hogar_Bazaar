const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ItemCategory extends Model {}

ItemCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Item',
        referencesKey: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        referencesKey: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'item_category',
  }
);

module.exports = ItemCategory;
