const sequelize = require('../../config/connection');
const seedUsers = require('./users');
const seedItems = require('./items');

const seedingProcess = {
  sequelize_sync: async function(){
    await sequelize.sync({ force: true });
  },
  seed_users: async function(){
    await seedUsers();
  },
  seed_items: async function(){
    await seedItems();
  }
}

const seedAll = async () => {
  for (const [key, func] of Object.entries(seedingProcess)) {
    await func()
  }
};

module.exports = seedAll
