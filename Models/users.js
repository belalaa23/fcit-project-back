const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      mail: {
        type: Sequelize.STRING(50),
        
      },
      password: {
        type: Sequelize.STRING(50),
      },
      role: {
        type: Sequelize.STRING(50),
      },
    },
    {
      // This needs to be false to deactivate createdAt and updatedAt when sending the query
      timestamps: false,
    }
  );
  Users.associate = function (models) {};

  return Users;
};
