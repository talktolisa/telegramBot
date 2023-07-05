
const Sequelize = require('sequelize');
const sequelize = require('./database')

const Ttl = sequelize.define(
  'Ttl',
  {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    uniqueId: {
      type: Sequelize.INTEGER,
      field: 'unique_id',
      allowNull: false,
      unique: true,
    },
    message: {
      type: Sequelize.JSONB,
      field: 'message',
      defaultValue: []
    },
    mode: {
      type: Sequelize.STRING,
      field: 'mode'
    },
    balance: {
        type: Sequelize.INTEGER,
        field: 'balance',
        defaultValue: 0
    }
  },
  {
    timestamps: true,
    paranoid: true,
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  }
);

module.exports = Ttl;
