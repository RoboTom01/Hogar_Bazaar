const sequelize = require('../../config/connection');
const seedUsers = require('./users');
const seedItems = require('./items');
const seedCategories = require('./category');
const seedItemCategory = require('./item_category');

const seedingProcess = {
  sequelize_sync: async function(){
    await sequelize.sync({ force: true });
  },
  seed_users: async function(){
    await seedUsers();
  },
  seed_categories: async function(){
    await seedCategories();
  },
  seed_items: async function(){
    await seedItems();
  },
  seed_item_category: async function(){
    await seedItemCategory();
  }
}

const seedAll = async () => {
  for (const [key, func] of Object.entries(seedingProcess)) {
    await func()
  }
};

module.exports = seedAll
