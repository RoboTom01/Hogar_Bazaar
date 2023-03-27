const mysql = require('mysql2/promise');
require('dotenv').config();

class DatabaseSetup {
    constructor() {
        this.connection = null;
        this.DB_NAME = process.env.DB_NAME
    }
    
    async init() {
        await this.connect();
        await this.setupDB();
    }

    async connect() {
        this.connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: ''
        });
    }

    async setupDB() {
        await this.connection.query(
            `CREATE DATABASE IF NOT EXISTS ${this.DB_NAME};`
        );
        await this.connection.query(
            `USE ${this.DB_NAME};`
        );
    }
}

module.exports = DatabaseSetup