const User = require('./User');
const Item = require('./Item');
const Category = require('./Category');
const ItemCategory = require('./ItemCategory');

Item.belongsToMany(Category, { through: ItemCategory });
Category.belongsToMany(Item, { through: ItemCategory });

module.exports = { User, Item, Category, ItemCategory };
