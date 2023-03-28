const sequelize = require('../config/connection');
const { User } = require('../models/User');
const { Item } = require('../models/items');

const userData = require('./userData.json');
const itemData = require('./itemData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
