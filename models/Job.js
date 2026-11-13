
const Sequelize = require('sequelize');
const db = require('../db/connection');

const Job = db.define('job', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    salary: {
        type: Sequelize.STRING,
        allowNull: false
    },
    company: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    new_job: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Job;
