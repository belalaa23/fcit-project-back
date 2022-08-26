const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const participant = sequelize.define(
    "participant",
    {
      participantid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type: DataTypes.STRING(50)
      },
      etat:{
        type: DataTypes.STRING(50)
      },
      dmaj:{
        type: DataTypes.STRING(50)
      },
      formationid:{
        type: DataTypes.INTEGER,
      }
    },
    {
      // This needs to be false to deactivate createdAt and updatedAt when sending the query
      timestamps: false,
    }
  );
  participant.associate = (models) => {
    
  };

  return participant;
};
