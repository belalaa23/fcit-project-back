const { Sequelize, DataTypes } = require("sequelize");
const participant=require("./participant");
module.exports = (sequelize, Sequelize) => {  
  const Formations = sequelize.define(
    "Formations",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      done: {
        type: DataTypes.BOOLEAN,
      },
      title:{
        type: DataTypes.STRING(50)
      },
      date:{
        type: DataTypes.STRING(50)
      },
      nombreparticipant:{
        type: DataTypes.INTEGER,
      }
    },
    {
      // This needs to be false to deactivate createdAt and updatedAt when sending the query
      timestamps: false,
    }
  );
  Formations.associate = function ({participant}) {
  
  };

  return Formations;
  };
