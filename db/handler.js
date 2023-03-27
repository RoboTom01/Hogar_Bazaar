const sequelize = require("../config/connection")
const seedAll = require("./seeds/index")

class DatabaseHandler {

    async init() {
        const db_setup = require("./setup")
        var db = new db_setup()
        await db.init();
    }

    async seed_db(){
        await seedAll()
    }
}

module.exports = DatabaseHandler